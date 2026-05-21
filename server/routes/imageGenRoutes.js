import express from "express"
import protect from "../middlewares/authMiddleware.js"
import imageController from "../controllers/imageGenController.js"


const router = express.Router()

router.post("/generate", protect.forUser, imageController.transformImage)


export default router