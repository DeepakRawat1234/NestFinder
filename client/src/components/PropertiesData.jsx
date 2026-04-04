import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'

const PropertiesData = () => {
    const location = useLocation();
    const filters = location.state || {};
    const [properties, setProperties] = useState([]);
   useEffect(() => {
     const query = new URLSearchParams(filters).toString();
     
  fetch(`http://localhost:5000/api/properties?${query}`)
    .then((res) => res.json())
    .then((data) => {
     
      setProperties(data); // ✅ array set
    })
    .catch((err) => console.log(err));
}, [filters]);
    
  return (
    <div>
        <h1 className='text-3xl font-bold mb-9 px-6 mt-10' >{`Showing ${properties.length} properties in Dehradun`}</h1>
        
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-gray-100">
  {properties.map((p) => (
    <div key={p._id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={p.images?.[0] || "https://via.placeholder.com/300"}
          alt={p.title}
          className="w-full h-48 object-cover rounded-t-2xl"
        />

        <span className="absolute top-2 left-2 bg-white text-xs px-3 py-1 rounded-full font-semibold shadow">
          Verified
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-sm font-semibold">{p.title || "No Title"}</h3>

        <p className="text-xs text-gray-500 mt-1">
          {p.locality}, {p.city}
        </p>

        <div className="text-indigo-600 font-bold mt-2">
          ₹{p.rent} <span className="text-gray-400 text-xs">/ month</span>
        </div>

        <p className="text-xs mt-1">
          {p.roomType} • {p.furnished}
        </p>

        <div className="flex flex-wrap gap-1 mt-2">
          {p.amenities?.slice(0, 3).map((a, i) => (
            <span key={i} className="bg-indigo-100 text-indigo-600 text-[10px] px-2 py-1 rounded">
              {a}
            </span>
          ))}
        </div>

        <button className="w-full mt-3 bg-indigo-500 hover:bg-indigo-600 text-white text-sm py-2 rounded-lg">
          View Details
        </button>
      </div>
    </div>
  ))}
</div>
    </div>
  )
}

export default PropertiesData