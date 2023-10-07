const express = require("express")
const taskroute = express.Router()
const { taskmodel } = require("../Models/taskmodel")
const { auth } = require("../Middleware/auth")

taskroute.get("/gettask",async (req, res) => {
    try {
        let data = await taskmodel.find()
        res.status(200).send({"msg":data})
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})

taskroute.post("/addtask",async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const data = new taskmodel({ title, description, status })
        await data.save()
        res.status(201).send({"msg":"task save successfully"})
        
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})

taskroute.put("/updatetask/:id",async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        await taskmodel.findByIdAndUpdate({ _id: id }, data)
        res.status(200).send({"msg":"task updated successfully!!"})
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})

taskroute.delete("/deletetask/:id",async (req, res) => {
    try {
        const { id } = req.params
        await taskmodel.findByIdAndDelete({ _id: id })
         res.status(200).send({"msg":"task deleted successfully!!"})
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})


module.exports={taskroute}