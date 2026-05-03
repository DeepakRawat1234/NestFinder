import express from "express";
import {   addProperty, createProperty, deleteProperty, getAllProperties, getPropertyById, MatchController, updateProperty } from "../controllers/propertyController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
const router = express.Router();
router.get("/", getAllProperties);
router.get("/:id", getPropertyById);
router.post("/",createProperty);
router.put("/:id", updateProperty); 
router.delete("/:id", deleteProperty);
router.get("/match-score/:id",MatchController);
router.post("/add-property",upload.array("images"),addProperty);

export default router;
