import React from "react";

const Header2 = () => {
  return (
    <header className="rounded-md ring-2 ring-white py-5 bg-black/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1750766457/nitcon-removebg-preview_2_oolaqh.png"
          alt="Left Logo"
          className="h-16 w-auto"
        />
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1750766473/dmft_pzaunp.png"
          alt="Center Logo"
          className="h-36 w-auto absolute left-1/2 transform -translate-x-1/2"
        />
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1750766457/govt-removebg-preview_dnrqbm.png"
          alt="Right Logo"
          className="h-28 w-auto"
        />
      </div>
    </header>
  );
};

export default Header2;