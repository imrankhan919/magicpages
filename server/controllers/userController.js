import fs from "node:fs"
import uploadToCloudinary from "../middlewares/cloudinaryMiddleware.js"
import RefrenceImage from "../models/refrenceImageModel.js"
import CreditRequest from "../models/creditRequestModel.js"
import ImageTemplate from "../models/templateModel.js"
import User from "../models/userModel.js"
import GenImage from "../models/genImageModel.js"

const uploadRefrenceImage = async (req, res) => {

    let userId = req.user._id


    const imageURL = await uploadToCloudinary(req.file.path)
    fs.unlinkSync(req.file.path)


    let refrenceImage = await RefrenceImage.create({
        user: userId,
        imageURL: imageURL.secure_url
    })

    if (!refrenceImage) {
        res.status(409)
        throw new Error("Image Not Uploaded And Created!")
    }

    res.status(201).json(refrenceImage)

}


const getMyRefrenceImages = async (req, res) => {

    const userId = req.user._id

    const images = await RefrenceImage.find({ user: userId })

    if (!images) {
        res.status(404)
        throw new Error("Images Not Found!")
    }

    res.status(200).json(images)


}



const requestCredits = async (req, res) => {

    const { credits } = req.body

    if (!credits) {
        res.status(409)
        throw new Error("Please Enter Requested Credits...")
    }

    const userId = req.user._id

    const creditRequest = new CreditRequest({
        user: userId,
        credits: credits
    })

    await creditRequest.save()
    await creditRequest.populate("user")

    if (!creditRequest) {
        res.status(409)
        throw new Error("No Credit Request Created!")
    }

    res.status(201).json(creditRequest)


}


const getTemplates = async (req, res) => {
    const templates = await ImageTemplate.find()

    if (!templates) {
        res.status(404)
        throw new Error("Templates Not Found")
    }

    res.status(200).json(templates)


}

const getProfile = async (req, res) => {

    const userId = req.user._id

    const user = await User.findById(userId)
    const refrenceImages = await RefrenceImage.find({ user: user })
    const generatedImages = await GenImage.find({ user: user })
    const creditHistory = await CreditRequest.find({ user: user })


    if (!user) {
        res.status(404)
        throw new Error("Error in getting profile")
    }



    res.status(200).json({ user, refrenceImages, generatedImages, creditHistory })



}


const userController = { uploadRefrenceImage, getMyRefrenceImages, requestCredits, getTemplates, getProfile }


export default userController