export const Listing = async (req, res) => {
  const { city, roomType, minPrice, maxPrice, gender } = req.query;

  const listings = [
    {
      id: 1,
      city: "Delhi",
      roomType: "Single",
      price: 12000,
      gender: "Male",
    },
    {
      id: 2,
      city: "Pune",
      roomType: "Double",
      price: 8000,
      gender: "Female",
    },
  ];

  let filteredListings = listings;

  // City filter
  if (city) {
    filteredListings = filteredListings.filter(item =>
      item.city.toLowerCase().includes(city.toLowerCase())
    );
  }

  // Room Type filter
  if (roomType) {
    filteredListings = filteredListings.filter(item =>
      item.roomType.toLowerCase() === roomType.toLowerCase()
    );
  }

  // Price filter
  if (minPrice && maxPrice) {
    filteredListings = filteredListings.filter(item =>
      item.price >= Number(minPrice) &&
      item.price <= Number(maxPrice)
    );
  }

  // Gender filter
  if (gender && gender !== "Any") {
    filteredListings = filteredListings.filter(item =>
      item.gender.toLowerCase() === gender.toLowerCase()
    );
  }

  res.json({
    success: true,
    count: filteredListings.length,
    data: filteredListings,
  });
};