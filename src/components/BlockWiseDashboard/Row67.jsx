import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import CurrencyRadarGraph from "../BlockWiseDashboard/charts/CurrencyRadarGraph";
import { ResponsiveContainer } from "recharts";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Constants for animation
const ANIMATION_DURATION = 2.5;
const ANIMATION_THRESHOLD = 0.1;

// Color mapping for income sources
const incomeSourceColors = {
  "Agriculture (crop)": "bg-blue-200 text-blue-800",
  "Agriculture (non-crop)": "bg-green-200 text-green-800",
  Service: "bg-purple-200 text-purple-800",
  NonAgriculture: "bg-orange-200 text-orange-800",
};

// Color mapping for expenditure sources
const expenditureColors = {
  Food: "bg-red-200 text-red-800",
  Housing: "bg-blue-200 text-blue-800",
  Education: "bg-green-200 text-green-800",
  HealthCare: "bg-purple-200 text-purple-800",
};

// Utility function to format value in thousands, lakhs, or crores
const formatToIndianUnits = (value) => {
  if (value >= 10000000) {
    return { value: (value / 10000000).toFixed(2), unit: "Cr" };
  } else if (value >= 100000) {
    return { value: (value / 100000).toFixed(2), unit: "Lac" };
  } else if (value >= 1000) {
    return { value: (value / 1000).toFixed(2), unit: "K" };
  } else {
    return { value: value.toFixed(2), unit: "" };
  }
};

// Reusable Card Component
const Card = ({ card, index, totalValue }) => {
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
      <div className="absolute inset-0 bg-teal-200 opacity-5"></div>
      {index === 0 ? (
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <h3 id={`card-title-${index}`} className="text-2xl font-bold tracking-tight mb-4">
              {card.title}
            </h3>
            <div className="p-3 bg-teal-200 rounded-full bg-opacity-20">
              {card.icon}
            </div>
          </div>
          <p className="text-4xl font-semibold mb-6 animate-fade-in" ref={valueRef}>
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
              <h4 className="text-lg font-semibold tracking-tight mb-2">{card.subText}</h4>
              <p className="text-2xl font-semibold animate-fade-in" ref={subValueRef}>
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
      ) : (
        <div className="relative z-10">
          <h3 id={`card-title-${index}`} className="text-2xl font-bold tracking-tight mb-6">
            {card.title}
          </h3>
          <ul className="space-y-4">
            {card.breakdownData.map((item, idx) => {
              const actualValue = Math.round((item.percentage / 100) * totalValue);
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
                      className={`inline-block w-3 h-3 rounded-full mr-2 ${card.sourceColors[item.source]}`}
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
      )}
    </article>
  );
};

const Row67 = ({ village }) => {
  const totalIncome = village.TotalVillageAnnualIncome;
  const totalExpenditure = village.TotalAnnualVillageExpenditure;
  const totalHouseholds = village.TotalHouseHoldsSurveyed;

  // Calculate dynamic averages
  const avgIncome = Math.round(totalIncome / totalHouseholds);
  const avgExpenditure = Math.round(totalExpenditure / totalHouseholds);

  // Transform IncomeBreakDown into array format
  const incomeBreakdownData = Object.entries(village?.IncomeBreakDown || {}).map(([source, percentage]) => ({
    source: source.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\(([^)]+)\)/g, '($1)').trim(), // Format e.g., "Agriculture(crop)" to "Agriculture (crop)"
    percentage: percentage,
  }));

  // Filter out "Others" for income breakdown card
  const filteredIncomeBreakdownData = incomeBreakdownData.filter((item) => item.source !== "Others");

  // Transform ExpenditureBreakdown into array format
  const expenditureBreakdownData = Object.entries(village?.ExpenditureBreakdown || {}).map(([source, percentage]) => ({
    source: source.replace(/([a-z])([A-Z])/g, '$1 $2').trim(), // Format e.g., "HealthCare" to "Health Care"
    percentage: percentage,
  }));

  // Filter out "Others" for expenditure breakdown card
  const filteredExpenditureBreakdownData = expenditureBreakdownData.filter((item) => item.source !== "Others");

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full px-4 py-8">
      <section className="w-full lg:w-1/2">
        <h1 className="text-4xl text-white underline font-bold mb-6 text-center">
          Household Income
        </h1>
        <div className="flex flex-col gap-6 p-4">
          <div className="w-full flex flex-col gap-6 justify-center">
            {[
              {
                title: "Total Annual Household Income",
                value: totalIncome,
                subText: "Avg. Annual Household Income",
                subValue: avgIncome,
                icon: <FaRupeeSign className="text-3xl text-teal-200" />,
                breakdownData: filteredIncomeBreakdownData,
                sourceColors: incomeSourceColors,
              },
              { title: "Income Source Breakdown", breakdownData: filteredIncomeBreakdownData, sourceColors: incomeSourceColors },
            ].map((card, index) => (
              <Card key={index} card={card} index={index} totalValue={totalIncome} />
            ))}
          </div>
          <div className="w-full">
            <div className="p-6 rounded-xl bg-transparent ring-2 ring-teal-200 text-white shadow-xl h-full">
              <h2 className="text-2xl font-bold text-center mb-6">
                Income Source Breakdown
              </h2>
              <ResponsiveContainer width="100%" height={400}>
                <CurrencyRadarGraph data={incomeBreakdownData} />
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full lg:w-1/2">
        <h1 className="text-4xl text-white underline font-bold mb-6 text-center">
          Household Expenditure
        </h1>
        <div className="flex flex-col gap-6 p-4">
          <div className="w-full flex flex-col gap-6 justify-center">
            {[
              {
                title: "Annual Household Expenditure",
                value: totalExpenditure,
                subText: "Avg. Annual Household Expenditure",
                subValue: avgExpenditure,
                icon: <FaRupeeSign className="text-3xl text-teal-200" />,
                breakdownData: filteredExpenditureBreakdownData,
                sourceColors: expenditureColors,
              },
              { title: "Expenditure Breakdown", breakdownData: filteredExpenditureBreakdownData, sourceColors: expenditureColors },
            ].map((card, index) => (
              <Card key={index} card={card} index={index} totalValue={totalExpenditure} />
            ))}
          </div>
          <div className="w-full">
            <div className="p-6 rounded-xl bg-transparent ring-2 ring-teal-200 text-white shadow-xl h-full">
              <h2 className="text-2xl font-bold text-center mb-6">
                Expenditure Breakdown
              </h2>
              <ResponsiveContainer width="100%" height={400}>
                <CurrencyRadarGraph data={expenditureBreakdownData} />
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Row67;