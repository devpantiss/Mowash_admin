import React from "react";

const Row2 = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white underline mb-6 text-center">
          Village Map
        </h2>
        <div className="bg-gray-900/70 backdrop-blur-md border border-teal-200/30 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_15px_rgba(153,246,228,0.5)] transition-all duration-300 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1750858257/WhatsApp_Image_2025-06-24_at_12.09.37_PM_1_jncrtf.jpg"
            alt="Village Map"
            className="w-full h-auto max-w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse { animation: pulse 2s infinite; }
      `}</style>
    </div>
  );
};

export default Row2;