import mongoose from "mongoose";
import  {Booking}  from "../models/Booking.js";
import Properties from "../models/Properties.js";
import User from "../models/User.js";
export const getAllProperties = async (req, res) => {
  const { rent, city, type, gender, roomType } = req.query || {};
  let filter = {};

  console.log("Received Filters:", rent, city, type, gender, roomType);

  if (rent) {
    filter.rent = { $lte: Number(rent) }; 
  }

  if (city) {
    filter.city = city;
  }

  if (type) {
    filter.type = type; 
  }

  if (roomType) {
    filter.roomType = roomType; 
  }

  if (gender) {
    filter.genderPreference = gender;
  }

 

  try {
    const properties = await Properties.find(filter);
   
    res.status(200).json(properties);

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
export const getPropertyById = async (req, res) => {
    try{
        console.log("ID route hit:", req.params.id);

        const property = await Properties.findById(req.params.id);
        if(!property) return res.status(404).json({ message: "Property not found" });
        res.status(200).json(property);
    }catch(err){
        res.status(500).json({ message: "Server error" });
    }
};
export const createProperty = async (req, res) => {
    try{
        const newProperty = new Properties(req.body);
        const savedProperty = await newProperty.save();
        res.status(201).json(savedProperty);
    }catch(err){
        res.status(500).json({ message: "Server error" });
    }
}
export const updateProperty = async (req, res) => {
try{
    const updatedProperty = await Properties.findByIdAndUpdate(req.params.id);
    if(!updatedProperty) return res.status(404).json({ message: "Property not found" });
    res.status(200).json(updatedProperty);
}catch(err){
    res.status(500).json({ message: "Server error" });
}
}
export const deleteProperty = async (req, res) => {
    try{
        const deletedProperty = await Properties.findByIdAndDelete(req.params.id);
        if(!deletedProperty) return res.status(404).json({ message: "Property not found" });
        res.status(200).json({ message: "Property deleted" });
    }
    catch(err){
        res.status(500).json({ message: "Server error" });
    }
}
export const MatchController=async(req,res)=>{
  try{
    
    const  {id}  = req.params;
    
    const property = await Properties.findById(id);
    if (!property) {
      console.log("Property not found for ID:", id);
      return res.status(404).json({ message: "Property not found" });
    }
    const residents = property.residents[0] || [];
  
    //user habit search
    const userHabiit =await User.findOne({_id:"69d0f13c9c0c141907262861"}).select("preferences").lean();
    const  residentsUser = await User.findOne({_id: residents});
    
    const residentPreferences = residentsUser.preferences || {};
    res.status(200).json({residentPreferences,userHabiit});
   
  }
  catch{
      res.status(500).json({ message: "Server error" });
  }
   
}

export const addProperty = async (req, res) => {
  try {
   
    const images = req.files.map(file =>
      file.buffer.toString("base64")
    );

    const property = new Properties({
      ...req.body,
      images,
    });

    await property.save();

    res.status(201).json({
      success: true
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};