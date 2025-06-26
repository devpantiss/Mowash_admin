import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import CurrencyRadarGraph from "./CurrencyRadarGraph";
import { ResponsiveContainer } from "recharts";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Constants for animation
const ANIMATION_DURATION = 2.5; // Original 2.5 seconds
const ANIMATION_THRESHOLD = 0.1;

// Data for income source breakdown (percentages)
const incomeSourceData = [
  { source: "Agriculture (Crop)", percentage: 28 },
  { source: "Agriculture (Non-Crop)", percentage: 13 },
  { source: "Service", percentage: 46 },
  { source: "Non-Agriculture", percentage: 10 },
  { source: "Others", percentage: 3 },
];

// Filter out "Others" for the second card display
const filteredIncomeSourceData = incomeSourceData.filter(
  (item) => item.source !== "Others"
);

// Color mapping for income sources in the breakdown list
const sourceColors = {
  "Agriculture (Crop)": "bg-blue-200 text-blue-800",
  "Agriculture (Non-Crop)": "bg-green-200 text-green-800",
  "Service": "bg-purple-200 text-purple-800",
  "Non-Agriculture": "bg-orange-200 text-orange-800",
};

const TOTAL_INCOME = 815404075; // Total income for 13,025 households (INR)

// Utility function to format value in thousands, lakhs, or crores
const formatToIndianUnits = (value) => {
  if (value >= 10000000) {
    return { value: (value / 10000000).toFixed(2), unit: "Cr" }; // Crores
  } else if (value >= 100000) {
    return { value: (value / 100000).toFixed(2), unit: "Lac" }; // Lakhs
  } else if (value >= 1000) {
    return { value: (value / 1000).toFixed(2), unit: "K" }; // Thousands
  } else {
    return { value: value.toFixed(2), unit: "" }; // Less than 1000
  }
};

// Card data with updated styling
const cardData = [
  {
    title: "Total Annual Household Income",
    value: 815404075,
    subText: "Avg. Annual Household Income",
    subValue: 62603,
    icon: <FaRupeeSign className="text-3xl text-teal-200" />,
  },
  {
    title: "Income Source Breakdown",
  },
];

// Reusable Card Component
const Card = ({ card, index }) => {
  const { ref: valueRef, inView: valueInView } = useInView({
    triggerOnce: true,
    threshold: ANIMATION_THRESHOLD,
  });
  const { ref: subValueRef, inView: subValueInView } = useInView({
    triggerOnce: true,
    threshold: ANIMATION_THRESHOLD,
  });

  return (
    <article
      className="relative p-8 rounded-2xl bg-gradient-to-tr from-gray-900 to-teal-900 border border-teal-200 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(153,246,228,0.5)] focus:ring-2 focus:ring-teal-200 focus:outline-none w-full max-w-md mx-auto overflow-hidden"
      aria-labelledby={`card-title-${index}`}
    >
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-teal-200 opacity-5"></div>
      
      {index === 0 ? (
        <>
          {/* First Card: Total Annual Household Income */}
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
            <p
              className="text-4xl font-semibold mb-6 animate-fade-in"
              ref={valueRef}
            >
              <span className="inline-flex items-center">
                <FaRupeeSign className="text-2xl text-teal-200 mr-1" aria-hidden="true" />
                <CountUp
                  start={0}
                  end={valueInView ? card.value : 0}
                  duration={ANIMATION_DURATION}
                  separator=","
                  useEasing={true}
                  preserveValue={true}
                  delay={0.2}
                />
              </span>
            </p>

            {card.subText && (
              <>
                <hr className="border-teal-200/30 my-6" />
                <h4
                  className="text-lg font-semibold tracking-tight mb-2"
                >
                  {card.subText}
                </h4>
                <p
                  className="text-2xl font-semibold animate-fade-in"
                  ref={subValueRef}
                >
                  <span className="inline-flex items-center">
                    <FaRupeeSign className="text-xl text-teal-200 mr-1" aria-hidden="true" />
                    <CountUp
                      start={0}
                      end={subValueInView ? card.subValue : 0}
                      duration={ANIMATION_DURATION}
                      separator=","
                      useEasing={true}
                      preserveValue={true}
                      delay={0.4}
                    />
                  </span>
                </p>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          {/* Second Card: Income Source Breakdown */}
          <div className="relative z-10">
            <h3
              id={`card-title-${index}`}
              className="text-2xl font-bold tracking-tight mb-6"
            >
              {card.title}
            </h3>
            <ul className="space-y-4">
              {filteredIncomeSourceData.map((item, idx) => {
                const actualValue = Math.round(
                  (item.percentage / 100) * TOTAL_INCOME
                );
                const { value: formattedValue, unit } = formatToIndianUnits(actualValue);
                const { ref: itemRef, inView: itemInView } = useInView({
                  triggerOnce: true,
                  threshold: ANIMATION_THRESHOLD,
                });

                return (
                  <li
                    key={idx}
                    className="flex justify-between items-center text-lg animate-fade-in"
                    ref={itemRef}
                  >
                    <span className="font-medium flex items-center">
                      <span
                        className={`inline-block w-3 h-3 rounded-full mr-2 ${sourceColors[item.source]}`}
                      ></span>
                      {item.source}
                    </span>
                    <span className="font-semibold">
                      {item.percentage}% (
                      <span className="inline-flex items-center">
                        <FaRupeeSign className="text-base text-teal-200 mr-1" aria-hidden="true" />
                        <CountUp
                          start={0}
                          end={itemInView ? parseFloat(formattedValue) : 0}
                          duration={ANIMATION_DURATION}
                          decimals={2}
                          useEasing={true}
                          preserveValue={true}
                          delay={0.2 + idx * 0.2}
                        />
                        {unit}
                      </span>
                      )
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </article>
  );
};

const Row6 = () => {
  return (
    <section className="w-full lg:w-1/2">
      <h1 className="text-4xl text-white underline font-bold mb-6 text-center">
        Household Income
      </h1>
      <div className="flex flex-col gap-6 p-4">
        {/* Cards Section */}
        <div className="w-full flex flex-col gap-6 justify-center">
          {cardData.map((card, index) => (
            <Card key={index} card={card} index={index} />
          ))}
        </div>

        {/* Radar Chart Section */}
        <div className="w-full">
          <div className="p-6 rounded-xl bg-transparent ring-2 ring-teal-200 text-white shadow-xl h-full">
            <h2 className="text-2xl font-bold text-center mb-6">
              Income Source Breakdown
            </h2>
            <ResponsiveContainer width="100%" height={400}>
              <CurrencyRadarGraph data={incomeSourceData} />
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Row6;