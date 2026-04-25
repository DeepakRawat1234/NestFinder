import React from "react";

const MyBookings = () => {
  const currentUserId = "user123";

  const properties = [
    {
      title: "Patel Nagar Girls PG",
      city: "Dehradun",
      locality: "Patel Nagar",
      rent: 8500,
      foodCharges: 2500,
      deposit: 17000,
      roomType: "Double",
      furnished: "Furnished",
      amenities: ["WiFi", "Meals", "Power Backup", "Housekeeping"],
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600",
      ],
      ratings: { room: 4.5 },
      reviews: [{ name: "Divya", comment: "Safe and homely feeling" }],
      ownerName: "Kamla Rawat",
      ownerPhone: "9012340002",
      residents: ["user123"],
    },
  ];

  const myBookings = properties.filter((p) =>
    p.residents.includes(currentUserId)
  );

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      
      {/* Header */}
      <div className="w-full mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          My Bookings
        </h1>
        <p className="text-gray-500 mt-2">
          View and manage your current stays
        </p>
      </div>

      {/* Content Full Width */}
      {myBookings.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No bookings found
        </p>
      ) : (
        <div className="grid lg:grid-cols-1 xl:grid-cols-1 gap-8">
          {myBookings.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-100 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white shadow px-3 py-1 rounded-full text-sm font-medium">
                  ⭐ {item.ratings.room}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                
                {/* Title */}
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {item.locality}, {item.city}
                  </p>
                </div>

                {/* Pricing */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-gray-500 text-xs">Rent</p>
                    <p className="font-semibold">₹{item.rent}</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-gray-500 text-xs">Food</p>
                    <p className="font-semibold">₹{item.foodCharges}</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-gray-500 text-xs">Deposit</p>
                    <p className="font-semibold">₹{item.deposit}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="flex justify-between text-sm text-gray-600">
                  <span>🛏 {item.roomType}</span>
                  <span>🪑 {item.furnished}</span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2">
                  {item.amenities.map((a, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                {/* Owner */}
                <div className="bg-gray-100 p-4 rounded-lg text-sm">
                  <p className="font-medium text-gray-800">
                    {item.ownerName}
                  </p>
                  <p className="text-gray-500">
                    {item.ownerPhone}
                  </p>
                </div>

                {/* Review */}
                <p className="text-sm text-gray-500 italic">
                  “{item.reviews[0].comment}”
                </p>

                {/* Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg font-medium transition">
                  View Details
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;