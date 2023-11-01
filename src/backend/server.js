import express from "express"
import cors from "cors"
import recipes from "./api/recipes.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/", recipes)
app.use("*", (req, res) => res.status(404).json({error: "Not Found"}))

export default app

// Note: to run the server, run the command "nodemon server index.js" in the 
// terminal (assuming Node.js is already installed)