import express from "express"
import protect from "../middlewares/authMiddleware.js"
import userController from "../controllers/userController.js"
import upload from "../middlewares/imageUploadMiddleware.js"

const router = express.Router()

router.post("/request_credits", protect.forUser, userController.requestCredits)
router.post("/upload", protect.forUser, upload.single('image'), userController.uploadRefrenceImage)
router.get("/images", protect.forUser, userController.getMyRefrenceImages)
router.get("/templates", protect.forUser, userController.getTemplates)

export default router