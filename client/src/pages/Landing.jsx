import Navbar from "../components/Navbar";


import Footer from "../components/Footer";
import GuestNavbar from "../components/GuestNav";
import LandingHero from "../components/LandingHero";
import LandingFeatures from "../components/LandingFeature";
import LandingAbout from "../components/LandingAbout";

const Landing = () => {
  return (
    <>
      <GuestNavbar />
      <LandingHero />
      
      <LandingFeatures />
      <LandingAbout/>
      <Footer />
    </>
  );
};

export default Landing;