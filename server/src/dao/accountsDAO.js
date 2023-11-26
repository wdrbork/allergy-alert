import mongodb from "mongodb"
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
        let query = {}

        // Look for accounts that contain the given name, if one is given
        if (filters && "value" in filters) {
            query = { $text: { $search: filters["value"] } }
        }

        // Retrieve the accounts using the query string above
        let cursor
        try {
            cursor = await accounts.find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { recipesList: [], numRecipes: 0 }
        }

        // Reformat the query results into returnable values
        try {
            const accountsList = await cursor.toArray()

            return { accountsList }
        } catch (e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents, ${e}`
            )
            return { recipesList: [], numRecipes: 0}
        }
    }

    /**
     * Create a new user account
     * 
     * @param value the user's cookie value
     * @returns the newly created user object
     */
    static async addUser(value) {
        try {
            const userData = {
                value: value,
                allergies: []
            };

            const result = await accounts.insertOne(userData);
            
            if (result.insertedCount !== 1) {
                throw new Error("Failed to create a new user");
            }

            return result.ops[0]; // Return the newly created user object
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
            { "value": value },
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

      static async getMaxValue() {
        try {
            const result = await accounts.find().sort({ "value": -1 }).limit(1).toArray();
    
            if (result.length === 0) {
                throw new Error("No accounts found in the database");
            }
    
            return result[0].value; // Return the max value
        } catch (error) {
            console.error(`Error in getMaxValue: ${error}`);
            throw error;
        }
    }
}