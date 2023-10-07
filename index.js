const express = require("express")
const app = express()
const { connection } = require("./Config/db")
const { userroute } = require("./Routes/userroute")
const { taskroute } = require("./Routes/taskroute")
const { logRequestSync } = require('./Middleware/logger');
const rateLimit = require('express-rate-limit');
require("dotenv").config()
app.use(express.json())



const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 50, // Maximum 50 requests per minute
  message: 'Too many requests from this IP, please try again later.',
});

app.use(limiter);



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

