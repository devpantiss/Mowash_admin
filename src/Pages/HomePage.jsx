import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-sans">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        aria-hidden="true"
        preload="auto" // Preloads the video for faster playback
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1727334535/InShot_20240918_133111349_uzzbqn.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Black translucent overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Logo */}
      <div className="absolute top-6 left-6 z-20">
        <a
          href="https://mowash.in"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="MoWash Home"
        >
          <img
            src="https://mowash-service.vercel.app/images/mowash-logo.webp"
            alt="MoWash Logo"
            className="lg:w-48 w-36"
          />
        </a>
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-30 px-4">
        {/* Welcome text */}
        <h1
          className="text-4xl lg:text-7xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-700 to-blue-100 drop-shadow-lg animate-shine"
          style={{
            backgroundSize: "200%",
            backgroundPosition: "0%",
            animation: "shine 3s infinite linear",
          }}
        >
          Welcome to MoWash
        </h1>

        {/* Subheading */}
        <h2 className="lg:text-2xl text-lg mt-6">
          <TypeAnimation
            sequence={[
              "Your one-stop solution for all WASH-related services",
              2000,
              "We are the Toilet Directors!",
              2000,
            ]}
            wrapper="span"
            className="inline-block"
            cursor={true}
            repeat={Infinity}
          />
        </h2>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row gap-4 mt-10">
          <a
            href="https://mo-wash-web-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center"
          >
            User
            <span className="ml-2 inline-block animate-arrow-loop">→</span>
          </a>
          <a
            href="https://mowash-service-sooty.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center"
          >
            Service Provider
            <span className="ml-2 inline-block animate-arrow-loop">→</span>
          </a>
          <Link
            to="/dashboard"
            className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center"
          >
            Dashboard
            <span className="ml-2 inline-block animate-arrow-loop">→</span>
          </Link>
        </div>
      </div>

      {/* Background text with white outline (hidden on smaller screens) */}
      <div className="absolute inset-0 hidden lg:flex items-center justify-center z-0 pointer-events-none">
        <h1
          className="text-[15rem] font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 opacity-40"
          style={{
            WebkitTextStroke: "2px white", // White outline
          }}
          aria-hidden="true"
        >
          MoWash
        </h1>
      </div>
    </div>
  );
};

export default HomePage;