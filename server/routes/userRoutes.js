import express from "express"
import protect from "../middlewares/authMiddleware.js"
import userController from "../controllers/userController.js"
import upload from "../middlewares/imageUploadMiddleware.js"

const router = express.Router()

router.post("/upload", protect.forUser, upload.single('image'), userController.uploadRefrenceImage)


export default router