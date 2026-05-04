import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const ComplaintsPage = () => {

  const [formData, setFormData] = useState({
    category: "Plumbing",
    summary: "",
    description: "",
    priority: "Medium",
    images:""
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);
    setMsg("");

    const res = await fetch("https://nestfinder-r6jz.onrender.com/api/complaints", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Error");
    }
Swal.fire({
      title: "Complaint Submitted Successfully 🎉",
      text: "Welcome back to NestFinder!",
      icon: "success",
      
    });
    setMsg("✅ Complaint submitted successfully");

    // reset form
    setFormData({
      category: "Plumbing",
      summary: "",
      description: "",
      priority: "Medium",
      images:""
    });

  } catch (err) {
    console.error(err);
    setMsg("❌ Failed to submit complaint");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#FCF8FF]/80 backdrop-blur-xl shadow">
        <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-[#3525CD]">
            NestFinder
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-extrabold mb-3">
            Raise a Complaint
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Report issues with your stay and track resolution in real-time.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left - Form */}
          <section className="lg:col-span-7">
            <div className="bg-white rounded-xl shadow border-t-4 border-indigo-600">
              
              <form onSubmit={handleSubmit} className="p-8 space-y-8">

                {/* Category */}
                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    Complaint Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full mt-2 p-3 rounded-lg bg-gray-100"
                  >
                    <option>Plumbing</option>
                    <option>Electrical</option>
                    <option>WiFi</option>
                    <option>Cleaning</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Summary */}
                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    Short Summary
                  </label>
                  <input
                    type="text"
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    placeholder="Briefly state the issue"
                    className="w-full mt-2 p-3 rounded-lg bg-gray-100"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className="w-full mt-2 p-3 rounded-lg bg-gray-100"
                    required
                  />
                </div>

                {/* Priority */}
                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    Priority
                  </label>

                  <div className="flex gap-3 mt-2">
                    {["Low", "Medium", "Urgent"].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, priority: p })
                        }
                        className={`flex-1 py-2 rounded-lg ${
                          formData.priority === p
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upload (optional - backend later) */}
                 <div>
                  <label className="text-xs font-semibold text-gray-500">
                    Upload Image (optional)
                  </label>
                  <textarea
                    name="images"
                    value={formData.images}
                    onChange={handleChange}
                    rows="1"
                    className="w-full mt-2 p-3 rounded-lg bg-gray-100"
                    required
                    placeholder="Enter image URL"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold"
                >
                  {loading ? "Submitting..." : "Submit Complaint"}
                </button>

                {/* Message */}
                {msg && (
                  <p className="text-center text-sm mt-2">{msg}</p>
                )}

              </form>
            </div>
          </section>

          {/* Right - Complaints */}
          <section className="lg:col-span-5 space-y-6">

            <h2 className="text-2xl font-bold">Active Complaints</h2>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">
                WiFi connection is unstable
              </h3>
              <span className="text-yellow-600 text-xs">In Progress</span>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">
                Kitchen Tap Leak
              </h3>
              <span className="text-green-600 text-xs">Resolved</span>
            </div>

            {/* Help */}
            <div className="bg-indigo-600 text-white p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                Need Immediate Help?
              </h3>
              <button className="w-full bg-white text-indigo-600 py-2 rounded-lg">
                <a href="https://wa.me/919876543210?text=Hi%20I%20need%20help">
                  WhatsApp Support
                </a>
              </button>
            </div>

          </section>
        </div>
      </main>

    
      <footer className="bg-gray-100 py-10 text-center">
        <p>© 2024 NestFinder</p>
      </footer>
    </div>
  );
};

export default ComplaintsPage;