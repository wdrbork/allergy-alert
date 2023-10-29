const path = '../backend/node_modules/mongodb'
const { MongoClient, ServerApiVersion } = require(path);
const uri = "mongodb+srv://wdrb2001:E1ArjPx52iukOs7U@cluster0.vdcfw8l.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const cluster = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const database = cluster.db('allergy-alert')
const recipes = database.collection('recipes')

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await cluster.connect();
    // Send a ping to confirm a successful connection
    await cluster.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await cluster.close();
  }
}
run().catch(console.dir);
  
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
