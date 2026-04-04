// models/listingModel.js

const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  city: String,
  roomType: String,
  price: Number,
  gender: String,
});

module.exports = mongoose.model("Listing", listingSchema);