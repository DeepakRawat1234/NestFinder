import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
const app=express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoutes);
app.get("/",(req,res)=>{
res.send("Welcome to NestFinder API");
})
const PORT = process.env.PORT || 6000;
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.error("Error connecting to MongoDB:", err);
})

app.listen(PORT,()=>{
    
        console.log(`Server is running on port ${process.env.PORT}`);
    
})