import React from "react";
import CustomPieChart from "../BlockWiseDashboard/charts/CustomPieChart";
import CustomShapeBarChart from "../BlockWiseDashboard/charts/CustomShapeBarChart";

const Row4 = ({ village }) => {
  // Use village's TotalPopulationSurveyed as the base
  const totalPopulation = village.TotalPopulationSurveyed;

  // Transform object-based skilling data into arrays of percentages
  const skilledPercentages = Object.values(village?.Skilling || {});
  const skilledGenderPercentages = Object.values(village?.SkilledGenderDemographic || {});
  const literacyPercentages = Object.values(village?.Literacy || {});

  return (
    <div className="p-8 bg-transparent text-white">
      <h1 className="text-3xl font-bold mb-8 underline text-center text-white">
        Skill Development Training Demographics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-start">
        {/* Skilled/Unskilled Doughnut Chart */}
        <article className="w-full">
          <CustomPieChart
            data={skilledPercentages}
            labels={["Skilled", "Unskilled"]}
            title="Skilled/Unskilled"
            totalPopulation={totalPopulation}
          />
        </article>

        {/* Literacy Bar Chart */}
        <article className="w-full">
          <CustomShapeBarChart
            data={literacyPercentages}
            labels={["Literate", "Illiterate", "Semiliterate"]}
            title="Literacy based"
            totalPopulation={totalPopulation}
          />
        </article>

        {/* Skilled by Gender Doughnut Chart */}
        <article className="w-full">
          <CustomPieChart
            data={skilledGenderPercentages}
            labels={["Male", "Female"]}
            title="Skilled By Gender"
            totalPopulation={totalPopulation}
          />
        </article>
      </div>
    </div>
  );
};

export default Row4;