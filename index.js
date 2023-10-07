const express = require("express")
const app = express()
const { connection } = require("./Config/db")
const { userroute } = require("./Routes/userroute")
const { taskroute } = require("./Routes/taskroute")
const {logRequestSync} = require('./Middleware/logger');
require("dotenv").config()
app.use(express.json())


//app.use(logRequestSync)
app.get("/", (req, res) => {
    res.send("home page")
})


app.use(logRequestSync)
app.use("/user",userroute)
app.use("/task", taskroute)


app.listen(process.env.port,async () => {
    try {
        await connection
        console.log("DB is connected..")
    } catch (error) {
        console.log(error)
    }
    console.log("server is running..")
})

