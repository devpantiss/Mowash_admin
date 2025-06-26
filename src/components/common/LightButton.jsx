import React from "react";
import "../../App.css";

const LightButton = ({ text = "View Dashboard", onClick }) => {
  return (
    <div className="light-button">
      <button className="bt" onClick={onClick}>
        <div className="light-holder">
          <div className="dot"></div>
          <div className="light"></div>
        </div>
        <div className="button-holder flex flex-col items-center justify-center h-[50px] w-[200px] bg-[#0a0a0a] rounded-md text-white font-michroma font-bold transition duration-300 outline outline-2 outline-[#ffffff] outline-offset-[20px]">
          <p>{text}</p>
        </div>
      </button>
    </div>
  );
};

export default LightButton;