import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-[100px] h-screen bg-black text-white sticky top-0 flex-shrink-0">
      <nav className="">
        <ul>
          {/* Home Icon */}
          <li
            className={`p-4 hover:bg-teal-700 border-y-2 border-white ${
              location.pathname === "/" ? "bg-teal-700" : ""
            }`}
          >
            <Link to="/" className="flex flex-col justify-center items-center">
              <IoHomeOutline className="w-[50px] h-[50px] mb-2" />
              {/* <p className="mt-3 text-[14px] text-center">Home</p> */}
            </Link>
          </li>

          <li
            className={`p-4 hover:bg-teal-700 border-y-2 border-white ${
              location.pathname === "/dashboard" ? "bg-teal-700" : ""
            }`}
          >
            <Link to="/dashboard" className="flex flex-col justify-center items-center">
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727687361/dashboard_toalae.svg"
                className="w-[50px]"
                alt="Dashboard Icon"
              />
              <p className="mt-3 text-[14px] text-center">Dashboard</p>
            </Link>
          </li>

          <li
            className={`p-4 hover:bg-teal-700 border-b-2 border-white ${
              location.pathname === "/dashboard/block_dashboard" ? "bg-teal-700" : ""
            }`}
          >
            <Link
              to="/dashboard/block_dashboard"
              className="flex flex-col justify-center items-center"
            >
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727687361/dashboard_toalae.svg"
                className="w-[50px]"
                alt="Dist. Dashboard Icon"
              />
              <p className="mt-3 text-[14px] text-center">Dist. Dashboard</p>
            </Link>
          </li>

          {/* <li
            className={`p-4 hover:bg-blue-700 border-b-2 border-white ${
              location.pathname === "/onboarding-centers" ? "bg-blue-400" : ""
            }`}
          >
            <Link
              to="/dashboard/onboarding-centers"
              className="flex flex-col justify-center items-center"
            >
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1731130072/service-center_fo9hgn.png"
                className="w-[50px]"
                alt="OnBoarding Centers Icon"
              />
              <p className="mt-3 text-[14px] text-center">OnBoarding Centers</p>
            </Link>
          </li> */}

          {/* <li
            className={`p-4 hover:bg-blue-700 border-b-2 border-white ${
              location.pathname === "/total-service-providers"
                ? "bg-blue-400"
                : ""
            }`}
          >
            <Link
              to="/dashboard/total-service-providers"
              className="flex flex-col justify-center items-center"
            >
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1731137217/engineer_waj8nb.png"
                className="w-[50px]"
                alt="Mowash Engineers Icon"
              />
              <p className="mt-3 text-[14px] text-center">Mowash Engineers</p>
            </Link>
          </li> */}

          {/* <li
            className={`p-4 hover:bg-blue-700 border-b-2 border-white ${
              location.pathname === "/total-services" ? "bg-blue-400" : ""
            }`}
          >
            <Link
              to="/dashboard/total-services"
              className="flex flex-col justify-center items-center"
            >
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1731137219/vehicle_eukny5.png"
                className="w-[50px]"
                alt="Services Icon"
              />
              <p className="mt-3 text-[14px] text-center">Services</p>
            </Link>
          </li> */}

          {/* <li
            className={`p-4 hover:bg-blue-700 border-b-2 border-white ${
              location.pathname === "/welfare-kendra" ? "bg-blue-400" : ""
            }`}
          >
            <Link
              to="/dashboard/welfare-kendra"
              className="flex flex-col justify-center items-center"
            >
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1731137358/technical-support_nydebr.png"
                className="w-[50px]"
                alt="Welfare Kendra Icon"
              />
              <p className="mt-3 text-[14px] text-center">Welfare Kendra</p>
            </Link>
          </li> */}

          {/* <li
            className={`p-4 hover:bg-blue-700 border-b-2 border-white ${
              location.pathname === "/about" ? "bg-blue-400" : ""
            }`}
          >
            <Link
              to="/dashboard/about"
              className="flex flex-col justify-center items-center"
            >
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1731137487/file_wzxyvi.png"
                className="w-[50px]"
                alt="Info Icon"
              />
              <p className="mt-3 text-[14px] text-center">Info</p>
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;