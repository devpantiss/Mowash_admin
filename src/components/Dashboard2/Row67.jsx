import React from "react";
import Row6 from "./Row6";
import Row7 from "./Row7";

const Row67 = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full px-4 py-8">
      <Row6 />
      <Row7 />
    </div>
  );
};

export default Row67;