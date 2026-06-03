import mongoose from "mongoose";

const templateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    prompt: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true,
        required: true
    },
    creditsRequired: {
        type: Number,
        default: 0,
        required: true
    }
}, {
    timestamps: true
})


const ImageTemplate = mongoose.model('ImageTemplate', templateSchema)


export default ImageTemplate