import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="bg-black border-l-2 border-white text-white p-4 flex justify-between items-center sticky top-0 w-full z-10">
      {/* Empty left side to allow logos to shift right */}
      <div></div>

      {/* Right side: Logos and Dropdown */}
      <div className="flex items-center space-x-4 ml-auto">
        {/* Three Logos */}
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1750766457/nitcon-removebg-preview_2_oolaqh.png"
          alt="Logo 1"
          className="h-12 w-auto"
        />
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1750766457/govt-removebg-preview_dnrqbm.png"
          alt="Logo 2"
          className="h-12 w-auto"
        />
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1750766473/dmft_pzaunp.png"
          alt="Logo 3"
          className="h-16 w-auto"
        />

        {/* Dropdown for "Find nearest MoWash onboarding center" */}
        <div className="relative">
          {/* <button
            onClick={toggleDropdown}
            className="text-white rounded inline-flex items-center"
          >
            <div>
              <p className="inline-flex items-center text-[12px]">
                <IoLocationOutline className="text-[18px] mr-1" />
                Find Your Nearest
                <svg
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </p>
              <p className="text-[12px]">MoWash Onboarding Center</p>
            </div>
          </button> */}

          {/* Dropdown menu */}
          {/* {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-56 bg-[#01012c] text-white ring-white ring-1 rounded-md shadow-lg z-20">
              {[
                "Bhubaneswar",
                "Cuttack",
                "Khordha",
                "Puri",
                "Bhadrak",
                "Berhampur",
                "Balasore",
              ].map((location) => (
                <li
                  key={location}
                  className="px-4 py-2 hover:text-[#01012c] hover:bg-blue-200 cursor-pointer"
                  onClick={closeDropdown}
                >
                  {location}
                </li>
              ))}
            </ul>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;