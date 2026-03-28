import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [step,setStep]=useState(1);
  const [role,setRole]=useState("tenant");
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  password: "",
  role: "tenant",


});
const navigate=useNavigate();
const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}


const NavigateOTPpage=async()=>{
  if(!formData.name || !formData.email || !formData.phone || !formData.password ||!formData.confirmPassword){
    alert("Please fill all fields");
    return;
  }
  if(formData.password !== formData.confirmPassword){
    alert("Passowrd and Confirm Password should match");
    return;
  }
 const email=formData.email;
  await fetch("http://localhost:5000/api/auth/send-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  navigate('/VerifyOtpEmail',{
    state: {formData} 
  });
  
}
  return (
    <div className="flex min-h-screen font-sans" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      {/* ---- LEFT SIDEBAR ---- */}
      <div className="hidden md:flex flex-col w-72 min-h-screen bg-[#0f1e3c] text-white p-8 relative flex-shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          </div>
          <span className="text-xl font-bold tracking-wide">NestFinder</span>
        </div>

        {/* User info */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center overflow-hidden">
            <svg width="28" height="28" fill="#94a3b8" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
          </div>
          <div>
            <p className="text-sm font-semibold">Join 15,000+ tenants</p>
            <p className="text-xs text-blue-300">Find your perfect living match today</p>
          </div>
        </div>

        {/* Feature list */}
        <ul className="space-y-3">
          {[
            { icon: '🛡️', text: 'Verified Profiles Only', color: 'text-green-400' },
            { icon: '⚡', text: 'Instant Matching Engine', color: 'text-orange-400' },
            { icon: '💬', text: 'Secure End-to-End Chat', color: 'text-blue-400' },
            { icon: '🤝', text: 'Direct Owner Deals', color: 'text-yellow-400' },
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 bg-blue-900/30 border border-blue-800/50 px-4 py-2.5 rounded-lg text-sm">
              <span>{item.icon}</span>
              <span className="text-blue-100">{item.text}</span>
            </li>
          ))}
        </ul>

        <p className="absolute bottom-6 left-8 text-xs text-blue-400">© 2024 NestFinder Inc. All rights reserved.</p>
      </div>

      {/* ---- RIGHT FORM ---- */}
      
  
         <div className="flex-1 bg-[#F8F7FF] flex items-center justify-center p-6">
        <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow">

          {/* STEPPER */}
          <div className="flex justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full">
                1
              </div>
              <div className="w-10 h-[2px] bg-gray-300"></div>
              <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full">
                2
              </div>
            </div>
            <span className="text-xs">Step 1 of 2</span>
          </div>

          <h2 className="text-2xl font-bold mb-4">Create Account</h2>

          {/* ROLE */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {["tenant", "owner"].map((item) => (
              <div
                key={item}
                onClick={() =>
                  setFormData({ ...formData, role: item })
                }
                className={`p-4 border rounded-lg cursor-pointer text-center flex-row ${
                  formData.role === item
                    ? "border-indigo-600 bg-indigo-50"
                    : ""
                }`}
              >
                {item=== "tenant" ? <i class="fa-solid fa-user w-full text-xl text-blue-700"></i>:<i class="fa-solid fa-house text-xl text-red-500"></i>}
               
                <p className="font-bold capitalize">{item}</p>
                
              </div>
            ))}
          </div>

          {/* NAME */}
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg"
          />

          {/* EMAIL + PHONE */}
          <div className="flex gap-2 mb-4">
            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-1/2 p-3 border rounded-lg"
            />
            <input
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              className="w-1/2 p-3 border rounded-lg"
            />
          </div>

          {/* PASSWORD */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 mb-3 border rounded-lg"
          />

          {/* CONFIRM PASSWORD */}
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="w-full p-3 mb-6 border rounded-lg"
          />

          {/* NEXT BUTTON */}
          <button
            onClick={NavigateOTPpage}
            className="w-full bg-indigo-600 text-white p-3 rounded-lg cursor-pointer hover:bg-indigo-700 transition-all font-medium"
          >
            Next Step →
          </button>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <span className="text-indigo-600 cursor-pointer">
              Login
            </span>
          </p>
        </div>
        </div>

        
      </div>
 
  )
}

export default Register