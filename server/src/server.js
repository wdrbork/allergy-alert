import express from "express"
import cors from "cors"
import recipes from "./api/recipes.route.js"
import hello from "./api/hello.route.js"

const app = express()

const corsOptions = {
    origin: "http://localhost:3000" // frontend URI (ReactJS)
}

app.use(cors(corsOptions))
app.use(express.json())

// To add a call to the database, include the call "app.use(<URL from root>)"
// and add a "route" file to the API folder that follows the existing layout

// Testing calls
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend!"});
});
app.use("/api/v1/hello", hello)  // This is purely for testing

// Database retrievals
app.use("/api/v1/recipes", recipes)
app.use("*", (req, res) => res.status(404).json({error: "Not Found"}))

export default app

// Note: to run the server, run the command "nodemon server index.js" in the 
// terminal (assuming Node.js is already installed)