import express from "express";
import { Listing } from "../controllers/listingController.js";
const router=express.Router();
router.get("/",Listing)
export default router;