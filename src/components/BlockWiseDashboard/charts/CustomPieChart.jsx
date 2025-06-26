import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend, Sector } from "recharts";

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
  } = props;
  const actualValue = payload.value || 0; // Use the pre-calculated value from formattedData
  const percentage = isNaN(percent) ? "0.00" : (percent * 100).toFixed(2);

//   console.log("renderActiveShape payload:", payload); // Debug log

  return (
    <g>
      <text
        x={cx}
        y={cy - 20}
        dy={8}
        textAnchor="middle"
        fill="#fff"
        fontWeight="bold"
      >
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill="#fff"
        fontWeight="bold"
      >
        {actualValue}
      </text>
      <text
        x={cx}
        y={cy + 20}
        dy={8}
        textAnchor="middle"
        fill="#fff"
        fontWeight="bold"
      >
        {`${percentage}%`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const CustomPieChart = ({ data, labels, title, totalPopulation }) => {
  // Validate totalPopulation
  const validTotalPopulation = totalPopulation || 0;

  // Define color sets based on chart title or labels
  const getColors = () => {
    if (title === "Gender" && labels.includes("Male") && labels.includes("Female")) {
      return ["#0088FE", "#FF69B4"]; // Blue for Male, Pink for Female
    } else if (title === "Age") {
      return ["#00C49F", "#FFBB28", "#FF8042", "#A569BD"]; // Teal, Yellow, Pink, Purple
    } else {
      return ["#2ECC71", "#E74C3C", "#3498DB", "#A569BD"]; // Green, Red, Blue, Purple
    }
  };

  const COLORS = getColors();

  // Format the data for Recharts Pie, calculating values from percentages
  const formattedData = data.map((percent, index) => {
    const value = Math.round((percent / 100) * validTotalPopulation); // Calculate actual value
    const calculatedPercent = value / validTotalPopulation; // Recalculate percent as fraction
    console.log(`Index: ${index}, Percent: ${percent}, Value: ${value}, Calculated Percent: ${calculatedPercent}`); // Debug log
    return {
      name: labels[index],
      value: value,
      percent: calculatedPercent,
    };
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full ring-2 ring-teal-200 rounded-md flex flex-col justify-center items-center p-6 bg-gray-900/70 backdrop-blur-md border border-teal-200/30 shadow-lg hover:shadow-[0_0_15px_rgba(153,246,228,0.5)] transition-all duration-300">
      <h1 className="text-xl font-bold text-center mb-4 text-teal-300">
        {title}
      </h1>
      <PieChart width={300} height={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={formattedData}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value" // Ensure this points to the calculated value
          onMouseEnter={onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}-${entry}`}
              fill={COLORS[index % COLORS.length]}
              stroke={COLORS[index % COLORS.length]}
              strokeWidth={2}
            />
          ))}
        </Pie>
        <Legend
          wrapperStyle={{
            color: "#fff",
            fontSize: "14px",
            paddingTop: "10px",
          }}
        />
      </PieChart>
    </div>
  );
};

export default CustomPieChart;