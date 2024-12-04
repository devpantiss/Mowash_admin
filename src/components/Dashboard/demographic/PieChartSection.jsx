import React from 'react';
import CustomPieChart from './CustomPieChart';
import GenderDistribution from './GenderDistribution';

const PieChartSection = () => {
  // Sample data for age and social status
  const ageData = [30, 40, 20, 10];  // Age groups 0-18, 19-45, 46-60, 60+ Yrs
  const socialStatusData = [60, 20, 20]; // Low, Middle, High

  return (
    <div className="p-8 bg-transparent text-white">
      <h1 className="text-3xl font-bold mb-6">MWE Demographics</h1>
      <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-4 justify-center items-center">
        {/* Age Distribution */}
        <CustomPieChart
          data={ageData}
          labels={['0-18 Yrs', '19-45 Yrs', '46-60 Yrs', '60+ Yrs']}
          title={"Age"}
        />

        {/* Gender Distribution (Icon-based as in the image) */}
        <GenderDistribution />

        {/* Social Status Distribution */}
        <CustomPieChart
          data={socialStatusData}
          labels={['Low', 'Middle', 'High']}
          title={"Economic"}
        />
      </div>
    </div>
  );
};

export default PieChartSection;
