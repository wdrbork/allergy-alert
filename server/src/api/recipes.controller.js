/*
  This file defines the RecipesController class, which serves as a controller for handling API requests related to recipes.
*/

import RecipesDAO from "../dao/recipesDAO.js"

export default class RecipesController {
    static async apiGetRecipes(req, res) {
        let filters = {}
        if (req.query.name) {
            filters.name = req.query.name
        }

        const { recipesList, numRecipes } = await RecipesDAO.getRecipes({ filters })

        let response = {
            recipes: recipesList,
            filters: filters,
            total_results: numRecipes
        }
        res.json(response)
    }
}