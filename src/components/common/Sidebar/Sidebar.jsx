import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  // Get the current path
  const location = useLocation();

  return (
    <div className="w-[280px] bg-blue-900 text-white h-screen sticky">
      <div className="p-4 pb-0 text-center text-xl font-bold">
        <img src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530988/mo-wash-logo_eiq199.svg" className="w-32" alt="mowash"/>
        Dashboard
      </div>
      <nav className="mt-2">
        <ul>
          <li
            className={`p-4 hover:bg-blue-700 border-y-2 border-white ${
              location.pathname === "/" ? "bg-blue-500" : ""
            }`}
          >
            <Link to="/" className="flex flex-col justify-center items-center">
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727687361/dashboard_toalae.svg"
                className="w-[70px]"
              />
              Dashboard
            </Link>
          </li>
          <li
            className={`p-4 hover:bg-blue-700 border-b-2 text-center border-white ${
              location.pathname === "/page1" ? "bg-blue-500" : ""
            }`}
          >
            <Link
              to="/page1"
              className="flex flex-col justify-center items-center"
            >
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727687361/dashboard_toalae.svg"
                className="w-[70px]"
              />
              Dist. Dashboard
            </Link>
          </li>
          <li
            className={`p-4 hover:bg-blue-700 border-b-2 border-white ${
              location.pathname === "/page2" ? "bg-blue-500" : ""
            }`}
          >
            <Link
              to="/page2"
              className="flex flex-col justify-center items-center"
            >
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726237858/Screenshot_2024-09-13_195931-removebg-preview_w3jza7.png"
                className="w-[70px]"
              />
              Page 2
            </Link>
          </li>
          {/* Add more sidebar links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
