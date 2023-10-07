const jwt = require("jsonwebtoken")
require("dotenv").config()


const auth = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(400).send({"msg":"please login"})
    }
    if (token) {
        const decoded = jwt.verify(token, process.env.secrete)
        if (decoded) {
            req.body.id = decoded.id
            req.body.email = decoded.email
            next()
        } else {
            return res.status(400).send({"msg":"please login"})
        }
    }
}

module.exports={auth}