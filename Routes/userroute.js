const express = require("express")
const {usermodel}=require("../Models/usermodel")
const userroute = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt=require("bcrypt")
//const createRequestLogger=require("../Middleware/logger")


userroute.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body
        const user = await usermodel.findOne({ email })
        if (!user) {
            return req.status(200).send({"msg":"User already present please login"})
        }
        const haspass = bcrypt.hashSync(password, 7)
        let newuser = new usermodel({ username, email, password: haspass })
        await newuser.save()
        res.status(200).send({"msg":"Registration successfull"})
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})


userroute.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body
        const user = await usermodel.findOne({ email })
        if (!user) {
          return  res.status(200).send({"msg":"Email not found register first"})
        }
        let hasspass = bcrypt.compareSync(password, user.password)
        if (!hasspass) {
            return res.status(400).send({"msg":"password is incorrect"})
        }

        let token = jwt.sign({ id: user._id, email: user.email }, process.env.secrete, { expiresIn: "6hr" })
       
        res.status(200).send({"msg":"login successfull","username":user.username,"token":token,"userid":user._id})
    } catch (error) {
        res.status(400).send({ "msg": error })
    }
})


module.exports={userroute}
