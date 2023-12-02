/*
  This file defines an Express router for handling API endpoints related to recipes.
*/

import express from "express"
import RecipesCtrl from "./recipes.controller.js"

const router = express.Router()
router.route("/").get(RecipesCtrl.apiGetRecipes)

export default router