import { useState } from "react";
import Navbar from "../../components/OwnerNavbar";

export default function AddProperty() {
  const [form, setForm] = useState({
    title: "",
    city: "",
    locality: "",
    type: "pg",
    rent: "",
    deposit: "",
    foodCharges: "",
    roomType: "Single",
    furnished: "Furnished",
    genderPreference: "Any",
    amenities: [],
    safety: { cctv: false, guard: false, biometric: false },
    ownerName: "",
    ownerPhone: "",
  });
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();

   
    Object.keys(form).forEach((key) => {
      if (key === "amenities") {
        formData.append("amenities", JSON.stringify(form.amenities));
      } else if (key === "safety") {
        formData.append("safety", JSON.stringify(form.safety));
      } else {
        formData.append(key, form[key]);
      }
    });

    
    

    const res = await fetch("http://localhost:5000/api/properties/add-property", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      alert("Property Added ✅");
setForm({
    title: "",
    city: "",
    locality: "",
    type: "pg",
    rent: "",
    deposit: "",
    foodCharges: "",
    roomType: "Single",
    furnished: "Furnished",
    genderPreference: "Any",
    amenities: [],
    safety: { cctv: false, guard: false, biometric: false },
    ownerName: "",
    ownerPhone: "",
})
      
    } else {
      alert("Error ❌");
      
    }

  } catch (err) {
    console.error("Error:", err);
  }
};
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const toggleAmenity = (item) => {
    setForm({
      ...form,
      amenities: form.amenities.includes(item)
        ? form.amenities.filter((i) => i !== item)
        : [...form.amenities, item],
    });
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-6 mt-14">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Add New Property 🏡
          </h1>
          <p className="text-gray-500 mt-2">
            Create your listing in seconds
          </p>
        </div>

        {/* CARD WRAPPER */}
        <div className="space-y-8">

          {/* BASIC INFO */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-gray-100 space-y-4">
            <h2 className="text-lg font-semibold text-indigo-600">
              Basic Info
            </h2>

            <input
              name="title"
              placeholder="Property Title"
              className="input-modern"
              onChange={handleChange}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <input name="city" placeholder="City" className="input-modern" onChange={handleChange} />
              <input name="locality" placeholder="Locality" className="input-modern" onChange={handleChange} />
            </div>
          </div>

          {/* PROPERTY DETAILS */}
          <div className="card">
            <h2 className="section-title">Property Details</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <select name="type" onChange={handleChange} className="input-modern">
                <option value="pg">PG</option>
                <option value="flat">Flat</option>
              </select>

              <select name="roomType" onChange={handleChange} className="input-modern">
                <option>Single</option>
                <option>Double</option>
                <option>Triple</option>
              </select>

              <select name="furnished" onChange={handleChange} className="input-modern">
                <option>Furnished</option>
                <option>Semi-Furnished</option>
                <option>Unfurnished</option>
              </select>

              <select name="genderPreference" onChange={handleChange} className="input-modern">
                <option>Male</option>
                <option>Female</option>
                <option>Any</option>
              </select>
            </div>
          </div>

          {/* PRICING */}
          <div className="card">
            <h2 className="section-title">Pricing</h2>

            <div className="grid md:grid-cols-3 gap-4">
              <input type="number" name="rent" placeholder="Rent ₹" className="input-modern" onChange={handleChange} />
              <input type="number" name="deposit" placeholder="Deposit ₹" className="input-modern" onChange={handleChange} />
              <input type="number" name="foodCharges" placeholder="Food ₹" className="input-modern" onChange={handleChange} />
            </div>
          </div>

          {/* AMENITIES */}
          <div className="card">
            <h2 className="section-title">Amenities</h2>

            <div className="flex flex-wrap gap-3">
              {["WiFi", "AC", "Laundry", "TV", "Parking"].map((item) => (
                <button
                  key={item}
                  onClick={() => toggleAmenity(item)}
                  className={`chip ${
                    form.amenities.includes(item)
                      ? "chip-active"
                      : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* SAFETY */}
          <div className="card">
            <h2 className="section-title">Safety Features</h2>

            <div className="grid md:grid-cols-3 gap-4">
              {["cctv", "guard", "biometric"].map((item) => (
                <label key={item} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl cursor-pointer hover:bg-indigo-50 transition">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        safety: { ...form.safety, [item]: e.target.checked },
                      })
                    }
                  />
                  <span className="capitalize font-medium">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* OWNER */}
          <div className="card">
            <h2 className="section-title">Owner Info</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input name="ownerName" placeholder="Owner Name" className="input-modern" onChange={handleChange} />
              <input name="ownerPhone" placeholder="Phone Number" className="input-modern" onChange={handleChange} />
            </div>
          </div>

          {/* IMAGE */}
          <div className="card">
            <h2 className="section-title">Upload Images</h2>

            <label className="upload-box">
              <p>Click or drag images here</p>
              <input type="file" multiple className="hidden" />
            </label>
          </div>

          {/* BUTTON */}
          <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold shadow-lg hover:scale-[1.02] transition" onClick={handleSubmit} >
            Publish Property 🚀
          </button>

        </div>
      </div>
    </div>
    </>
  );
}