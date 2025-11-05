import express from "express";
const router = express.Router();
import { addSpot,getAllSpot,getAsingleSpot,getNearbySpot,updateAspot,verifySpot,deleteSpot } from "../controllers/addspotController";

router.post("/add-spot",addSpot);
router.get("/get-all-spot",getAllSpot);
router.get("/get-a-single-spot/:spotId",getAsingleSpot);
router.delete("/delete-spot/:spotId",getNearbySpot);
router.put("/update-spot/:spotId",updateAspot);
router.post("/verify-spot/:spotId",verifySpot);
router.post('/get-nearby-spot',deleteSpot);

export default router;
