/*
  This file defines the AccountsController class, which serves as a controller for handling API requests related to user accounts and allergens.
*/

import AccountsDAO from "../dao/accountsDAO.js"

export default class AccountsController {
    static async apiGetAccounts(req, res) {
        let filters = {}
        if (req.query.value) {
           filters.value = req.query.value
        }

        const { accountsList } = await AccountsDAO.getAccounts({ filters })

        let response = {
            accounts: accountsList,
            filters: filters
        }
        res.json(response)
    }

    static async apiAddUser(req, res) {
      try {
        const newUser = await AccountsDAO.addUser();
    
        // Ensure that newUser is an object and has the _id field
        if (newUser && newUser.insertedId) {
          // Extract the _id field
          const userId = newUser.insertedId;
    
          // Add the _id field to the response
          res.json({ userId });
        } else {
          // Handle the case where _id is not present in newUser
          res.status(500).json({ error: "Internal Server Error: Missing _id field" });
        }
      } catch (error) {
        console.error(`Error in apiCreateUser: ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }

    static async apiAddAllergen(req, res) {
      try {
        const { value, allergen } = req.query;
  
        if (!value || !allergen) {
          res.status(400).json({ error: "Missing required parameters" });
          return;
        }
  
        const result = await AccountsDAO.addAllergen(value, allergen);
  
        if (result.success) {
          res.json({ success: true });
        } else {
          res.status(404).json({ error: result.error });
        }
      } catch (error) {
        console.error(`Error in apiAddAllergen: ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }

    static async apiRemoveAllergen(req, res) {
      try {
        const { value, allergen } = req.query;
  
        if (!value || !allergen) {
          res.status(400).json({ error: "Missing required parameters" });
          return;
        }
  
        const result = await AccountsDAO.removeAllergen(value, allergen);
  
        if (result.success) {
          res.json({ success: true });
        } else {
          res.status(404).json({ error: result.error });
        }
      } catch (error) {
        console.error(`Error in apiRemoveAllergen: ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }

}