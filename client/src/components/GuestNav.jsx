import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow">
      <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        
        <div className="text-2xl font-bold text-[#3525CD]">
          NestFinder
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-semibold text-[#3525CD]">Lifestyle</Link>
          <Link className="text-sm text-gray-500 hover:text-[#3525CD]">Experience</Link>
          <Link className="text-sm text-gray-500 hover:text-[#3525CD]">Trust</Link>
          <Link className="text-sm text-gray-500 hover:text-[#3525CD]">Locations</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login" className="hidden sm:block text-sm text-gray-500 hover:text-[#3525CD]">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-[#3525CD] text-white px-6 py-2 rounded-lg text-sm"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;