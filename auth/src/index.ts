import express from "express"
import { PORT } from "./config"

const app = express()

app.get("/", (req, res) => {
    res.send("Success")
})


app.listen(PORT, () => {
    console.log(`Auth Service is running on http://localhost:${PORT}`)
})

module.exports = { app };