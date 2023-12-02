/*
  This file defines the RecipesDAO class, which encapsulates methods for interacting with the "recipes" collection in the MongoDB database.
*/

let recipes

export default class RecipesDAO {

    /**
     * Establishes a connection with the "recipes" collection, which contains
     * all the recipes we use to determine the probability of an allergen 
     * being in a certain recipe/meal
     * 
     * @param conn a MongoClient object that is connected to our database
     */
    static async injectDB(conn) {
        // If we already have access to the "recipes" collection, return early
        if (recipes) {
            return
        }

        // Attempt to establish a connection with the "recipes" collection
        try {
            recipes = await conn
                    .db(process.env.ALLERGYALERT_NS)
                    .collection("recipes")
            
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in recipesDAO: ${e}`
            )
        }
    }

    /**
     * Retrieves recipes from the database using the provided filters
     * 
     * @param filters contains parameters for the query that will be 
     *                conducted on the 'recipes' collection
     * @returns a JSON string containing all the recipes that match with the 
     *          filters and the total number of results from the query
     */
    static async getRecipes({ filters = null } = {}) {
        let query = {}

        // Look for recipes that contain the given name, if one is given
        if (filters && "name" in filters) {
            query = { $text: { $search: filters["name"] } }
        }

        // Retrieve the recipes using the query string above
        let cursor
        try {
            cursor = await recipes.find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { recipesList: [], numRecipes: 0 }
        }

        // Reformat the query results into returnable values
        try {
            const recipesList = await cursor.toArray()
            const numRecipes = await recipes.countDocuments(query)

            return { recipesList, numRecipes }
        } catch (e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents, ${e}`
            )
            return { recipesList: [], numRecipes: 0}
        }
    }
}