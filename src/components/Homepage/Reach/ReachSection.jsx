import React from "react";
import ReachMap from "./ReachMap";


const ReachSection = () => {
  return (
    <div className="bg-black py-12">
      <section className="w-full">
        <div className="container mx-auto flex justify-center items-center w-full">
          <div className="flex justify-start pb-3">
            <h1 className="text-4xl text-left text-white pl-2 font-bold">
              Our Reach
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {/* ReachMap will only render on the client */}
          <ReachMap />
        </div>
      </section>
    </div>
  );
};

export default ReachSection;