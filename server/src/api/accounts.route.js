import express from "express"
import AccountsCtrl from "./accounts.controller.js"

const router = express.Router()

// To search for a specific acount, search for "localhost:5000/api/v1/accounts?value=<cookie_value>"
router.route("/").get(AccountsCtrl.apiGetAccounts)
// To add a user use "localhost:5000/api/v1/accounts/addUser?value=<cookie_value>"
router.route("/addUser").post(AccountsCtrl.apiAddUser)
// To add an allergen use "localhost:5000/api/v1/accounts/addAllergen?value=<cookie_value>&allergen=<allergen>"
router.route("/addAllergen").post(AccountsCtrl.apiAddAllergen)

 
export default router