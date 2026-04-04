import mongoose from "mongoose";
import Property from "./models/Properties.js";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
const propertiesData = [
  {
    title: "1BHK Furnished in Premnagar",
    city: "Dehradun",
    locality: "Premnagar",
    type: "flat",
    rent: 7000,
    deposit: 14000,
    bhk: 1,
    roomType: "Single",
    furnished: "Furnished",
    genderPreference: "Any",
    amenities: ["WiFi", "Geyser", "Security"],
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600"
    ],
    ownerName: "Ramesh Nautiyal",
    ownerPhone: "9897112233"
  },
  {
    title: "Boys PG in Premnagar",
    city: "Dehradun",
    locality: "Premnagar",
    type: "pg",
    rent: 5000,
    deposit: 10000,
    bhk: 1,
    roomType: "Double",
    furnished: "Furnished",
    genderPreference: "Male",
    amenities: ["WiFi", "Meals", "Laundry"],
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600"
    ],
    ownerName: "Sunil Rawat",
    ownerPhone: "9897223344"
  },
  {
    title: "Girls PG in Bhuwala",
    city: "Dehradun",
    locality: "Bhuwala",
    type: "pg",
    rent: 5500,
    deposit: 11000,
    bhk: 1,
    roomType: "Triple",
    furnished: "Furnished",
    genderPreference: "Female",
    amenities: ["WiFi", "Meals", "Security"],
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600"
    ],
    ownerName: "Sunita Bisht",
    ownerPhone: "9897334455"
  },
  {
    title: "2BHK Semi-Furnished in Bhuwala",
    city: "Dehradun",
    locality: "Bhuwala",
    type: "flat",
    rent: 9500,
    deposit: 19000,
    bhk: 2,
    roomType: "Double",
    furnished: "Semi-Furnished",
    genderPreference: "Any",
    amenities: ["Parking", "Power Backup", "Geyser"],
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600"
    ],
    ownerName: "Mohan Panwar",
    ownerPhone: "9897445566"
  },
  {
    title: "2BHK Furnished on Rajpur Road",
    city: "Dehradun",
    locality: "Rajpur Road",
    type: "flat",
    rent: 18000,
    deposit: 36000,
    bhk: 2,
    roomType: "Double",
    furnished: "Furnished",
    genderPreference: "Any",
    amenities: ["WiFi", "AC", "Parking", "Lift", "Security"],
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600"
    ],
    ownerName: "Anil Arora",
    ownerPhone: "9897778899"
  },
  {
    title: "Boys PG near GMS Road IT Park",
    city: "Dehradun",
    locality: "GMS Road",
    type: "pg",
    rent: 6000,
    deposit: 12000,
    bhk: 1,
    roomType: "Double",
    furnished: "Furnished",
    genderPreference: "Male",
    amenities: ["WiFi", "Meals", "AC", "Laundry", "Security"],
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600"
    ],
    ownerName: "Vikash Aggarwal",
    ownerPhone: "9897067890"
  },
  {
    title: "1BHK Budget in Dalanwala",
    city: "Dehradun",
    locality: "Dalanwala",
    type: "flat",
    rent: 8000,
    deposit: 16000,
    bhk: 1,
    roomType: "Single",
    furnished: "Semi-Furnished",
    genderPreference: "Any",
    amenities: ["Geyser", "Power Backup", "Security"],
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600"
    ],
    ownerName: "Vinod Dobhal",
    ownerPhone: "9876001122"
  },
  {
    title: "Girls PG in Dalanwala",
    city: "Dehradun",
    locality: "Dalanwala",
    type: "pg",
    rent: 6000,
    deposit: 12000,
    bhk: 1,
    roomType: "Triple",
    furnished: "Furnished",
    genderPreference: "Female",
    amenities: ["WiFi", "Meals", "Laundry", "Security"],
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600"
    ],
    ownerName: "Rekha Uniyal",
    ownerPhone: "9876223344"
  },
  {
    title: "3BHK on Raipur Road",
    city: "Dehradun",
    locality: "Raipur Road",
    type: "flat",
    rent: 20000,
    deposit: 40000,
    bhk: 3,
    roomType: "Triple",
    furnished: "Furnished",
    genderPreference: "Any",
    amenities: ["Garden", "Parking", "Power Backup", "Security"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
    ],
    ownerName: "Poonam Rana",
    ownerPhone: "9876556677"
  },
  {
    title: "Co-ed PG in Patel Nagar",
    city: "Dehradun",
    locality: "Patel Nagar",
    type: "pg",
    rent: 5500,
    deposit: 11000,
    bhk: 1,
    roomType: "Double",
    furnished: "Furnished",
    genderPreference: "Any",
    amenities: ["WiFi", "Geyser", "Security"],
    images: [
      "https://images.unsplash.com/photo-1587985064135-0366536eab42?w=600",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600"
    ],
    ownerName: "Ramesh Pant",
    ownerPhone: "9897045678"
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");

  
    await Property.deleteMany({});
    console.log("🗑️  Old data cleared");

   
    const properties = await Property.insertMany(propertiesData);

  

    
    
   

    mongoose.disconnect();
  
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
}

seed();