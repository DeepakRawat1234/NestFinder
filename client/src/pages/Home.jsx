import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import TrustBar from "../components/TrustBar";
import FeaturedListings from "../components/FeaturedListings";
import HowItWorks from "../components/HowItWorks";
import StatsBanner from "../components/StatsBanner";
import Footer from "../components/Footer";
import GuestNavbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="font-sans text-[#1E1B4B]">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <FeaturedListings />
      <HowItWorks />
      <StatsBanner />
      <Footer/>
    </div>
  );
}