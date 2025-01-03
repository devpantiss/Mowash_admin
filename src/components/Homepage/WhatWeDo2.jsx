import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "Wash Services",
    tags: [
      {text:"Toilet Masonary"},
      {text:"Faecal Desludging"},
      {text:"Plumbing"}
    ],
    buttons: [
      { text: "MoWash Users", link: "https://users.mowash.in" },
      { text: "Partners", link: "https://partners.mowash.in" },
    ],
    buttonLink: "https://mowash-services.com", // Link for all slides
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734154553/Screenshot_2024-12-14_at_10.50.28_AM_srv3cm.png",
  },
  {
    id: 2,
    title: "Green Facility Management",
    tags: [
      {text:"Healthcare"},
      {text:"Public Transport"},
      {text:"Residential"}
    ],
    buttonText: "Explore",
    buttonLink: "https://facility-management-orpin.vercel.app/", // Link for all slides
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734154536/facility_management_glkoj6.jpg",
  },
  {
    id: 3,
    title: "Mo WASH Academy",
    tags: [
      {text:"Nal Jal Mitra"},
      {text:"Sanitary Crew"},
      {text:"Septic Tank Technician"}
    ],
    buttonText: "Explore",
    buttonLink: "https://wash-academy.mowash.com", // Link for all slides
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735915960/WhatsApp_Image_2025-01-03_at_7.09.25_PM_1_pmya7b.jpg",
  },
  {
    id: 4,
    title: "Work Force in WASH",
    tags: [
      {text:"Job Search"},
      {text:"Staffing"},
      {text:"Payrolling"}
    ],
    buttonText: "Explore",
    buttonLink: "https://staffing-xi.vercel.app/", // Link for all slides
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734154537/workforce_kw2foc.webp",
  },
  {
    id: 5,
    title: "Circular Economy",
    tags: [
      {text:"E-Waste"},
      {text:"Plastic Waste"},
      {text:"Bio-Medical"}
    ],
    buttonText: "Explore",
    buttonLink: "https://circular-economy.mowash.com", // Link for all slides
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734154537/circular_economy_f674vk.jpg",
  },
  {
    id: 6,
    title: "WASH Equipments",
    tags: [
      {text:"Cesspool Vehicle"},
      {text:"BOV Tricycle"},
      {text:"Dumpsters"}
    ],
    buttonText: "Explore",
    buttonLink: "https://wash-equipments.mowash.com", // Link for all slides
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734154537/cesspool_vehicle_bdazz2.webp",
  },
  {
    id: 7,
    title: "WASH SHG-SME",
    tags: [
      {text:"Innovation"},
      {text:"Incubation"},
      {text:"Investment"}
    ],
    buttonText: "Explore",
    buttonLink: "https://circular-economy.mowash.com", // Link for all slides
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734154537/Self-Help-Groups-nxtidea_dmwfqi.jpg",
  },
  {
    id: 8,
    title: "WASH Construction",
    tags: [
      {text:"Canals"},
      {text:"Check Dams"},
      {text:"FSTP Plant"}
    ],
    buttonText: "Explore",
    buttonLink: "https://circular-economy.mowash.com", // Link for all slides
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734154536/construction_ygwill.jpg",
  },
];

const WhatWeDo2 = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-blue-600 py-8 px-10">
      <div className="mx-auto">
        <div className="flex justify-center items-center mb-6">
          <div className="text-center max-w-4xl flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-white mb-4">What We Do</h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              At MoWash, we focus on providing innovative solutions for
              sanitation, hygiene, and water management. Explore our services
              aimed at creating a sustainable and healthier community.
            </p>
          </div>
        </div>
        <div className="relative">
          {/* Custom Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute bg-black/60 left-0 z-10 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full"
          >
            <FaChevronLeft className="text-[30px] lg:text-[60px] text-white" />
          </button>
          <button
            ref={nextRef}
            className="absolute bg-black/60 right-0 z-10 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full"
          >
            <FaChevronRight className="text-[30px] lg:text-[60px] text-white"/>
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={25}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="mySwiper"
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="relative h-[400px] bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 p-4 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center text-center text-white px-4">
                    <h2 className="text-xl lg:text-4xl font-bold mb-2">
                      {slide.title}
                    </h2>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {slide.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-white text-blue-600 text-xs px-3 py-1 rounded-full"
                        >
                          {tag.text}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    {slide.buttons ? (
                      <div className="flex flex-col lg:flex-row gap-4">
                        {slide.buttons.map((button, index) => (
                          <a
                            key={index}
                            href={button.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-600 text-sm px-4 py-2 rounded-full"
                          >
                            {button.text}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={slide.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-sm px-6 py-2 rounded-full"
                      >
                        {slide.buttonText}
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo2;
