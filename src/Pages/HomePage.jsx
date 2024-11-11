import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1727334535/InShot_20240918_133111349_uzzbqn.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
        {/* Logo */}
        <div className="bg-white/60 py-2 px-4 rounded-md">
          <a href="https://mowash.in" target="_blank" rel="noopener noreferrer">
            <img
              src="https://mowash-service.vercel.app/images/mowash-logo.webp"
              alt="MoWash Logo"
              className="lg:w-48 lg:h-16 w-24 h-8 z-50"
            />
          </a>
        </div>

        <h1 className="lg:text-6xl text-3xl font-bold mb-6">Welcome to MoWash</h1>

        {/* Typing Animation for Subtitle */}
        <TypeAnimation
          sequence={[
            "Your one-stop solution for all the wash-related services", // Initial text
            2000, // Wait 2 seconds
            "Coz we are the ", // First part of the next text
            500, // Short pause before adding "Toilet Directors!"
            "Coz we are the Toilet Directors!", // Full text including colored phrase
            2000, // Pause with full text before restarting
          ]}
          wrapper="p"
          className="lg:text-3xl text-lg mb-6"
          cursor={true}
          repeat={Infinity} // Loops the animation infinitely
        />

        <div className="flex space-x-4">
          <a
            href="https://mowash.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            User
          </a>
          <a
            href="https://mowash-service.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Service provider
          </a>
          <Link
            to="/dashboard"
            className="px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;