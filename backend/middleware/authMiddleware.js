import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
console.log("🔥 Middleware START");
  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; 
    console.log("Authenticated user:", req.user);
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};