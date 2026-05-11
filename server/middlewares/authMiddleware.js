import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

const forUser = async (req, res, next) => {
    try {
        if (req.headers.authorization || req.headers.authorization.startsWith('Bearer')) {
            const token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            const user = await User.findById(decoded.id).select("-password")
            req.user = user
            next()
        } else {
            res.status(401)
            throw new Error("Unauthiorsed Access!!!")
        }
    } catch (error) {
        res.status(401)
        throw new Error("Unauthiorsed Access!!!")
    }


}

const forAdmin = async (req, res, next) => {
    try {
        if (req.headers.authorization || req.headers.authorization.startsWith('Bearer')) {
            const token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            const user = await User.findById(decoded.id).select("-password")
            req.user = user
            if (user.isAdmin) {
                next()
            } else {
                res.status(401)
                throw new Error("Admin Only : Unauthiorsed Access!!!")
            }
        } else {
            res.status(401)
            throw new Error("Unauthiorsed Access!!!")
        }
    } catch (error) {
        res.status(401)
        throw new Error("Unauthiorsed Access!!!")
    }


}

const protect = { forUser, forAdmin }

export default protect