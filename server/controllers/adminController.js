import CreditRequest from "../models/creditRequestModel.js"
import User from "../models/userModel.js"

const getAllUsers = async (req, res) => {

    const users = await User.find().select("-password")

    if (!users) {
        res.status(404)
        throw new Error("Users Not Found")
    }

    res.status(200).json(users)
}


const updateUser = async (req, res) => {

    const user = await User.findById(req.params.uid)

    if (!user) {
        res.status(404)
        throw new Error("User not found!")
    }

    const updatedUser = await User.findByIdAndUpdate(user._id, req.body, { new: true })

    if (!updatedUser) {
        res.status(409)
        throw new Error("User not updated!")
    }

    res.status(200).json(user)

}


const getCreditRequests = async (req, res) => {

    const creditRequests = await CreditRequest.find().populate("user")

    if (!creditRequests) {
        res.status(404)
        throw new Error("No Requests Found!")
    }

    res.status(200).json(creditRequests)

}


const updateCreditRequest = async (req, res) => {
    const requestId = req.params.rid
    const { isApproved } = req.body

    const updatedRequest = await CreditRequest.findByIdAndUpdate(requestId, { isApproved: isApproved }, { new: true })

    const user = await User.findById(updatedRequest.user)

    if (updatedRequest.isApproved) {
        await User.findByIdAndUpdate(updatedRequest.user, { credits: user.credits + updatedRequest.credits }, { new: true })

        res.status(200).json({
            msg: "Credits Approved",
            user: user
        })
    } else {

        res.status(200).json({
            msg: "Credits DisApproved",
            user: user
        })

    }




}




const adminController = { getAllUsers, updateUser, getCreditRequests, updateCreditRequest }


export default adminController