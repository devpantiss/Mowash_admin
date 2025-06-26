import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import villageSurveyData from "../villageSurveyData";

const DistrictDashboard = () => {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate(); // Initialize navigate

  // Calculate totals from villageSurveyData
  const totalHouseholds = villageSurveyData.reduce(
    (sum, village) => sum + village.TotalHouseHoldsSurveyed,
    0
  );
  const totalPopulation = villageSurveyData.reduce(
    (sum, village) => sum + village.TotalPopulationSurveyed,
    0
  );

  // Filter data based on active tab
  const filteredData =
    activeTab === "all"
      ? villageSurveyData
      : villageSurveyData.filter((village) => village.Block === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4 md:p-6 lg:p-8 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        {/* Header with Futuristic Title and Stats */}
        <header className="mb-8 relative">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600 animate-pulse">
            Village Data Hub
          </h1>
          <div className="absolute -top-4 -right-4 w-48 h-48 bg-teal-500/20 rounded-full filter blur-2xl opacity-50 animate-blob"></div>
          <div className="bg-gray-900/80 backdrop-blur-md border border-teal-200 p-6 rounded-xl shadow-lg mt-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-teal-300">Total Households</p>
                <p className="text-3xl font-bold text-cyan-400">
                  {totalHouseholds}
                </p>
              </div>
              <div>
                <p className="text-sm text-teal-300">Total Population</p>
                <p className="text-3xl font-bold text-cyan-400">
                  {totalPopulation}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div className="mb-8 flex justify-center space-x-4">
          {["all", "Sukinda", "Danagadi"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none ring-2 ring-teal-200 focus:ring-2 focus:ring-teal-400 ${
                activeTab === tab
                  ? "bg-teal-600 text-white"
                  : "bg-gray-700/50 text-gray-300 hover:bg-gray-600"
              }`}
              aria-label={`Switch to ${
                tab === "all" ? "All Villages" : `${tab} Block`
              }`}
              aria-pressed={activeTab === tab}
            >
              {tab === "all" ? "All Villages" : `${tab} Block`}
            </button>
          ))}
        </div>

        {/* Village Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredData.map((village, index) => (
            <div
              key={index}
              className="bg-gray-900/70 backdrop-blur-md border border-teal-200 p-5 rounded-xl shadow-lg hover:shadow-neon hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
              onClick={() => navigate(`/dashboard/village/${village.VillageName}`)} // Navigate on click
            >
              <h2 className="text-xl font-semibold text-teal-300 mb-3 truncate">
                {village.VillageName}
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs text-cyan-400 uppercase tracking-wider">
                      Households
                    </p>
                    <p className="text-lg font-medium text-white">
                      {village.TotalHouseHoldsSurveyed}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-cyan-400 uppercase tracking-wider">
                      Population
                    </p>
                    <p className="text-lg font-medium text-white">
                      {village.TotalPopulationSurveyed}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="text-xs text-cyan-400 uppercase tracking-wider">
                      Avg <br /> Income (₹)
                    </p>
                    <p className="text-lg font-medium text-white">
                      {village.AvgAnnualIncome}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-cyan-400 uppercase tracking-wider">
                      Avg <br /> Expenditure (₹)
                    </p>
                    <p className="text-lg font-medium text-white">
                      {village.AvgAnnualVillageExpenditure}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-1 bg-gradient-to-r from-teal-500/50 to-purple-600/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for Animations and Effects */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -20px) scale(1.1);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        .shadow-neon {
          box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ff00;
        }
        .truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default DistrictDashboard;