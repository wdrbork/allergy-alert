import express from "express"
import RecipesCtrl from "./recipes.controller.js"

const router = express.Router()

// To search for a specific recipe, search for "localhost:5000/api/v1/recipes?name=<recipe_name>"
router.route("/").get(RecipesCtrl.apiGetRecipes)

export default router