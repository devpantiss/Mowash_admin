import React from "react";
import CustomPieChart from "./CustomPieChart";
import CustomBarChart from "./CustomBarChart";

const Row9 = () => {
  // Housing Data
  const totalHouseholds = 13025;
  const Availability = [80, 20]; // Owned: 85%, Non-Owned: 15%
  const waterSourceData = [60, 25, 15]; // Pucca: 60%, Kutcha: 25%, Semi-Pucca: 15%

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
          {/* Own House Pie Chart */}
          <article className="w-full">
            <CustomPieChart
              data={Availability}
              labels={["Has Reliable Access", "Rely on basic/Inconsistent Sources"]}
              title="Reliable Water Availability"
            />
          </article>

          {/* House Type Bar Chart */}
          <article className="w-full">
            <CustomBarChart
              data={waterSourceData}
              labels={["Piped Water", "Tube Well", "Well", "Surface Water/Others"]}
              title="Sources of Water"
            />
          </article>

          {/* Houses Under Schemes Pie Chart */}
          <article className="w-full">
            <CustomPieChart
              data={waterSourceData}
              labels={["Piped Water", "Tube Well", "Well", "Surface Water/Others"]}
              title="Sources of Water"
            />
          </article>
        </div>
      </section>
    </div>
  );
};

export default Row9;