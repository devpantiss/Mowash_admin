import React from "react";
import CustomPieChart from "../BlockWiseDashboard/charts/CustomPieChart";

const Row3 = ({ village }) => {
  // Transform object-based demographic data into arrays of percentages
  const agePercentages = Object.values(village?.villageAgeDemographic || {});
  const genderPercentages = Object.values(village?.PopulationGenderDemographic || {});
  const categoryPercentages = Object.values(village?.PopulationCategoryDemographic || {});
  const totalPopulation = village?.TotalPopulationSurveyed || 0;

  // Debug log to verify data
  console.log("Village Data:", {
    villageAgeDemographic: agePercentages,
    PopulationGenderDemographic: genderPercentages,
    PopulationCategoryDemographic: categoryPercentages,
    TotalPopulationSurveyed: totalPopulation,
  });

  // Fallback if data is missing or empty after transformation
  if (
    agePercentages.length === 0 ||
    genderPercentages.length === 0 ||
    categoryPercentages.length === 0
  ) {
    return (
      <div className="p-4 bg-transparent text-white text-center">
        <h1 className="text-3xl font-bold mb-8 underline text-white">
          General Demographics
        </h1>
        <p className="text-xl text-gray-400">
          Demographic data not available. Check console for details.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-transparent text-white">
      <h1 className="text-3xl font-bold mb-8 underline text-center text-white">
        General Demographics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-start">
        {/* Age Distribution */}
        <CustomPieChart
          data={agePercentages}
          labels={["0-18 Yrs", "19-45 Yrs", "46-60 Yrs", "60+ Yrs"]}
          title="Age"
          totalPopulation={totalPopulation}
        />

        <CustomPieChart
          data={genderPercentages}
          labels={["Male", "Female"]}
          title="Gender"
          totalPopulation={totalPopulation}
        />

        {/* Social Status Distribution */}
        <CustomPieChart
          data={categoryPercentages}
          labels={["SC", "ST", "OBC", "General"]}
          title="Category"
          totalPopulation={totalPopulation}
        />
      </div>
    </div>
  );
};

export default Row3;