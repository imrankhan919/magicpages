import ImageTemplate from "../models/templateModel.js"
import User from "../models/userModel.js"

const checkAndUpdateCredits = async (req, res, next) => {

    const { templateId } = req.body

    if (!templateId) {
        res.status(409)
        throw new Error("Please fill all details!")
    }
    const userId = req.user._id

    // check if template exists
    const template = await ImageTemplate.findById(templateId)

    if (!template) {
        res.status(404)
        throw new Error('Template Not Exists')
    }



    const user = await User.findById(userId)

    if (user.credits < 1) {
        res.status(429)
        throw new Error("Not Enough Credits...")
    }

    await User.findByIdAndUpdate(userId, { credits: user.credits - template.creditsRequired }, { new: true })

    next()

}

export default checkAndUpdateCredits