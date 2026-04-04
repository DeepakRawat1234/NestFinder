import { use } from "react";
import { useNavigate } from "react-router-dom";
import { HERO_AVATARS } from "../data/constants";
const LandingHero = () => {
    const navigate=useNavigate();
    const handleExploreClick = () => {
navigate("/Login");
    }
  return (
    <section className="relative min-h-[700px] flex items-center px-8 max-w-7xl mx-auto pt-5 bg-[#1E1B4B] gap-10">
      
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
                 
                   <div className="mt-8 flex gap-4">
          <button className="bg-[#3525CD] text-white px-6 py-3 rounded-lg cursor-pointer" onClick={handleExploreClick}>
            Explore
          </button>
          <button className="text-blue-900 font-bold bg-white  px-6 py-3 rounded-lg cursor-pointer" onClick={handleExploreClick}>
            List Property
          </button>
        </div>
                </div>

      <div className="hidden lg:block w-full">
        <img
          src="https://pfcqaewcncwelogddzqm.supabase.co/storage/v1/object/public/images/unnamed.png"
          className="rounded-3xl shadow-xl"
        />
      </div>
    </section>
  );
};

export default LandingHero;