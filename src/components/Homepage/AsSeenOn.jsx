import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AsSeenOn = () => {
  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Speed increased for smoother effect
    slidesToShow: 4, // Show 4 logos at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // This will keep the slider moving continuously
    cssEase: "linear", // For smooth continuous scrolling
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bg-white flex flex-col lg:flex-row py-10 px-12 justify-center gap-x-16 items-center">
      {/* Image positioned at the top-left corner and rotated */}
      <div className="relative">
        <img
          src="https://i.postimg.cc/bw5S3YQ7/newspaper.png" // Sample image URL
          alt="Top Left Icon"
          className="absolute -top-2 -left-2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 transform rotate-[-60deg]" // Rotate the image by -30 degrees
        />
        <h1 className="text-4xl font-bold text-black mb-4">As Seen On</h1>
      </div>

      <div className="container w-[400px] lg:w-[1000px]">
        {/* Slider with Marquee Effect */}
        <Slider {...settings} className="gap-x-2">
          {" "}
          {/* Added gap using Tailwind */}
          <div className="px-2">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055079/330px-DTE_pic_hrwr2q.jpg"
              alt="Down To Earth"
              className="lg:h-36 h-[50px] w-full object-contain" // Set height and use object-contain for proper fit
            />
          </div>
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055079/CBC_logo.svg_ixkcmg.png"
              alt="CBC"
              className="lg:h-36 h-[50px] w-full object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055539/the-telegraph-logo-vector-removebg-preview_ovbazt.png"
              alt="The Telegraph"
              className="lg:h-36 h-[50px] w-full object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055080/pngwing.com_7_ixeqav.png"
              alt="TOI"
              className="lg:h-36 h-[50px] w-full object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055079/Thomson_Reuters_logo.svg_hrphwf.png"
              alt="Thomson Reuters"
              className="lg:h-36 h-[50px] w-full object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055080/iForest-Global-Black-Logo-and-Text_kvvqjw.png"
              alt="IForest"
              className="lg:h-36 h-[50px] w-full object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055080/Orissapost_qczf45.png"
              alt="OrissaPost"
              className="lg:h-36 h-[50px] w-full object-contain"
            />
          </div>
          <div className="px-4">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726055080/1200px-UNICEF_Logo_g3gwyz.png"
              alt="Unicef"
              className="lg:h-36 h-[50px] w-full object-contain"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AsSeenOn;
