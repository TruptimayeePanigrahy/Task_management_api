const express = require("express")
const app = express()
const { connection } = require("./Config/db")
require("dotenv").config()
app.use(express.json())



app.get("/", (req, res) => {
    res.send("home page")
})


app.listen(process.env.port,async () => {
    try {
        await connection
        console.log("DB is connected..")
    } catch (error) {
        console.log(error)
    }
    console.log("server is running..")
})

