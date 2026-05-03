import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate=useNavigate()
  return (
    <header className="fixed top-0 w-full bg-white shadow flex justify-between items-center px-6 py-3 z-50">
      
      {/* Left */}
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-bold text-indigo-600">
          NestFinder
        </h1>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">

          <NavLink
            to="/OwnerDashboard"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
                : "text-gray-500 hover:text-indigo-600"
            }
          >
            Overview
          </NavLink>

          <NavLink
            to="/mylisting"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
                : "text-gray-500 hover:text-indigo-600"
            }
          >
            My Listings
          </NavLink>

          <NavLink
            to="/get-complaints"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
                : "text-gray-500 hover:text-indigo-600"
            }
          >
            Complaints
          </NavLink>

          <NavLink
            to="/rent-tracker"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
                : "text-gray-500 hover:text-indigo-600"
            }
          >
            Rent Tracker
          </NavLink>

        

        </nav>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="text-sm text-gray-500 hover:text-indigo-600">
          Support
        </button>

        <button>🔔</button>
        <button
                  onClick={() =>navigate("/")}
                  className="font-medium text-white bg-blue-500 px-5 py-2 rounded-lg"
                >
                  Logout
                </button>
      </div>
    </header>
  );
}