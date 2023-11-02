// Note: this class is strictly for testing purposes

import express from "express"

const router = express.Router()

router.get('/', (req, res) => {
    res.send("Hello World")
}) 

export default router