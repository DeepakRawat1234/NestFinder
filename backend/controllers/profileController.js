import express from "express";
import User from "../models/User.js";
export const GetUserProfile =  async (req, res) => {
  
    try {
    const user = await User.findById( req.user.userId );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(201).json(user);

  } catch (err) {
    res.status(500).json({ message: err.message });
  
}
};