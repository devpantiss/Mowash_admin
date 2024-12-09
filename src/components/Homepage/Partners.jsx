import React from "react";
import Marquee from "react-fast-marquee"; // We'll use this for the scrolling effect
import Heading from "../common/Heading";

const Partners = () => {
  // Array of partner logos categorized into sections
  const governmentPartners = [
    "https://pantiss.com/wp-content/uploads/2023/07/CYSD_LOGO-removebg-preview.png",
    "https://pantiss.com/wp-content/uploads/2023/07/Dev-removebg-preview.png",
    "https://pantiss.com/wp-content/uploads/2023/07/download__21_-removebg-preview.png",
    "https://pantiss.com/wp-content/uploads/2023/07/giz-standard-logo_0-removebg-preview.png",
    "https://pantiss.com/wp-content/uploads/2023/07/download__29_-removebg-preview-1-1.png",
    "https://pantiss.com/wp-content/uploads/2023/07/download__17_-removebg-preview-removebg-preview.png",
    "https://pantiss.com/wp-content/uploads/2023/07/download__28_-removebg-preview-1-1.png",
    "https://pantiss.com/wp-content/uploads/2023/07/images__1_-removebg-preview.png",
  ];

  const marketPartners = [
    "https://pantiss.com/wp-content/uploads/2023/07/download__29_-removebg-preview-1-1.png",
    "https://pantiss.com/wp-content/uploads/2023/07/download__17_-removebg-preview-removebg-preview.png",
    "https://pantiss.com/wp-content/uploads/2023/07/download__28_-removebg-preview-1-1.png",
    "https://pantiss.com/wp-content/uploads/2023/07/images__1_-removebg-preview.png",
    "https://pantiss.com/wp-content/uploads/2023/07/CYSD_LOGO-removebg-preview.png",
    "https://pantiss.com/wp-content/uploads/2023/07/Dev-removebg-preview.png",
    "https://pantiss.com/wp-content/uploads/2023/07/download__21_-removebg-preview.png",
    "https://pantiss.com/wp-content/uploads/2023/07/giz-standard-logo_0-removebg-preview.png",
  ];

  return (
    <div className="bg-white flex flex-col justify-center items-center container mx-auto py-14 px-12">
      <Heading text="OUR PARTNERS" color="text-black" bgColor="bg-blue-600" />

      <div className="relative my-12">
        {/* Central Dotted Line */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[3px] h-[480px] border-l-[3px] border-dashed border-blue-600 z-10"></div>

        {/* Section for Government Partners */}
        <div className="relative flex justify-center items-center pb-24">
          {/* Solid Semicircle */}

          <div className="w-full relative">
            <div className="flex flex-col items-center justify-center">
              <div className="absolute z-10 h-44 w-44 rounded-full bg-white -top-10 flex flex-col justify-center items-center">
                <div className="absolute top-0 left-0 w-full h-full border-r-4 border-blue-600 rounded-full"></div> {/* Half ring */}
                <div className="absolute -top-[5px] h-3 w-3 rounded-full bg-blue-600"></div>
                <div className="absolute -bottom-[5px] h-3 w-3 rounded-full bg-blue-600"></div>
                <div className="w-32 h-32 z-30 py-16 px-8 bg-blue-600 rounded-full flex justify-center items-center">
                  <span className="text-xl text-white font-bold">Government</span>
                </div>
              </div>
            </div>
            <Marquee
              gradient={false}
              speed={50}
              className="overflow-hidden"
              loop={0} // Continuous scrolling without stopping
            >
              {governmentPartners.map((logo, index) => (
                <div key={index} className="flex justify-center items-center mx-2">
                  <img src={logo} alt={`Government Partner ${index + 1}`} className="h-20 w-48 object-contain" />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Section for Market Partners */}
        <div className="relative flex justify-center items-center py-24">
          {/* Solid Semicircle */}
          <div className="w-full relative z-10">
            <div className="flex flex-col items-center justify-center">
              <div
                className="absolute z-10 h-44 w-44 rounded-full bg-white -top-10 flex flex-col justify-center items-center"
              >
                <div className="absolute top-0 left-0 w-full h-full border-l-4 border-blue-600 rounded-full"></div> {/* Half ring */}
                <div className="absolute -top-[5px] h-3 w-3 rounded-full bg-blue-600"></div>
                <div className="absolute -bottom-[5px] h-3 w-3 rounded-full bg-blue-600"></div>
                <div
                  className="w-32 h-32 py-16 px-8 bg-blue-600 rounded-full flex justify-center items-center"
                >
                  <span className="text-xl text-white font-bold">Corporate</span>
                </div>
              </div>
            </div>
            <Marquee
              gradient={false}
              speed={50}
              className="overflow-hidden"
              loop={0} // Continuous scrolling without stopping
            >
              {marketPartners.map((logo, index) => (
                <div key={index} className="flex justify-center items-center mx-2">
                  <img src={logo} alt={`Market Partner ${index + 1}`} className="h-20 w-48 object-contain" />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Section for Multilateral Partners */}
        <div className="relative flex justify-center items-center pt-24">
          {/* Solid Semicircle */}
          <div className="w-full relative z-10">
            <div className="flex flex-col items-center justify-center">
              <div className="absolute z-10 h-44 w-44 rounded-full bg-white -top-10 flex flex-col justify-center items-center">
                <div className="absolute top-0 left-0 w-full h-full border-r-4 border-blue-600 rounded-full"></div> {/* Half ring */}
                <div className="absolute -top-[5px] h-3 w-3 rounded-full bg-blue-600"></div>
                <div className="absolute -bottom-[5px] h-3 w-3 rounded-full bg-blue-600"></div>
                <div className="w-32 h-32 py-16 px-8 bg-blue-600 rounded-full flex justify-center items-center">
                  <span className="text-xl text-white font-bold">Multilaterals</span>
                </div>
              </div>
            </div>
            <Marquee
              gradient={false}
              speed={50}
              className="overflow-hidden"
              loop={0} // Continuous scrolling without stopping
            >
              {marketPartners.map((logo, index) => (
                <div key={index} className="flex justify-center items-center mx-2">
                  <img src={logo} alt={`Market Partner ${index + 1}`} className="h-20 w-48 object-contain" />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Partners;
