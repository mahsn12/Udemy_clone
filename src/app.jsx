import React from "react";
import OfferBanner from "./components/OfferBanner.jsx";
import Navbar from "./components/NavBar.jsx";
import Hero from "./components/HeroSection.jsx";
import ESkills from "./components/EssentialSkills.jsx";
import PersonalPlan from "./components/PersonalPlan.jsx";
import OfferedCourses from "./components/FeaturedCourses.jsx";
import PartnerCompaniesSection from "./components/TrustedCompaniesSection.jsx";
import "./global.css";

const App = () => {
  return (
    <div className="App">
      <OfferBanner />
      <Navbar />
      <Hero />
      <ESkills />
      <PersonalPlan />
      <OfferedCourses />
      <PartnerCompaniesSection />
    </div>
  );
};

export default App;
