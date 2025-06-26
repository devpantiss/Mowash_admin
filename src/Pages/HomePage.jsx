import React from "react";
import Threads from "../components/Homepage/Threads";
import Loader from "../components/common/Loader";
import Header2 from "../components/common/Header2";
import AnimateText from "../components/common/AnimateText";
import LightButton from "../components/common/LightButton";
import { useNavigate } from "react-router-dom";



const HomePage = () => {
  const navigate = useNavigate();
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const handleClick = () => {
    navigate('/dashboard')
  };

  return (
    <div className="bg-gradient-to-b from-teal-900 via-black to-black min-h-[100vh]">
      <div className="mx-6 pt-4">
        <Header2 />
      </div>
      <div className="flex justify-center items-center">
        <AnimateText
          text="GIS Based Survey Data Dashboard"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-5xl my-8 text-center font-michroma font-bold text-white"
        />
      </div>
      <div className="flex justify-center flex-col mt-4 items-center">
        <Loader />
        <LightButton text="Go to Dashboard" onClick={handleClick} />
      </div>
      {/* <div className="h-[400px]">
        <Threads />
      </div> */}
    </div>
  );
};

export default HomePage;
