import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

export const ShowProperty = () => {
  const {id}= useParams();
  const [data,setData]= useState(null);
  const [roomate, setRoomate] = useState();
  const [yourHabit,setYourHabit]=useState();
  const [matchScore, setMatchScore] = useState(0);
const [safetyScore, setSafetyScore] = useState(0);
const navigate = useNavigate();
const calculateMatchScore = (owner, user) => {
  let score = 0;
  let total = 6;
console.log("owener preferences:", owner);
console.log("user preferences:", user);
  score += match(owner.smoking, user.smoking) * 15;
  score += match(owner.drinking, user.drinking) * 15;
  score += match(owner.food, user.food) * 15;
  score += match(owner.sleep, user.sleep) * 15;

  // slightly less important
  score += match(owner.cleanliness, user.cleanliness) * 10;
  score += match(owner.guestPolicy, user.guestPolicy) * 10;
  score += match(owner.workingHours, user.workingHours) * 10;

  
  return Math.round((score / total) * 10);
};
const match = (a, b) => {
  if (a == b) return true;
  if (a == "doesnt-mind" || b == "doesnt-mind") return true;
  return false;
};
  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/properties/${id}`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
const matchRes = await fetch(`http://localhost:5000/api/properties/match-score/${id}`);

      const matchData = await matchRes.json();
      console.log("Match data received:", matchData);
      const score = calculateMatchScore(matchData.residentPreferences, matchData.userHabiit);
      setMatchScore(score);
      console.log("Match score calculated:", score);
      
     
      const json = await res.json();
      setData(json);
      


      
    } catch (err) {
      console.log("Error:", err);
    }
  };
 

  fetchData();
}, [id]);
useEffect(() => {
  if (data?.safety) {
    calculateSafetyScore(data.safety);
  }
}, [data]);
  if (!data) return <p className="text-center mt-10">Loading...</p>;
  const calculateSafetyScore = (safety) => {
    if (!safety) return;
    let score=0;
    let total=3;
    if(safety?.cctv) score++;
    if(safety?.guard) score++;
    if(safety?.biometric) score++;
    setSafetyScore(((score/total)*5).toFixed(0));
   
  }
  const handlePayment=()=>{
    navigate("/payment", {state:data});
  }
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto px-4 py-6">

 
 
<div className="mb-4">
    <h1 className="text-3xl font-bold mb-1">{data?.title}</h1>
    <p className="text-gray-500 text-sm">{data?.locality}, {data?.city}</p>
  </div>
  
  
   
      <img src={data.images} className="md:w-[75%]  w-full md:h-[500px] h-auto object-cover mb-5" />
    
  
 
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

    
    <div className="lg:col-span-2 space-y-6">

      
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-medium">{data?.roomType} Room</span>
        <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-medium">{data?.furnished}</span>
        <span className="px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-xs font-medium">{data?.genderPreference === "Any" ? "Co-Ed" : data?.genderPreference}</span>
      </div>

     
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4 text-base">Cost Breakdown</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Monthly Rent</span>
            <span className="font-medium text-gray-900">₹{data?.rent}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Food Charges</span>
            <span className="font-medium text-gray-900">₹{data?.foodCharges }</span>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <span className="font-semibold text-gray-900">Total / Month</span>
            <span className="font-bold text-lg text-orange-500">₹{(data?.rent || 0) + (data?.foodCharges || 0)}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-500 bg-gray-50 rounded-xl px-4 py-2">
            <span>Security Deposit</span>
            <span className="font-medium text-gray-700">₹{data?.deposit}</span>
          </div>
        </div>
      </div>
<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
  <h3 className="font-semibold text-gray-900 mb-4 text-base">Roommate Match</h3>

  <div className='w-full flex mb-5 text-center justify-between bg-green-50 p-4 rounded-xl border border-green-100'>
    
    {/* Circle */}
    <div className="relative w-28 h-28">
      <svg className="w-full h-full transform -rotate-90">

        {/* Background */}
        <circle
          cx="56"
          cy="56"
          r="50"
          stroke="lightgray"
          strokeWidth="8"
          fill="transparent"
        />

        {/* Progress */}
        <circle
          cx="56"
          cy="56"
          r="50"
          stroke={
            matchScore > 70
              ? "green"
              : matchScore > 40
              ? "orange"
              : "red"
          }
          strokeWidth="8"
          fill="transparent"
          strokeDasharray="314"
          strokeDashoffset={314 - (matchScore / 100) * 314}
          strokeLinecap="round"
        />

      </svg>

      {/* Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-bold text-green-800">
          {matchScore}%
        </span>
        <span className="text-xs text-gray-500 font-bold">Match</span>
      </div>
    </div>

    {/* Text */}
    <div className='w-[80%] text-start'>
      <h1 className='text-2xl font-bold'>Roommate Match Score</h1>
      <p>
        Based on lifestyle preferences like food, habits, sleep cycle and cleanliness,
        your compatibility with this roommate is <b>{matchScore}%</b>.
      </p>

      {/* 🔥 Badge */}
      <p className={`mt-2 font-semibold ${
        matchScore > 70
          ? "text-green-600"
          : matchScore > 40
          ? "text-orange-500"
          : "text-red-500"
      }`}>
        {matchScore > 70
          ? "🔥 Perfect Match"
          : matchScore > 40
          ? "👍 Good Match"
          : "⚠️ Low Match"}
      </p>
    </div>

  </div>
</div>
      
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4 text-base">Safety & Security</h3>
        <div className='w-full flex mb-5 text-center justify-between bg-orange-50 p-4 rounded-xl border border-orange-100'>
          <div className="relative w-28  h-28">

  <svg className="w-full h-full transform -rotate-90">

    {/* Background circle */}
    <circle
      cx="56"
      cy="56"
      r="50"
      stroke="lightgray"
      strokeWidth="8"
      fill="transparent"
    />

    {/* Progress circle */}
    <circle
      cx="56"
      cy="56"
      r="50"
      stroke="orange"
      strokeWidth="8"
      fill="transparent"
      strokeDasharray="314"
      strokeDashoffset={314 - (safetyScore / 5) * 314}
      strokeLinecap="round"
    />

  </svg>

  {/* Center Text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <span className="text-xl font-bold text-green-800">
      {safetyScore}
    </span>
    <span className="text-xs text-gray-500 font-bold">Out Of 5</span>
  </div>

</div>
<div className='w-[80%]   text-start   jusitfy-center'>
  <h1 className=' text-2xl font-bold'>Safety Score</h1>
  <p>Based on the overall safety and security features available at this property, it has received a safety score of {safetyScore} out of 5. This rating reflects the presence of essential measures such as CCTV surveillance, on-site security personnel. 
</p>
</div>
</div>
        <div className="grid grid-cols-3 gap-3">
          
          <div className={`flex flex-col items-center gap-2 p-4 rounded-xl text-center ${data?.safety?.cctv ? "bg-green-50 border border-green-100" : "bg-gray-50 border border-gray-100"}`}>
            <span className="text-2xl">📹</span>
            <span className="text-xs font-medium text-gray-700">CCTV</span>
            <span className={`text-xs font-semibold ${data?.safety?.cctv ? "text-green-600" : "text-gray-400"}`}>{data?.safety?.cctv ? "Available" : "N/A"}</span>
          </div>
          <div className={`flex flex-col items-center gap-2 p-4 rounded-xl text-center ${data?.safety?.guard ? "bg-green-50 border border-green-100" : "bg-gray-50 border border-gray-100"}`}>
            <span className="text-2xl">🛡️</span>
            <span className="text-xs font-medium text-gray-700">Guard</span>
            <span className={`text-xs font-semibold ${data?.safety?.guard ? "text-green-600" : "text-gray-400"}`}>{data?.safety?.guard ? "24/7" : "N/A"}</span>
          </div>
          <div className={`flex flex-col items-center gap-2 p-4 rounded-xl text-center ${data?.safety?.biometric ? "bg-green-50 border border-green-100" : "bg-gray-50 border border-gray-100"}`}>
            <span className="text-2xl">🔐</span>
            <span className="text-xs font-medium text-gray-700">Biometric</span>
            <span className={`text-xs font-semibold ${data?.safety?.biometric ? "text-green-600" : "text-gray-400"}`}>{data?.safety?.biometric ? "Enabled" : "N/A"}</span>
          </div>
        </div>
      </div>


      {/* AMENITIES */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4 text-base">Amenities</h3>
        <div className="flex flex-wrap gap-2">
          {data?.amenities?.map((item, i) => (
            <span key={i} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* RATINGS */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4 text-base">Ratings</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Room", value: data?.ratings?.room },
            { label: "Food", value: data?.ratings?.food },
            { label: "Owner", value: data?.ratings?.owner },
            { label: "WiFi", value: data?.ratings?.wifi },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{label}</span>
                <span className="font-semibold text-gray-900">{value}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-orange-400 rounded-full" style={{ width: `${(value / 5) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REVIEWS */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4 text-base">Reviews</h3>
        <div className="space-y-4">
          {data?.reviews?.map((r, i) => (
            <div key={i} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-semibold text-sm flex-shrink-0">
                {r.name?.[0]}
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-900">{r.name}</p>
                <p className="text-sm text-gray-500 mt-0.5">{r.comment}</p>
                <div className="flex mt-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className={`text-xs ${j < r.rating ? "text-amber-400" : "text-gray-200"}`}>★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

  
    <div className="sticky top-6 h-fit space-y-4">

      <div className="bg-white rounded-2xl   shadow-sm p-6 space-y-4">
        <div>
          <p className="text-xs text-gray-400 mb-1">Starting from</p>
          <div className="flex items-baseline gap-1">
            <h2 className="text-3xl font-bold text-gray-900">₹{data?.rent}</h2>
            <span className="text-sm text-gray-400">/mo</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">+ ₹{data?.foodCharges} food charges</p>
        </div>

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold text-sm transition-colors" onClick={handlePayment}>
          Book Now
        </button>

        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold text-sm transition-colors">
         <a href="https://wa.me/9569585595"> WhatsApp Owner</a>
        </button>

        <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-semibold text-sm">
            {data?.ownerName?.[0]}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{data?.ownerName}</p>
            <p className="text-xs text-gray-400">{data?.ownerPhone}</p>
          </div>
        </div>
      </div>
<div className="rounded-xl overflow-hidden   border-gray-400 h-60">
  <iframe className=' border-5 border-white outline-none'
    title="map"
    width="100%"
    height="100%"
    loading="lazy"
    allowFullScreen
    src={`https://www.google.com/maps?q=${data?.locality},${data?.city}&output=embed`}
  ></iframe>
</div>
    </div>

  </div>
</div>
<Footer/>
</>
  )
}

