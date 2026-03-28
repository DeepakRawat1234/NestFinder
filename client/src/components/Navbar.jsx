import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // auth state
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle

  return (
    <nav className="w-full bg-white shadow-md px-4 md:px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo (always visible) */}
        <Link to="/">
          <img
            src="https://pfcqaewcncwelogddzqm.supabase.co/storage/v1/object/public/images/logo.png"
            width={160}
            alt="Logo" className=" "
          />
        </Link>
{/* Search Box */}
          <div className="searchbox w-1/3 bg-blue-50 rounded-lg px-4 py-2  items-center  flex">
            <i className="fa-solid fa-magnifying-glass text-blue-600 mr-2"></i>
            <input
              type="text"
              className="w-full border-none outline-none bg-blue-50"
              placeholder="Search your location or PG name"
            />
          </div>
        {/* Desktop Links + Search */}
        <div className="hidden md:flex md:items-center md:gap-6 w-full md:w-auto">
          

          {/* Navigation Links */}
          <div className="flex gap-3 items-center ml-6">
            <Link to="/listings" className="font-medium text-blue-900 hover:underline me-5">
              List Your PG
            </Link>

            {isLoggedIn ? (
              <>
                <Link to="/profile" className="font-medium text-blue-900 hover:underline">
                  Profile
                </Link>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="font-medium text-white bg-red-500 px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="font-medium text-blue-900 hover:underline me-5">
                  Login
                </Link>
                <Link to="/register" className="font-medium text-white bg-blue-600 px-4 py-2 rounded-lg">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fa-solid text-2xl text-blue-900 ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex w-full flex-col gap-4 mt-4 md:hidden">
            
        
          {/* Search Box moved inside menu */}
          

          {/* Links inside menu */}
          <Link to="/listings" className="font-medium text-blue-900 hover:underline">
            List Your PG
          </Link>

          {isLoggedIn ? (
            <>
              <Link to="/profile" className="font-medium text-blue-900 hover:underline">
                Profile
              </Link>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="font-medium text-white bg-red-500 px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="font-medium text-blue-900 hover:underline">
                Login
              </Link>
              <Link to="/register" className="font-medium text-white bg-blue-600 px-4 py-2 rounded-lg">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;