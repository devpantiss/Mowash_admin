import React from "react";
import CustomPieChart from "./CustomPieChart";
import CustomBarChart from "./CustomBarChart";

const Row4 = () => {
  // Sample data
  const skilledData = [13, 87]; // Skilled, Unskilled
  const skilledGenderData = [80, 20]; // Male, Female
  const litrecyData = [42, 26, 32]; // Literate, Semiliterate, Illiterate

  return (
    <div className="p-8 bg-transparent text-white">
      <h1 className="text-3xl font-bold mb-8 underline text-center">
        Skill Development Training Demographics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-start">
        {/* Skilled/Unskilled Doughnut Chart */}
        <article className="w-full">
          <CustomPieChart
            data={skilledData}
            labels={["Skilled", "Unskilled"]}
            title="Skilled/Unskilled"
          />
        </article>

        {/* Literacy Bar Chart */}
        <article className="w-full">
          <CustomBarChart
            data={litrecyData}
            labels={["Literate", "Semiliterate", "Illiterate"]}
            title="Literacy based"
          />
        </article>

        {/* Skilled by Gender Doughnut Chart */}
        <article className="w-full">
          <CustomPieChart
            data={skilledGenderData}
            labels={["Male", "Female"]}
            title="Skilled By Gender"
          />
        </article>
      </div>
    </div>
  );
};

export default Row4;
