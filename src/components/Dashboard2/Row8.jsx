import React from "react";
import CustomPieChart from "./CustomPieChart";
import CustomBarChart from "./CustomBarChart";

const Row8 = () => {
  // Housing Data
  const totalHouseholds = 13025;
  const ownHouseData = [85, 15]; // Owned: 85%, Non-Owned: 15%
  const schemeHouseData = [25,  75]; // Under Schemes: 25%, Not Under Schemes: 75%
  const houseTypeData = [60, 25, 15]; // Pucca: 60%, Kutcha: 25%, Semi-Pucca: 15%

  return (
    <div className="p-8 bg-transparent text-white">
      {/* Housing Section */}
      <section aria-labelledby="housing-heading">
        <h1
          id="housing-heading"
          className="text-4xl font-bold mb-8 underline text-center"
        >
          Housing Demographics
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-start">
          {/* Own House Pie Chart */}
          <article className="w-full">
            <CustomPieChart
              data={ownHouseData}
              labels={["Own House", "Non-Owned"]}
              title="House Ownership"
            />
          </article>

          {/* House Type Bar Chart */}
          <article className="w-full">
            <CustomBarChart
              data={houseTypeData}
              labels={["Pucca", "Kutcha", "Semi-Pucca"]}
              title="House Type Composition"
            />
          </article>

          {/* Houses Under Schemes Pie Chart */}
          <article className="w-full">
            <CustomPieChart
              data={schemeHouseData}
              labels={["Under Schemes", "Not Under Schemes"]}
              title="Houses Under PMAY/Schemes"
            />
          </article>
        </div>
      </section>
    </div>
  );
};

export default Row8;