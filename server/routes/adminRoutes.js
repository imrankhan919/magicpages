import express from "express"
import adminController from "../controllers/adminController.js"
import protect from "../middlewares/authMiddleware.js"


const router = express.Router()


router.get("/credit_requests", protect.forAdmin, adminController.getCreditRequests)
router.put("/credit_requests/:rid", protect.forAdmin, adminController.updateCreditRequest)
router.get("/users", protect.forAdmin, adminController.getAllUsers)
router.put("/users/:uid", protect.forAdmin, adminController.updateUser)



export default router