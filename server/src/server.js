/*
  Configuration and setup of the Allergy Alert Express server.
 
  Description:
  This file configures an Express.js server for the Allergy Alert application. It includes
  middleware such as CORS for handling cross-origin requests, sets up routes for different
  API endpoints, and defines database retrieval routes. Additionally, it provides testing
  endpoints for connectivity and handles 404 errors.
*/

import express from "express"
import cors from "cors"
import recipes from "./api/recipes.route.js"
import accounts from "./api/accounts.route.js"
import hello from "./api/hello.route.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()

let frontend_url = process.env.FRONTEND_URL;
if (process.env.NODE_ENV.trim() === "testing") {
    frontend_url = "http://localhost:" + process.env.FRONTEND_PORT;
}

const corsOptions = {
    origin: frontend_url
}

app.use(cors(corsOptions))
app.use(express.json())

// To add a call to the database, include the call "app.use(<URL from root>)"
// and add a "route" file to the API folder that follows the existing layout

// Testing calls
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend!"});
});
app.use("/api/v1/hello", hello)

// Database retrievals
app.use("/api/v1/recipes", recipes)
app.use("/api/v1/accounts", accounts)
app.use("*", (req, res) => res.status(404).json({error: "Not Found"}))

export default app