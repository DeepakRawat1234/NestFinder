import Complaint from "../models/Complaint.js";


export const createComplaint = async (req, res) => {
  try {
    console.log("BODY:", req.body); // 👈 check aa raha ya nahi
const propertyId="69e0c8393e2a6cbbcbd1cba9"
    const {  category, summary, description, priority ,images} = req.body;

    const complaint = await Complaint.create({
      propertyId,
      category,
      summary,
      description,
      priority,
      images,
    });


    res.status(201).json({
      success: true,
      data: complaint,
    });

  } catch (err) {
   
    res.status(500).json({ message: err.message });
  }
};


export const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: complaints.length,
      data: complaints,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};