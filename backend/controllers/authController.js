import User from "../models/User.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { useState } from "react";
import OtpStore from "../otpStore.js";
import jwt from "jsonwebtoken";


export const Signup = async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const role = req.body.role;

    const smoking = req.body.smoking;
    const drinking = req.body.drinking;
    const workingHours = req.body.workingHours;
    const food = req.body.food;
    const sleep = req.body.sleep;
    const cleanliness = req.body.cleanliness;
    const guestPolicy = req.body.guestPolicy;

    try {
        const find = await User.findOne({ email, phone });
        if (find) {
            console.log("User already exists");
            return res.status(400).json({ message: "User already exists" });
        }
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            name, email, phone, passwordHash, role,
            smoking, drinking, workingHours, food, sleep, cleanliness, guestPolicy
        })
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    }
    catch (err) {
        console.error("Error during registration:", err);
        res.status(500).json({ message: "Server error during registration" });
    }
}
export const Login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    console.log(req.body);
    try {
        const match = await User.findOne({ email });
        if (!match) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }
        console.log("User found:", match);
        const isPasswordValid = await bcrypt.compare(password, match.passwordHash);
        if (!isPasswordValid) {
            console.log("Invalid password");
            return res.status(401).json({ message: "Invalid password" });
        }

        else {
            const token = jwt.sign(
                { userId: match._id, 
                    role:match.role
                },
                process.env.JWT_SECRET,
{expiresIn: "1d"}
            )
       
            res.status(200).json({ message: "Login successful" , token});
        }
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).json({ message: "Server error during login" });
    }
}
export const SendOTP = async (req, res) => {
    const email = req.body.email;
    let otp = Math.floor(100000 + Math.random() * 900000);
    console.log("Generated OTP for email", email, "is", otp);
    OtpStore[email] = otp;
    console.log("Current OTP Store:", OtpStore);
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "rawatyuvi.2006@gmail.com",
            pass: process.env.GMAILAPPPASSWORD, // Gmail App Password
        },

    });
    await transporter.sendMail({
        from: "rawatyuvi.2006@gmail.com",
        to: email,
        subject: "NestFinder email verification  Code",
        html: `<h2>Your OTP is: ${otp}</h2>`,
    });
    res.status(200).json({ message: "OTP sent successfully" });
}
export const VerifyOTP = async (req, res) => {
    const email = req.body.email;
    const otp = req.body.otp;

    if (OtpStore[email] == otp) {
        OtpStore[email] = " ";

        res.status(200).json({ message: "OTP verified successfully", email });
    }
    else {

        res.status(400).json({ message: "Invalid OTP" });
    }
}