import app from './server.js'
import mongodb from "mongodb"
import dotenv from "dotenv"
import RecipesDAO from "./dao/recipesDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 5000

let database = process.env.ALLERGYALERT_DB_URI
if (process.env.NODE_ENV === "testing") {
    database = process.env.ALLERGYALERT_URI_TEST
}

MongoClient.connect(
        database,
        { wtimeoutMS: 2500 }
    )
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await RecipesDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })