import React from "react";
import { Link } from "react-router-dom";

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

      {/* Logo */}

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
        <div>
          <a href="https://mowash.in" target="_blank" rel="noopener noreferrer">
            <img
              src="https://mowash-service.vercel.app/images/mowash-logo.webp"
              alt="MoWash Logo"
              className=" top-4 left-10 w-48 h-16 z-50"
            />
          </a>
        </div>
        <h1 className="text-4xl font-bold mb-6">Welcome to MoWash</h1>
        <p className="mb-6">Your one stop solution for all the Wash related Services, Coz <br /> We are the <span className="font-bold text-blue-600">Toilet Directors!</span></p>

        <div className="flex space-x-4">
          <a
            href="https://mowash.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-lg font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            User
          </a>
          <a
            href="https://mowash-service.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-lg font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Service provider
          </a>
          <Link
            to="/dashboard"
            className="px-4 py-2 text-lg font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
