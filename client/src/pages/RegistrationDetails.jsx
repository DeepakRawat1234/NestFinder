import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const drinkingOptions = ["Non-drinker", "Social drinker", "Regular drinker"];
const dietOptions = ["Veg", "Non-Veg", ];
const cleanlinessOptions = ["Neat", "Moderate", "Relaxed"];
const guestsOptions = ["Not allowed", "Occasionally", "Frequently"];

export default function ExtraDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email, phone, password ,role } = location.state || {};

  const [formData, setFormData] = useState({ smoking: "", drinking: "" });
  const [working, setWorking] = useState("");
  const [diet, setDiet] = useState("");
  const [sleep, setSleep] = useState("");
  const [cleanliness, setCleanliness] = useState("");
  const [guests, setGuests] = useState("");
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.smoking || !formData.drinking || !working || !diet || !sleep || !cleanliness || !guests || !role) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, phone, password,
          role,
          smoking: formData.smoking,
          drinking: formData.drinking,
          working,
          diet,
          sleep,
          cleanliness,
          guests,
          
        }),
      });

      const data = await res.json();
      if (data.success) { 
        navigate("/Login");
        alert("Registration successful!");
       
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      alert("Server error, try again");
    }
  };

  return (
    <div className="flex min-h-screen">

      {/* Left Panel */}
      <div className="hidden md:flex flex-col w-72 min-h-screen bg-[#0f1e3c] text-white p-8 relative flex-shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-wide">NestFinder</span>
        </div>

        {/* User info */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center overflow-hidden">
            <svg width="28" height="28" fill="#94a3b8" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold">Join 15,000+ tenants</p>
            <p className="text-xs text-blue-300">Find your perfect living match today</p>
          </div>
        </div>

        {/* Feature list */}
        <ul className="space-y-3">
          {[
            { icon: "🛡️", text: "Verified Profiles Only" },
            { icon: "⚡", text: "Instant Matching Engine" },
            { icon: "💬", text: "Secure End-to-End Chat" },
            { icon: "🤝", text: "Direct Owner Deals" },
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 bg-blue-900/30 border border-blue-800/50 px-4 py-2.5 rounded-lg text-sm">
              <span>{item.icon}</span>
              <span className="text-blue-100">{item.text}</span>
            </li>
          ))}
        </ul>

        <p className="absolute bottom-6 left-8 text-xs text-blue-400">
          © 2024 NestFinder Inc. All rights reserved.
        </p>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-start justify-center py-10 px-6 overflow-y-auto">
        <div className="w-full max-w-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Create your account</h2>
          <p className="text-sm text-gray-500 mb-4">Step 2 of 2: Roommate Matching Preferences</p>

          {/* Progress */}
          <div className="flex gap-2 mb-8">
            <div className="h-1.5 flex-1 rounded-full bg-orange-500"></div>
            <div className="h-1.5 flex-1 rounded-full bg-orange-500"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Smoking */}
            <div>
              <label className="block text-xs font-semibold mb-2">🚬 Smoking</label>
              <div className="flex gap-2">
                {["Non-smoker", "Smoker"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFormData({ ...formData, smoking: opt })}
                    className={`flex-1 py-2 rounded-lg border ${
                      formData.smoking === opt ? "bg-orange-500 text-white" : "bg-white text-gray-600"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Drinking */}
            <div>
              <label className="block text-xs font-semibold mb-2">🍷 Drinking</label>
              <select
                name="drinking"
                value={formData.drinking}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">Select</option>
                {drinkingOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            {/* Working */}
            <div>
              <label className="block text-xs font-semibold mb-2">⏰ Working Schedule</label>
              <div className="flex gap-2">
                {["9-5 Job", "Night Shift"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setWorking(opt)}
                    className={`flex-1 py-2 rounded-lg border ${
                      working === opt ? "bg-orange-500 text-white" : "bg-white text-gray-600"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Diet */}
            <div>
              <label className="block text-xs font-semibold mb-2">🥗 Diet/Food</label>
              <div className="flex gap-2 flex-wrap">
                {dietOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setDiet(opt)}
                    className={`px-3 py-1.5 rounded-full border ${
                      diet === opt ? "bg-orange-500 text-white" : "bg-white text-gray-600"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Sleep */}
            <div>
              <label className="block text-xs font-semibold mb-2">🌙 Sleep Cycle</label>
              <div className="flex gap-2">
                {["Early Bird", "Night Owl"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSleep(opt)}
                    className={`flex-1 py-2 rounded-lg border ${
                      sleep === opt ? "bg-orange-500 text-white" : "bg-white text-gray-600"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Cleanliness */}
            <div>
              <label className="block text-xs font-semibold mb-2">🧹 Cleanliness</label>
              <div className="flex gap-2">
                {cleanlinessOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setCleanliness(opt)}
                    className={`flex-1 py-2 rounded-lg border ${
                      cleanliness === opt ? "bg-orange-500 text-white" : "bg-white text-gray-600"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Guests */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold mb-2">🏠 Overnight Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">Select</option>
                {guestsOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>

          

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-orange-500 text-white py-3 rounded-xl font-semibold"
          >
            Complete Registration
          </button>
        </div>
      </div>

    </div>
  );
}