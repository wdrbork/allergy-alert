/*
  This file defines the AccountsDAO class, which encapsulates methods for interacting with the "accounts" collection in the MongoDB database.
*/

import { ObjectId } from 'mongodb'
let accounts

export default class AccountsDAO {

    /**
     * Establishes a connection with the accounts" collection, which contains
     * all the account/cookie info
     * 
     * @param conn a MongoClient object that is connected to our database
     */
    static async injectDB(conn) {
        // If we already have access to the "accounts" collection, return early
        if (accounts) {
            return
        }

        // Attempt to establish a connection with the "accounts" collection
        try {
            accounts = await conn
                    .db(process.env.ALLERGYALERT_NS)
                    .collection("accounts")
            
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in accountsDAO: ${e}`
            )
        }
    }

    /**
     * Retrieves accounts from the database using the provided filters
     * 
     * @param filters contains parameters for the query that will be 
     *                conducted on the 'accounts' collection
     * @returns a JSON string containing all the accounts that match with the 
     *          filters and the total number of results from the query
     */
    static async getAccounts({ filters = null } = {}) {
        let query = {};
      
        // Look for accounts that match the given value in the _id field
        if (filters && "value" in filters) {
          try {
            const objectId = new ObjectId(filters.value);
            query = { _id: objectId };
          } catch (error) {
            console.error(`Invalid ObjectId: ${error}`);
            return { accountsList: [], numAccounts: 0 };
          }
        }
      
        // Retrieve the accounts using the query string above
        let cursor;
        try {
          cursor = await accounts.find(query);
        } catch (e) {
          console.error(`Unable to issue find command, ${e}`);
          return { accountsList: [], numAccounts: 0 };
        }
      
        // Reformat the query results into returnable values
        try {
          const accountsList = await cursor.toArray();
      
          return { accountsList, numAccounts: accountsList.length };
        } catch (e) {
          console.error(
            `Unable to convert cursor to array or problem counting documents, ${e}`
          );
          return { accountsList: [], numAccounts: 0 };
        }
      }

    /**
     * Create a new user account
     * 
     * @returns the newly created user object
     */
    static async addUser() {
        try {
          const userData = {
            allergies: []
          };
      
          const result = await accounts.insertOne(userData);
      
          if (!result.acknowledged) {
            console.error("Failed to create a new user.");
            throw new Error("Failed to create a new user");
          }
      
          return result; // Return the newly created user object with _id
        } catch (error) {
          console.error(`Error creating user: ${error}`);
          throw error;
        }
      }

    /**
     * Add allergen to account
     * 
     * @param value the users cookie value
     * @param allergen the allergen to add
     * @returns boolean of if allergen was successfully added
     */
    static async addAllergen(value, allergen) {
        try {
          const result = await accounts.updateOne(
            { "_id": new ObjectId(value) },
            { $push: { "allergies": allergen } }
          );
    
          if (result.modifiedCount === 0) {
            throw new Error("No account found with the given ID");
          }
    
          return { success: true };
        } catch (error) {
          console.error(`Error adding allergen: ${error}`);
          return { success: false, error: error.message };
        }
      }

     /**
     * Remove allergen to account
     * 
     * @param value the users cookie value
     * @param allergen the allergen to remove
     * @returns boolean of if allergen was successfully removed
     */
    static async removeAllergen(value, allergen) {
        try {
          const result = await accounts.updateOne(
            { "_id": new ObjectId(value) },
            { $pull: { "allergies": allergen } }
          );
    
          if (result.modifiedCount === 0) {
            throw new Error("No account found with the given ID");
          }
    
          return { success: true };
        } catch (error) {
          console.error(`Error removing allergen: ${error}`);
          return { success: false, error: error.message };
        }
      }

}