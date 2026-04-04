import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: String,
  city: String,
  locality: String,
  type: { type: String, enum: ["pg", "flat"] },
  rent: Number,
  deposit: Number,
 roomType: { type: String, enum: ["Single", "Double", "Triple"] },
  furnished: { type: String, enum: ["Furnished", "Semi-Furnished", "Unfurnished"] },
  genderPreference: { type: String, enum: ["Male", "Female", "Any"] },
  amenities: [String],
  images: [String],
  ownerName: String,
  ownerPhone: String,
}, { timestamps: true });

const Properties = mongoose.model("Propeties", propertySchema);
export default Properties;