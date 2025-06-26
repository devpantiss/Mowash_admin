import React from "react";
import CustomPieChart from "../BlockWiseDashboard/charts/CustomPieChart";
import CustomBarChart from "../BlockWiseDashboard/charts/CustomShapeBarChart";

const Row8 = ({ village }) => {
  // Housing Data from villageSurveyData
  const totalHouseholds = village.TotalHouseHoldsSurveyed;
  const ownHouseData = Object.values(village?.HouseHoldsOwnership || {}).map(Number); // [80, 20]
  const houseTypeData = Object.values(village?.TypeofHouse || {}).map(Number); // [50, 30, 20]
  const schemeHouseData = [
    village?.HouseUnderSchemes || 0, // 40%
    100 - (village?.HouseUnderSchemes || 0), // 60%
  ]; // [40, 60]

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
              labels={["Own House", "Others"]}
              title="House Ownership"
              totalPopulation={totalHouseholds}
            />
          </article>

          {/* House Type Bar Chart */}
          <article className="w-full">
            <CustomBarChart
              data={houseTypeData}
              labels={["Pucca", "Kaccha", "Semi-Pucca"]}
              title="House Type Composition"
              totalPopulation={totalHouseholds}
            />
          </article>

          {/* Houses Under Schemes Pie Chart */}
          <article className="w-full">
            <CustomPieChart
              data={schemeHouseData}
              labels={["Under Schemes", "Not Under Schemes"]}
              title="Houses Under PMAY/Schemes"
              totalPopulation={totalHouseholds}
            />
          </article>
        </div>
      </section>
    </div>
  );
};

export default Row8;