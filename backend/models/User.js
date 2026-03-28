import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  passwordHash: { type: String, required: true },
  role: {
    type: String,
    enum: ["tenant", "owner", "admin"],
    default: "tenant"
  },
  preferences: {
    smoking: { type: String, 
      enum: ["smoker","non-smoker","doesnt-mind"],
      default: "doesnt-mind" },
    drinking: { type: String,
      enum: ["drinker","non-drinker","occasional","doesnt-mind"],
      default: "doesnt-mind" },
    workingHours: { type: String,
      enum: ["day-shift","night-shift","wfh","student"],
      default: "student" },
    food: { type: String,
      enum: ["vegetarian","non-vegetarian","eggetarian","jain","doesnt-mind"],
      default: "doesnt-mind" },
    sleep: { type: String,
      enum: ["early","night-owl","flexible"],
      default: "flexible" },
    cleanliness: { type: String,
      enum: ["very-neat","moderate","relaxed"],
      default: "moderate" },
    guestPolicy: { type: String,
      enum: ["no-guests","occasional","anytime"],
      default: "occasional" }
  },
  isVerified: { type: Boolean, default: false },
  whatsapp: { type: String }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;