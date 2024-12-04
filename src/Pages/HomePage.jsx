import React from "react";
import Hero from "../components/Homepage/Hero";
import OurPartners from "../components/Homepage/OurPartners";
import Impact from "../components/Homepage/Impact";
import WhyToBeBanner from "../components/Homepage/WhyToBeBanner";
import ServiceSection from "../components/Homepage/ServiceSection";
import SDGBanner from "../components/Homepage/SDG/SDGBanner";
import Footer from "../components/common/Footer";

const HomePage = () => {
  return (
    <div>
        <Hero />
        <SDGBanner />
        <WhyToBeBanner />
        <ServiceSection />
        <Impact />
        <OurPartners />
        <Footer />
    </div>
  )
};

export default HomePage;