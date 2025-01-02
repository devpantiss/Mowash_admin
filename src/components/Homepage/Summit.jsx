import React from "react";
import { Link } from "react-router-dom";

const Summit = () => {
  return (
    <div className="relative w-full lg:h-[400px] h-[700px]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1726496170/water-desktop_fitepp.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-5 p-4">
        <div className="text-center">
          <div className="relative flex flex-col lg:flex-row justify-between items-center gap-x-28 gap-y-6 text-lg sm:text-xl">
            <div className=" relative flex flex-col items-center w-full lg:w-1/2">
              <span className="text-3xl font-bold mb-2 z-50">
                ODISHA Just Transition Conclave-'24
              </span>
              <p>Talcher</p>
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726143053/Screenshot_2024-09-12_174007-removebg-preview_d7s8vj.png"
                className="absolute -top-5 -left-[0px] z-10 lg:-top-6 lg:left-1 h-20 w-40"
              />
              <p className="text-[14px] leading-1 lg:w-[500px] text-center">
                We focuse on sustainable development and empowering professionals associated with the wash ssector.
              </p>

              <Link className="mt-4 px-4 py-2 bg-transparent ring-2 ring-white text-white hover:text-red-600">
                Explore More
              </Link>
            </div>

            <div className="lg:h-[150px] lg:w-[2px] lg:rotate-0 rotate-90 bg-white opacity-70"></div>

            <div className="relative flex flex-col items-center w-full lg:w-1/2">
              <span className="text-3xl font-bold">
                ODISHA WASHPRENEUR FELLOWSHIP-'24
              </span>
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726138831/Screenshot_2024-09-12_162917-removebg-preview_i4rukm.png"
                className="absolute -top-6 left-0 z-10 lg:-top-6 lg:-left-4 h-12 w-12"
              />
              <div className="grid mt-5 lg:grid-cols-5 grid-cols-3 gap-x-4">
                <p>T.Rampur</p>
                <div className="lg:h-[30px] lg:w-[2px] lg:rotate-0 rotate-90 lg:bg-white opacity-70"></div>
                <p>Nagada</p>
                <div className="lg:h-[30px] lg:w-[2px] lg:rotate-0 rotate-90 lg:bg-white opacity-70"></div>
                <p>Mangalajodi</p>
                <div className="lg:h-[30px] lg:w-[2px] lg:rotate-0 rotate-90 lg:bg-white opacity-70"></div>
                <p>Bagapatia</p>
                <div className="lg:h-[30px] lg:w-[2px] lg:rotate-0 rotate-90 lg:bg-white opacity-70"></div>
                <p>Koida</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark overlay for the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
    </div>
  );
};

export default Summit;
