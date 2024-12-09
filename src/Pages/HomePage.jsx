import React from "react";
import Hero from "../components/Homepage/Hero";
import OurPartners from "../components/Homepage/OurPartners";
import Impact from "../components/Homepage/Impact";
import WhyToBeBanner from "../components/Homepage/WhyToBeBanner";
// import ServiceSection from "../components/Homepage/ServiceSection";
import SDGBanner from "../components/Homepage/SDG/SDGBanner";
import Footer from "../components/common/Footer";
import ReachSection from "../components/Homepage/Reach/ReachSection";
// import WhatWeDo from "../components/Homepage/WhatWeDo";
import Summit from "../components/Homepage/Summit";
import WhatWeDo2 from "../components/Homepage/WhatWeDo2";
import AsSeenOn from "../components/Homepage/AsSeenOn";
import Partners from "../components/Homepage/Partners";
import Spotlight from "../components/Homepage/Spotlight";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <SDGBanner />
      <WhatWeDo2 />
      {/* <WhatWeDo /> */}
      <WhyToBeBanner />
      <AsSeenOn />
      <Impact />

      {/* <ServiceSection /> */}
      <Summit />
      <OurPartners />
      <Spotlight />
      <Partners />
      <ReachSection />
      <Footer />
    </div>
  );
};

export default HomePage;
