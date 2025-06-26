import React from "react";
import { useParams } from "react-router-dom";
import Row1 from "../components/BlockWiseDashboard/Row1";
import Row2 from "../components/BlockWiseDashboard/Row2";
import Row3 from "../components/BlockWiseDashboard/Row3";
import Row4 from "../components/BlockWiseDashboard/Row4";
import Row5 from "../components/BlockWiseDashboard/Row5";
import Row67 from "../components/BlockWiseDashboard/Row67";
import Row8 from "../components/BlockWiseDashboard/Row8";
import Row9 from "../components/BlockWiseDashboard/Row9";
import Row10 from "../components/BlockWiseDashboard/Row10"; // Import Row10
import villageSurveyData from "../villageSurveyData";
import { FaHome, FaUser, FaUsers } from "react-icons/fa";

const VillageDetailPage = () => {
  const { villageName } = useParams();

  // Normalize villageName and find matching village
  const normalizedVillageName = villageName?.replace(/_/g, " ").toLowerCase();
  const village = villageSurveyData.find((v) =>
    v.VillageName.toLowerCase() === normalizedVillageName
  );

  // Fallback if village is not found
  if (!village) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4 md:p-6 lg:p-8 font-sans antialiased flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-300">
          Village Not Found
        </h1>
      </div>
    );
  }

  // Calculate total enumerators (placeholder: 1 per 50 households)
  const totalEnumerators = Math.ceil(village.TotalHouseHoldsSurveyed / 50);

  const cardData = [
    {
      title: "Households Surveyed",
      value: village.TotalHouseHoldsSurveyed.toString(),
      subText: "Total Benefitted",
      subValue: (village.TotalHouseHoldsSurveyed * 0.9).toString(),
      icon: <FaHome size={32} className="text-3xl text-teal-200" />,
    },
    {
      title: "Enumerators Involved",
      value: totalEnumerators.toString(),
      subText: "Households Covered",
      subValue: village.TotalHouseHoldsSurveyed.toString(),
      icon: <FaUser size={32} className="text-3xl text-teal-200" />,
    },
    {
      title: "Population Surveyed",
      value: village.TotalPopulationSurveyed.toString(),
      subText: "Govt.",
      subValue: "0",
      additionalText: "Private",
      additionalValue: (village.TotalPopulationSurveyed * 0.1).toString(),
      icon: <FaUsers size={32} className="text-3xl text-teal-200" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4 md:p-6 lg:p-8 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 relative">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600 animate-pulse">
            {village.VillageName} Overview
          </h1>
          <div className="absolute -top-6 -right-6 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        </header>
        <Row1 cardData={cardData} />
        <Row2 />
        <Row3 village={village} />
        <Row4 village={village} />
        <Row5 village={village} />
        <Row67 village={village} />
        <Row8 village={village} />
        <Row9 village={village} />
        <Row10 village={village} /> {/* Add Row10 with village prop */}
        <div className="mt-12 text-center text-gray-400">
          <p>Additional village details will be added here...</p>
        </div>
      </div>
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.2); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-blob { animation: blob 8s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        .animate-pulse { animation: pulse 2s infinite; }
        .animate-fade-in { animation: fadeIn 1s ease-in; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default VillageDetailPage;