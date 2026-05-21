import fs from "node:fs"
import uploadToCloudinary from "../middlewares/cloudinaryMiddleware.js"
import RefrenceImage from "../models/refrenceImageModel.js"

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



const userController = { uploadRefrenceImage, getMyRefrenceImages }


export default userController