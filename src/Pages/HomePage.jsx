import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background text with blue glowing shine effect */}
      <div className="absolute inset-0 lg:flex hidden justify-center items-center z-40 pointer-events-none">
        <h1
          className="relative text-[4rem] md:text-[15rem] font-extrabold uppercase text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-200 to-blue-600 drop-shadow-lg animate-shine"
          style={{
            backgroundSize: "200%",
            backgroundPosition: "0%",
            animation: "shine 3s infinite linear",
          }}
        >
          Welcome to MoWash
        </h1>
      </div>

      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1727334535/InShot_20240918_133111349_uzzbqn.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Black translucent overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Logo */}
      <div className="absolute top-4 left-4 lg:top-6 lg:left-6 lg:flex lg:items-start lg:justify-start lg:w-auto z-50">
        <div className="py-2 px-4 rounded-md">
          <a href="https://mowash.in" target="_blank" rel="noopener noreferrer">
            <img
              src="https://mowash-service.vercel.app/images/mowash-logo.webp"
              alt="MoWash Logo"
              className="lg:w-48 lg:h-24 w-24 h-8 mx-auto lg:mx-0"
            />
          </a>
        </div>
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-50">
        <div className="flex lg:hidden justify-center items-center z-10 pointer-events-none">
          <h1
            className="relative text-[4rem] md:text-[15rem] font-extrabold uppercase text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-200 to-blue-600 drop-shadow-lg animate-shine"
            style={{
              backgroundSize: "200%",
              backgroundPosition: "0%",
              animation: "shine 3s infinite linear",
            }}
          >
            Welcome to MoWash
          </h1>
        </div>
        <h1 className="lg:text-6xl text-3xl font-bold mb-6">
          We are the &apos;Toilet Directors&apos;
        </h1>

        {/* Typing Animation for Subtitle */}
        <TypeAnimation
          sequence={[
            "Your one-stop solution for all the wash-related services",
            2000,
            "Coz we are the ",
            500,
            "Coz we are the Toilet Directors!",
            2000,
          ]}
          wrapper="p"
          className="lg:text-3xl text-lg mb-6"
          cursor={true}
          repeat={Infinity}
        />

        {/* Buttons with looping arrow animation */}
        <div className="flex gap-y-10 lg:gap-x-4 flex-col lg:flex-row">
          <a
            href="https://mowash.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-gray-600 transition duration-300 flex items-center group"
          >
            User
            <span className="ml-2 inline-block animate-arrow-loop">→</span>
          </a>
          <a
            href="https://mowash-service.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-gray-600 transition duration-300 flex items-center group"
          >
            Service provider
            <span className="ml-2 inline-block animate-arrow-loop">→</span>
          </a>
          <Link
            to="/dashboard"
            className="px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-gray-600 transition duration-300 flex items-center group"
          >
            Dashboard
            <span className="ml-2 inline-block animate-arrow-loop">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;