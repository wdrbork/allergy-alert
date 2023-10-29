import app from './server.js'
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 5000

MongoClient.connect(
    process.env.ALLERGYALERT_DB_URI,
    {
        wtimeoutMS: 2500 }
    )
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })

// ### Important Functions ######################################################
// #
// # recipes.insertOne(json_dict)
// #   - Inserts a single object into the "recipes" collection
// #   - json_dict example: {"_id": 1, "name": "Chocolate Cake", "ingredients": ["milk", "eggs", "flour"]}
// #
// # recipes.insertMany(array[json_dict])
// #   - Inserts an array of JSON objects into the "recipes" collection
// #
// # recipes.find(json_dict)
// #   - Returns an array of all JSON objects in the database that have the same 
// #     key-value pairs as the passed-in JSON object
// #   - IMPORTANT: Can use regular expressions for values in the passed-in JSON 
// #     object (could be nice for finding recipes with more specific names)
// #   - Passing in {} returns all entries in the database
// #   - Example: recipes.find({"name": "Chocolate Cake"}) would return:
// #     [{"_id": 1, "name": "Chocolate Cake", "ingredients": ["milk", "eggs", "flour"]}]
// #
// # recipes.findOne(json_dict)
// #   - Same as above, but only returns the first JSON object it finds with the 
// #     passed-in key-value pairs
// #
// # recipes.deleteOne(json_dict)
// #   - Deletes a single JSON object if it contains the given key-value pairs
// #
// # recipes.deleteMany(json_dict)
// #   - Deletes all entries that contain the given key-value pairs
// #   - Note that delete_many({}) deletes everything in the collection (pls dont use it)
// #
// # recipes.updateOne(json_dict, {update_operator: json_dict})
// #   - Updates a single entry in the database if one contains the passed-in
// #     key-value pairs. Can specify what fields to update and how they should 
// #     be updated using the update_operator
// #   - See https://www.mongodb.com/docs/manual/reference/operator/update/ for 
// #     the different kinds of update operators
// #   - Can also be used to add fields to the database
// #   - Ex. recipes.update_one({"_id": 1}, {"$set": {"name": "Tacos"}}) will 
// #     change the name of the first entry from "Chocolate Cake" to "Tacos"
// #   - Ex. recipes.update_one({}, {"$set": {"cost": "$4.99"}}) will add a 
// #     "cost" attribute to all entries in the database
