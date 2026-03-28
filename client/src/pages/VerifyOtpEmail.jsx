import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const navigate=useNavigate();
  const loaction=useLocation()
  const [otp, setOtp] = useState("");

const {email,name,phone,password,role}=loaction.state?.formData || {};
// const email =useLocation().state?.formData?.email || "";
// const name=useLocation().state?.formData?.name || "";
// const phone=useLocation().state?.formData?.phone || "";
// const password=useLocation().state?.formData?.password || "";
// const role=useLocation().state?.formData?.role || ""; 
  // Timer countdown
  console.log("Received email in VerifyOTP:", email);
  console.log("Received name in VerifyOTP:", name);
  console.log("Received phone in VerifyOTP:", phone);
  console.log("Received password in VerifyOTP:", password);
  console.log("Received role in VerifyOTP:", role);
 

  const CheckOTP = async () => {
  if (otp === "" || otp.length !== 6) {
    alert("Please enter a valid 6-digit OTP");
    return;
  }
 
  try {
    const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email,otp}),
    });

    const data = await res.json();
    if (res.ok) {
      alert(data.message);
    navigate('/RegistrationDetails',{
      state: { name, email, phone, password ,role }}
    );
    } else {
      alert(data.message || "OTP verification failed");
    }

  } catch (err) {
    console.error(err);
  }
};

  

  return (
    <div className="bg-background min-h-screen flex flex-col font-body text-on-surface">
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#FCF8FF]/80 backdrop-blur-xl border-b border-[#E9E5FF]">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-primary text-blue-800">
            NestFinder
          </div>
          <div className="flex items-center gap-2 text-sm cursor-pointer">
            <span className="material-symbols-outlined text-sm">help</span>
            Help
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="flex-grow flex items-center justify-center px-4 pt-24 pb-12">
        
        <div className="w-full max-w-md">

          {/* Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden">
            
            <div className="flex flex-col items-center text-center">

              {/* Icon */}
              

              {/* Heading */}
              <h1 className="text-2xl font-bold mb-2">
                Verify Your Identity
              </h1>

              <p className="text-sm text-gray-500 mb-8">
                We've sent a 6-digit code to your email.
              </p>

              {/* OTP */}
              <div className="w-full mb-8">
                <label className="block text-xs font-medium mb-3">
                  Enter Security Code
                </label>

                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="000000"
                  className="w-full text-center text-2xl font-bold tracking-widest border rounded-lg py-4 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Button */}
              <button
                onClick={CheckOTP}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 mb-6"
              >
                Verify & Continue
              </button>

              {/* Resend */}
              

                <button className="text-xs uppercase text-gray-400 hover:text-indigo-600">
                  Update Contact Info
                </button>
              </div>

            </div>
          </div>

          
        

        </div>
      </div>
    
  );
};

export default VerifyOTP;