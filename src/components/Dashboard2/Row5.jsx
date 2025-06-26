import React from "react";
import { FaUsers, FaShieldAlt } from "react-icons/fa";
import { ResponsiveContainer } from "recharts";
import RadarChartComponent from "./RadarChartComponent";

// Data for chronic diseases (prevalence percentages)
const chronicDiseaseData = [
  { disease: "Diabetes", prevalence: 12 },
  { disease: "Hypertension", prevalence: 18 },
  { disease: "Asthma", prevalence: 8 },
  { disease: "Arthritis", prevalence: 15 },
  { disease: "Cancer", prevalence: 5 },
  { disease: "Heart Disease", prevalence: 10 },
];

const cardData = [
  {
    title: "Households with Children Receiving AWC Nutrition",
    value: "3960 (9.6%)",
    subText: "Households with Children Registered in AWC",
    subValue: "3908 (30%)",
    icon: <FaUsers className="text-3xl text-teal-200" />,
    chart: true,
  },
  {
    title: "Families with Health Insurance",
    value: "2605 (20%)",
    subText: "Households with MCP Card",
    subValue: "3094 (7.5%)",
    icon: <FaShieldAlt className="text-3xl text-teal-200" />,
    chart: true,
  },
];

// Reusable Card Component
const Card = ({ card, index }) => {
  return (
    <article
      className="relative p-8 rounded-2xl bg-gradient-to-tr from-gray-900 to-teal-900 border border-teal-200 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(153,246,228,0.5)] focus:ring-2 focus:ring-teal-200 focus:outline-none w-full max-w-md mx-auto overflow-hidden"
      aria-labelledby={`card-title-${index}`}
    >
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-teal-200 opacity-5"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <h3
            id={`card-title-${index}`}
            className="text-2xl font-bold tracking-tight mb-4"
          >
            {card.title}
          </h3>
          <div className="p-3 bg-teal-200 rounded-full bg-opacity-20">
            {card.icon}
          </div>
        </div>
        <p className="text-4xl font-semibold mb-6 animate-fade-in">
          {card.value}
        </p>

        {card.subText && (
          <>
            <hr className="border-teal-200/30 my-6" />
            <h4 className="text-lg font-semibold tracking-tight mb-2">
              {card.subText}
            </h4>
            <p className="text-2xl font-semibold animate-fade-in">
              {card.subValue}
            </p>
          </>
        )}
      </div>
    </article>
  );
};

const Row5 = () => {
  return (
    <div>
      <h1 className="text-3xl text-white underline font-bold mb-4 text-center">
        Health & Nutrition
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 p-4">
        {/* Left Half: Cards in flex-column */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          {cardData.map((card, index) => (
            <Card key={index} card={card} index={index} />
          ))}
        </div>

        {/* Right Half: Radar Chart for Chronic Diseases */}
        <div className="w-full lg:w-2/3">
          <div className="p-8 rounded-2xl bg-transparent ring-2 ring-teal-200 text-white shadow-xl h-full">
            <h2 className="text-2xl font-bold text-center mb-6">
              Chronic Diseases Prevalence
            </h2>
            <ResponsiveContainer width="100%" height={500}>
              <RadarChartComponent data={chronicDiseaseData} />
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row5;