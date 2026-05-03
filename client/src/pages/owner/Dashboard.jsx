import { useEffect, useState } from "react";
import ActivityFeed from "../../components/Activity";
import ListingCard from "../../components/ListingCard.jsx";
import Navbar from "../../components/OwnerNavbar";
import Sidebar from "../../components/OwnerSidebar";
import RentTable from "../../components/Rentable.jsx";
import StatsCard from "../../components/StatsCard";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer.jsx";


export default function Dashboard() {
    const [data,setData]=useState();
   const navigate=useNavigate();
    useEffect(()=>{
const fetchProfile=async()=>{
    const res = await fetch("http://localhost:5000/api/auth/profile",{
    method:"GET",
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    }
}
).then(res=>res.json()).then(data=>{
    setData(data);
    console.log(data);
   
}).catch(err=>{
    console.error("Error fetching profile:",err);
})
}
fetchProfile();
    },[])
  return (
    <div className="bg-[#FCF8FF] min-h-screen">
      <Navbar />

      <div className="flex pt-16">
        <Sidebar />

        <main className="flex-1 p-6 md:p-10 space-y-10">
          
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">Welcome back,{data?.name} </h1>
              <p className="text-gray-500">
                Your portfolio is performing 12% better than last month.
              </p>
            </div>

            <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg" onClick={()=>navigate("/addlisting")}>
              + Add Listing
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatsCard title="Total Listings" value="3" />
            <StatsCard title="Total Tenants" value="8" />
            <StatsCard title="Pending Complaints" value="2" />
            <StatsCard title="Revenue" value="₹68,000" />
          </div>

          {/* Activity + Listings */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ActivityFeed />

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <ListingCard title="Patel Nagar Girls PG" location="Dehradun" link="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600" />
              <ListingCard title="Dalanwala Boys Hostel" location="Dehradun" link="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600" />
            </div>
          </div>

          {/* Rent Table */}
          <RentTable />

        </main>
      </div><Footer/>
    </div>
  );
}