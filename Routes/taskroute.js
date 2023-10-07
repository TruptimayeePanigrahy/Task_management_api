const express = require("express")
const taskroute = express.Router()
const { taskmodel } = require("../Models/taskmodel")
const { auth } = require("../Middleware/auth")


//getall task
taskroute.get("/gettask",async (req, res) => {
    try {
        let data = await taskmodel.find()
        res.status(200).send({"msg":data})
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})

//getbyid
taskroute.get("/:id",auth,async (req, res) => {
    try {
        const {id}=req.params
        let data=await taskmodel.find({_id:id})
        res.status(200).send({"msg":data})
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})


//add new task
taskroute.post("/addtask",auth,async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const data = new taskmodel({ title, description, status })
        await data.save()
        res.status(201).send({"msg":"task save successfully"})
        
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})


//update task
taskroute.put("/updatetask/:id",auth,async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        await taskmodel.findByIdAndUpdate({ _id: id }, data)
        res.status(200).send({"msg":"task updated successfully!!"})
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})

//delete task
taskroute.delete("/deletetask/:id",auth,async (req, res) => {
    try {
        const { id } = req.params
        await taskmodel.findByIdAndDelete({ _id: id })
         res.status(200).send({"msg":"task deleted successfully!!"})
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})


module.exports={taskroute}