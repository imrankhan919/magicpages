import mongoose from "mongoose";

const refrenceImageSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const RefrenceImage = mongoose.model("RefrenceImage", refrenceImageSchema)


export default RefrenceImage