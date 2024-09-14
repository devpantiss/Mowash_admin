// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-36 bg-blue-900 text-white h-screen sticky">
            <div className="p-4 pb-0 text-center text-xl font-bold">MoWash Dashboard</div>
            <nav className="mt-2">
                <ul>
                    <li className="p-4 hover:bg-green-700 border-y-2 border-white">
                        <Link to="/" className="flex flex-col justify-center items-center">
                            <img
                                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726237858/Screenshot_2024-09-13_195931-removebg-preview_w3jza7.png"
                                className="w-[70px]"
                            />
                            Dashboard
                        </Link>
                    </li>
                    <li className="p-4 hover:bg-green-700 border-b-2 border-white">
                        <Link to="/page1" className="flex flex-col justify-center items-center">
                            <img
                                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726237858/Screenshot_2024-09-13_195931-removebg-preview_w3jza7.png"
                                className="w-[70px]"
                            />
                            Page 1
                        </Link>                    
                    </li>
                    <li className="p-4 hover:bg-green-700 border-b-2 border-white">
                        <Link to="/page2" className="flex flex-col justify-center items-center">
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
