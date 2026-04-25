import mongoose from "mongoose";



const propertySchema = new mongoose.Schema({
  title: String,
  city: String,
  locality: String,

  type: {
    type: String,
    enum: ["pg", "flat"],
  },

  rent: Number,
  foodCharges: {
    type: Number,
    default: 0
  },

  deposit: Number,

  roomType: {
    type: String,
    enum: ["Single", "Double", "Triple"],
  },

  furnished: {
    type: String,
    enum: ["Furnished", "Semi-Furnished", "Unfurnished"],
  },

  genderPreference: {
    type: String,
    enum: ["Male", "Female", "Any"],
  },

  amenities: [String],
  images: [String],

  safety: {
    cctv: { type: Boolean, default: false },
    guard: { type: Boolean, default: false },
    biometric: { type: Boolean, default: false },
  },

  ratings: {
    room: { type: Number, default: 0 },
    food: { type: Number, default: 0 },
    owner: { type: Number, default: 0 },
    wifi: { type: Number, default: 0 },
  },

  reviews: [
    {
      name: String,
      comment: String,
      rating: Number,
    },
  ],

  ownerName: String,
  ownerPhone: String,

  
  residents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

}, { timestamps: true });



const Properties = mongoose.model("Propeties", propertySchema);
export default Properties;