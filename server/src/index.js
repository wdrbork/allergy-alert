/*
  Main entry point for the Allergy Alert application.
 
  Description:
  This file initializes the server, establishes a connection to the MongoDB database,
  and sets up key components for handling HTTP requests and managing data.
 */

import app from './server.js'
import mongodb from "mongodb"
import dotenv from "dotenv"
import RecipesDAO from "./dao/recipesDAO.js"
import AccountsDAO from "./dao/accountsDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 5000

let database = process.env.ALLERGYALERT_DB_URI

MongoClient.connect(
        database,
        { wtimeoutMS: 2500 }
    )
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await Promise.all([
            RecipesDAO.injectDB(client),
            AccountsDAO.injectDB(client),
        ]);
        
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })