import { useState } from "react";
import Icon from "./Icon";
import { HERO_AVATARS } from "../data/constants";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate=useNavigate();
const [activeTab, setActiveTab] = useState("Find PG");
const [gender, setGender] = useState("Any");
const [roomType, setRoomType] = useState("Single Room");
const [city, setCity] = useState("");
const [budget, setBudget] = useState(25000);
function handleSearch() {
  
  const filters = {
    city,
    roomType,
    maxRent: budget,
    genderPreference: gender === "Any" ? "" : gender,
    type: activeTab === "Find PG" ? "pg" : "flat",
  };
  console.log("Search Filters:", filters);
  navigate("/properties", { state: filters });
}
  return (
    <section className="relative bg-[#1E1B4B] py-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#4F46E5 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="text-white">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-600/20 border border-indigo-600/30 text-indigo-400 font-semibold text-xs mb-6 tracking-wider uppercase">
              Verified Listings Only
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Find Your Perfect PG — <span className="text-indigo-400">No Broker</span>, No Hidden Charges
            </h1>
            <p className="text-indigo-100 text-lg md:text-xl mb-8 leading-relaxed opacity-90">
              Discover 2,400+ verified co-living spaces and roommates. Save up to ₹15,000 on brokerage fees.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {HERO_AVATARS.map((src, i) => (
                  <img key={i} src={src} alt={`Tenant ${i + 1}`} className="w-10 h-10 rounded-full border-2 border-[#1E1B4B] object-cover" />
                ))}
                <div className="w-10 h-10 rounded-full bg-indigo-600 border-2 border-[#1E1B4B] flex items-center justify-center text-[10px] font-bold text-white">15k+</div>
              </div>
              <p className="text-sm text-indigo-200 font-medium">Joined by 15,000+ happy tenants</p>
            </div>
          </div>

          {/* Search Card */}
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
  <div className="flex bg-indigo-50 rounded-xl p-1 mb-8">
    {["Find PG", "Find Roommate"].map((tab) => (
      <button key={tab} onClick={() => setActiveTab(tab)}
        className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${activeTab === tab ? "bg-white shadow-sm text-indigo-600" : "text-slate-500 hover:text-indigo-600"}`}>
        {tab}
      </button>
    ))}
  </div>

  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-4">
      {/* City */}
      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">City/Locality</label>
        <div className="relative">
          <Icon name="location_on" className="absolute left-3 top-2 text-slate-400" />
          <input
            className="w-full pl-10 py-2 rounded-xl border border-slate-200 focus:border-indigo-600 focus:outline-none text-sm"
            placeholder="Bengaluru, Pune..."
            type="text"
            value={city}                          // ✅ controlled
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>

      {/* Room Type */}
      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Room Type</label>
        <div className="relative">
          <Icon name="bed" className="absolute left-3 top-2 text-slate-400" />
          <select
            className="w-full pl-10 py-2 rounded-xl border border-slate-200 focus:border-indigo-600 focus:outline-none text-sm appearance-none bg-white"
            value={roomType}                       // ✅ controlled
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="Single">Single Room</option>
            <option value="Double">Double Sharing</option>
            <option value="Triple">Triple Sharing</option>
          </select>
        </div>
      </div>
    </div>

    {/* Budget Range */}
    <div>
      <div className="flex justify-between items-center mb-4">
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Budget Range</label>
        <span className="text-sm font-bold text-indigo-600">₹5k - ₹{(budget/1000).toFixed(0)}k</span>  {/* ✅ live update */}
      </div>
      <input
        className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        type="range"
        min={5000}
        max={25000}
        step={1000}
        value={budget}                             // ✅ controlled
        onChange={(e) => setBudget(Number(e.target.value))}
      />
    </div>

    {/* Gender */}
    <div>
      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Preferred For</label>
      <div className="flex gap-3">
        {["Any", "Male", "Female"].map((g) => (
          <button key={g} onClick={() => setGender(g)}
            className={`flex-1 py-2 rounded-xl border-2 font-semibold text-sm transition-all ${gender === g ? "border-indigo-600 bg-indigo-50 text-indigo-600" : "border-slate-100 text-slate-500 hover:border-indigo-200"}`}>
            {g}
          </button>
        ))}
      </div>
    </div>

    {/* Search Button */}
    <button
      className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-orange-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all"
      onClick={handleSearch}
    >
      <Icon name="search" /> Search Now
    </button>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}