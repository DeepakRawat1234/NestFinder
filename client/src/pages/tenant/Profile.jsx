import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
  });

  const [loading, setLoading] = useState(true);

  const navigate =useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:5000/api/auth/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }

        setUser({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          profession: data.role || "",
        });

      } catch (err) {
        console.error("Error:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // 🔥 Handle Input Change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };



  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white shadow flex justify-between items-center px-6 h-16 z-50">
        <h1 className="text-xl font-bold text-indigo-600">NestFinder</h1>
        <img
          src="https://i.pravatar.cc/40"
          className="w-10 h-10 rounded-full"
          alt="user"
        />
      </header>

      <div className="flex pt-16">

        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-indigo-50 h-screen p-6">
          <h2 className="font-bold text-indigo-700 mb-6">{user.name}</h2>

          <div className="space-y-2">
          <button onClick={()=>navigate("/mybookings")}><SidebarItem  label="My Booking"/ ></button>  
          <button onClick={()=>navigate("/complaints")}>  <SidebarItem label=" Complaints" /></button>
            <SidebarItem label="Messages" />
            <SidebarItem label="Profile" active />
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-4 md:p-8 max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">My Profile</h2>

          {/* Profile Card */}
          <div className="bg-white p-6 rounded-xl shadow mb-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <Input
                label="Full Name"
                name="name"
                placeholder={user.name}
                value={user.name}
                onChange={handleChange}
                disabled
              />

              <Input
                label="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />

              <Input
                label="Phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />

              <Input
                label="Profession"
                name="profession"
                value={user.profession}
                onChange={handleChange}
              />

            </div>

            <button
            //   onClick={handleUpdate}
              className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg"
            >
              Update Profile
            </button>

          </div>

          {/* Preferences */}
          <div className="bg-white p-6 rounded-xl shadow mb-8">
            <h3 className="text-xl font-bold mb-4">Preferences</h3>

            <div className="flex flex-wrap gap-2">
              <Tag label="Non-Smoker" active />
              <Tag label="Occasional" active />
              <Tag label="Veg" active />
              <Tag label="Early Bird" active />
            </div>
          </div>

          {/* Security */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">Security</h3>

            <button className="border px-4 py-2 rounded-lg text-indigo-600">
              Change Password
            </button>
          </div>

        </main>
      </div>

      {/* Mobile Nav */}
      <nav className="fixed bottom-0 w-full bg-white flex justify-around py-2 md:hidden">
        <MobileNav label="Discover" />
        <MobileNav label="Saved" />
        <MobileNav label="Profile" active />
      </nav>

    </div>
  );
};

/* 🔹 Components */

const SidebarItem = ({ label, active }) => (
  <div
    className={`px-4 py-2 rounded-lg cursor-pointer ${
      active ? "bg-indigo-200 text-indigo-700" : "hover:bg-indigo-100"
    }`}
  >
    {label}
  </div>
);

const Input = ({ label, name, value, onChange }) => (
  <div>
    <label className="text-sm text-gray-500">{label}</label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded-lg px-3 py-2 mt-1"
    />
  </div>
);

const Tag = ({ label, active }) => (
  <span
    className={`px-3 py-1 rounded-full text-sm ${
      active ? "bg-indigo-600 text-white" : "bg-gray-200"
    }`}
  >
    {label}
  </span>
);

const MobileNav = ({ label, active }) => (
  <div className={`${active ? "text-indigo-600" : "text-gray-500"}`}>
    {label}
  </div>
);

export default Profile;