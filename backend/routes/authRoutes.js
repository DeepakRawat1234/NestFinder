import express from "express";
import  {Signup ,Login, VerifyOTP, SendOTP }   from "../controllers/authController.js";
const router=express.Router();
 router.post("/Register",Signup);
 router.post("/Login",Login);
 router.post("/verify-otp",VerifyOTP);
 router.post("/send-otp",SendOTP);
 export default router;