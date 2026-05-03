import { useState } from "react";
import Sidebar from "../../components/OwnerSidebar";
import Navbar from "../../components/OwnerNavbar";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

export default function Mylisting() {
    const navigate=useNavigate();
  const [properties] = useState([
     {
    title: "Rajpur Road Luxury PG",
    city: "Dehradun",
    locality: "Rajpur Road",
    type: "pg",
    rent: 12000,
    foodCharges: 3500,
    deposit: 24000,
    roomType: "Single",
    furnished: "Furnished",
    genderPreference: "Any",
    amenities: ["WiFi", "AC", "Meals", "Laundry", "Power Backup"],
    images: ["https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600"],
    safety: { cctv: true, guard: true, biometric: true },
    ratings: { room: 4.7, food: 4.4, owner: 4.8, wifi: 4.5 },
    reviews: [{ name: "Aarav", comment: "Bahut achhi jagah hai, saaf suthra", rating: 5 }],
    ownerName: "Suresh Negi",
    ownerPhone: "9012340001",
  
  },
  {
    title: "Patel Nagar Girls PG",
    city: "Dehradun",
    locality: "Patel Nagar",
    type: "pg",
    rent: 8500,
    foodCharges: 2500,
    deposit: 17000,
    roomType: "Double",
    furnished: "Furnished",
    genderPreference: "Female",
    amenities: ["WiFi", "Meals", "Power Backup", "Housekeeping"],
    images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600"],
    safety: { cctv: true, guard: true, biometric: false },
    ratings: { room: 4.5, food: 4.3, owner: 4.7, wifi: 4.0 },
    reviews: [{ name: "Divya", comment: "Safe and homely feeling", rating: 5 }],
    ownerName: "Kamla Rawat",
    ownerPhone: "9012340002",
   
  },
  {
    title: "Dalanwala Boys Hostel",
    city: "Dehradun",
    locality: "Dalanwala",
    type: "pg",
    rent: 7000,
    foodCharges: 2000,
    deposit: 14000,
    roomType: "Triple",
    furnished: "Semi-Furnished",
    genderPreference: "Male",
    amenities: ["WiFi", "Meals", "Laundry", "Power Backup"],
    images: ["https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600"],
    safety: { cctv: true, guard: false, biometric: false },
    ratings: { room: 4.0, food: 4.1, owner: 4.2, wifi: 3.8 },
    reviews: [{ name: "Rohit", comment: "Budget friendly, khana accha hai", rating: 4 }],
    ownerName: "Mohan Bisht",
    ownerPhone: "9012340003",
    
  },
  {
    title: "ISBT Road Premium PG",
    city: "Dehradun",
    locality: "ISBT Road",
    type: "pg",
    rent: 9500,
    foodCharges: 3000,
    deposit: 19000,
    roomType: "Double",
    furnished: "Furnished",
    genderPreference: "Any",
    amenities: ["WiFi", "AC", "Meals", "Gym", "Laundry"],
    images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600"],
    safety: { cctv: true, guard: true, biometric: true },
    ratings: { room: 4.4, food: 4.2, owner: 4.6, wifi: 4.3 },
    reviews: [{ name: "Pankaj", comment: "Connectivity bahut acchi hai", rating: 4 }],
    ownerName: "Deepak Thapliyal",
    ownerPhone: "9012340004",
    
  },
  ]);

  return (
    <>
    <Navbar/>
    <div className="flex min-h-screen bg-[#FCF8FF] mt-14">
      
      {/* Sidebar */}
      

       <Sidebar/>

      {/* Main */}
      <div className="flex-1 p-6 space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">My Properties</h2>

          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg" onClick={()=>navigate("/addlisting")}>
            + Add Property
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: "Listings", value: 4 },
            { label: "Tenants", value: 4},
            { label: "Revenue", value: "₹20K" },
            { label: "Occupancy", value: "85%" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
            >
              <p className="text-gray-500 text-sm">{item.label}</p>
              <h3 className="text-2xl font-bold">{item.value}</h3>
            </div>
          ))}
        </div>

        {/* Property Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {properties.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={p.images}
                alt=""
                className="h-48 w-full object-cover"
              />

              <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-gray-500">{p.city}</p>

                <div className="flex justify-between items-center">
                  <span className="font-semibold text-indigo-600">
                    ₹{p.rent}
                  </span>
                  <span className="text-sm text-gray-600">
                    {p.occupancy}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-3">
                  <button className="flex-1 bg-gray-100 py-2 rounded-lg">
                    View
                  </button>
                  <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg">
                    Edit
                  </button>
                  <button className="flex-1 bg-red-100 text-red-500 py-2 rounded-lg">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      
    </div></>
  );
}