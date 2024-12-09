import React, { useRef } from "react";
import { Link } from "react-router-dom";
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
    description: "Providing access to safe and clean drinking water.",
    buttons: [
      { text: "MoWash Users", link: "https://mowash.in" },
      { text: "Partners", link: "https://partners.mowash.in" },
    ],
    buttonLink: "https://mowash-services.com", // Link for all slides
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1728306740/Screenshot_2024-10-07_at_6.41.27_PM_w5faom.png",
  },
  {
    id: 2,
    title: "Facility Management",
    description: "Ensuring proper sanitation facilities for communities.",
    buttonText: "Explore",
    buttonLink: "https://facility-management-orpin.vercel.app/", // Link for all slides
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmdo4bLCVSthS9IPI8N0DdfN8Jmcyf3p3QQ&s",
  },
  {
    id: 3,
    title: "Wash Academy",
    description:
      "Educating communities about hygiene and sanitation practices.",
    buttonText: "Explore",
    buttonLink: "https://wash-academy.mowash.com", // Link for all slides
    backgroundImage:
      "https://phia.org.in/wp-content/uploads/2021/04/GHWD2019.jpg",
  },
  {
    id: 4,
    title: "Wash Equipments",
    description: "Providing high-quality sanitation tools and resources.",
    buttonText: "Explore",
    buttonLink: "https://wash-equipments.mowash.com", // Link for all slides
    backgroundImage:
      "https://img1.wsimg.com/isteam/ip/44657f71-b09f-48a5-a6c9-7197c782b6c8/heavy%20equipment%20washing%20-%20dallas%20tx.jpg",
  },
  {
    id: 5,
    title: "Circular Economy",
    description: "Promoting sustainable practices in waste management.",
    buttonText: "Explore",
    buttonLink: "https://circular-economy.mowash.com", // Link for all slides
    backgroundImage:
      "https://synergos.biz/wp-content/uploads/2021/10/synergos1-300x295.png",
  },
];

const WhatWeDo2 = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-blue-600 py-8 px-10 mb-4">
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
            <FaChevronLeft className="text-[60px] text-white" />
          </button>
          <button
            ref={nextRef}
            className="absolute bg-black/60 right-0 z-10 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full"
          >
            <FaChevronRight className="text-[60px] text-white" />
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
              640: { slidesPerView: 1 }, // 1 card for mobile
              1024: { slidesPerView: 3 }, // 3 cards for desktop
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
                    <h2 className="text-xl lg:text-2xl font-bold mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-sm mb-4">{slide.description}</p>

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
