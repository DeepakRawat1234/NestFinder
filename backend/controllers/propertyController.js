import Properties from "../models/Properties.js";
export const getAllProperties = async (req, res) => {
  const { rent, city, type, gender, roomType } = req.query || {};
  let filter = {};

  console.log("Received Filters:", rent, city, type, gender, roomType);

  if (rent) {
    filter.rent = { $lte: Number(rent) }; // ✅ fix
  }

  if (city) {
    filter.city = city;
  }

  if (type) {
    filter.type = type; // ✅ fix
  }

  if (roomType) {
    filter.roomType = roomType; // ✅ added
  }

  if (gender) {
    filter.genderPreference = gender;
  }

  console.log("FINAL FILTER:", filter);

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
