import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  propertyId: {
    type: String,
    ref: "Property",
  },
  userId: {
    type: String,
    ref: "User",
  },
});
 export const Booking = mongoose.model("Booking", bookingSchema);