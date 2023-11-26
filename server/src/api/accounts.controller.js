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
          const { value } = req.query;

          if (!value) {
              res.status(400).json({ error: "Missing required parameters" });
              return;
          }

          const newUser = await AccountsDAO.addUser(value);

          res.json(newUser);
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

    static async apiGetMaxValue(req, res) {
      try {
        const maxValue = await AccountsDAO.getMaxValue();

        res.json({ maxValue });
      } catch (error) {
          console.error(`Error in apiGetMaxValue: ${error}`);
          res.status(500).json({ error: "Internal Server Error" });
      }
    }
}