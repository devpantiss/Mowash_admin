import React from "react";
import Hero from "../components/Homepage/Hero";
import OurPartners from "../components/Homepage/OurPartners";
import Impact from "../components/Homepage/Impact";
import WhyToBeBanner from "../components/Homepage/WhyToBeBanner";
import ServiceSection from "../components/Homepage/ServiceSection";
import SDGBanner from "../components/Homepage/SDG/SDGBanner";
import Footer from "../components/common/Footer";
import ReachSection from "../components/Homepage/Reach/ReachSection";
import WhatWeDo from "../components/Homepage/WhatWeDo";

const HomePage = () => {
  return (
    <div>
        <Hero />
        <SDGBanner />
        <WhatWeDo />
        <WhyToBeBanner />
        <ServiceSection />
        <Impact />
        <OurPartners />
        <ReachSection />
        <Footer />
    </div>
  )
};

export default HomePage;