import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

const protect = async (req, res, next) => {
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


export default protect