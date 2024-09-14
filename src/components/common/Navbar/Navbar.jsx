import React, { useState } from "react";
import Tagline from "../Tagline";
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
        <div className="bg-blue-900 border-l-2 border-white text-white p-4 flex justify-between sticky w-full z-10">
            <Tagline />
            <div className="flex items-center">
                {/* Dropdown for "Find nearest MoWash onboarding center" */}
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="mr-4 text-white rounded inline-flex items-center"
                    >
                        <div>
                            <p className="inline-flex items-center text-[12px]">
                                <IoLocationOutline className="text-[18px]"/>
                                Find Your Nearest
                                <svg
                                    className={`w-4 h-4 ml-2 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
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
                            <br />
                            <p className="">
                                MoWash Onboarding Center
                            </p>
                        </div>
                    </button>

                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                        <ul className="absolute right-0 mt-2 w-56 bg-[#01012c] text-white ring-white ring-1 rounded-md shadow-lg z-20">
                            {["Bhubaneswar", "Cuttack", "Khordha", "Puri", "Bhadrak", "Berhampur", "Balasore"].map((location) => (
                                <li
                                    key={location}
                                    className="px-4 py-2 hover:text-[#01012c] hover:bg-blue-200 cursor-pointer"
                                    onClick={closeDropdown}
                                >
                                    {location}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Help Section */}
                <span>Helpline: 1234567890</span>
            </div>
        </div>
    );
};

export default Navbar;
