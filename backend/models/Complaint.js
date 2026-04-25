import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property", // agar property model hai
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "Urgent"],
      default: "Medium",
    },
    images: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Complaint", complaintSchema);