import React from "react";
import CustomPieChart from "./CustomPieChart";

const Row3 = () => {
  // Sample data for age and social status
  const ageData = [23.68, 34.21, 36.84, 5.26]; // Age groups 0-18, 19-45, 46-60, 60+ Yrs
  const categoryData = [16.67, 20, 50, 13.33]; // Low, Middle, High
  const genderData = [48.42, 51.58]; // Male: 48.42%, Female: 51.58%


  return (
    <div className="p-8 bg-transparent text-white">
      <h1 className="text-3xl font-bold mb-8 underline text-center">General Demographics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-start">
        {/* Age Distribution */}
        <CustomPieChart
          data={ageData}
          labels={["0-18 Yrs", "19-45 Yrs", "46-60 Yrs", "60+ Yrs"]}
          title="Age"
        />

        <CustomPieChart
          data={genderData}
          labels={["Male", "Female"]}
          title="Gender"
        />

        {/* Social Status Distribution */}
        <CustomPieChart
          data={categoryData}
          labels={["SC", "ST", "OBC", "General"]}
          title="Category"
        />
      </div>
    </div>
  );
};

export default Row3;
