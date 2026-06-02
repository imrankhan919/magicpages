import mongoose from "mongoose";

const creditRequestSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    credits: {
        type: Number,
        required: true
    },
    isApproved: {
        type: Boolean,
        default: false,
        required: true
    }

}, {
    timestamps: true
})

const CreditRequest = new mongoose.model("CreditRequest", creditRequestSchema)

export default CreditRequest