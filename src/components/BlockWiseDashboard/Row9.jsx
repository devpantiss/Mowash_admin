import React from "react";
import CustomPieChart from "./charts/CustomPieChart";
import CustomBarChart from "./charts/CustomShapeBarChart";

const Row9 = ({ village }) => {
  // Drinking Water Data from villageSurveyData
  const totalHouseholds = village.TotalHouseHoldsSurveyed;
  const Availability = [
    village?.ReliableWaterAvailability || 0, // 30%
    100 - (village?.ReliableWaterAvailability || 0), // 70%
  ]; // [30, 70]
  const waterSourceData = Object.values(village?.SourceofWater || {}).map(Number); // [50, 30, 15, 5]

  return (
    <div className="p-8 bg-transparent text-white">
      {/* Housing Section */}
      <section aria-labelledby="housing-heading">
        <h1
          id="housing-heading"
          className="text-4xl font-bold mb-8 underline text-center"
        >
          Drinking Water Demographics
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-start">
          {/* Reliable Water Availability Pie Chart */}
          <article className="w-full">
            <CustomPieChart
              data={Availability}
              labels={["Has Reliable Access", "Rely on basic/Inconsistent Sources"]}
              title="Reliable Water Availability"
              totalPopulation={totalHouseholds}
            />
          </article>

          {/* Sources of Water Bar Chart */}
          <article className="w-full">
            <CustomBarChart
              data={waterSourceData}
              labels={["Piped Water", "Tube Well", "Well", "Others"]}
              title="Sources of Water"
              totalPopulation={totalHouseholds}
            />
          </article>

          {/* Sources of Water Pie Chart */}
          <article className="w-full">
            <CustomPieChart
              data={waterSourceData}
              labels={["Piped Water", "Tube Well", "Well", "Others"]}
              title="Sources of Water"
              totalPopulation={totalHouseholds}
            />
          </article>
        </div>
      </section>
    </div>
  );
};

export default Row9;