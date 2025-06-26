import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, Sector } from 'recharts';

const TOTAL_POPULATION = 42983;

const renderActiveShape = (props) => {
  const {
    cx, cy, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent,
  } = props;
  const actualValue = Math.round(percent * TOTAL_POPULATION);
  const percentage = (percent * 100).toFixed(2);

  return (
    <g>
      <text x={cx} y={cy - 20} dy={8} textAnchor="middle" fill="#fff" fontWeight="bold">{payload.name}</text>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#fff" fontWeight="bold">{actualValue}</text>
      <text x={cx} y={cy + 20} dy={8} textAnchor="middle" fill="#fff" fontWeight="bold">{`${percentage}%`}</text>
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

// const CustomTooltip = ({ active, payload }) => {
//   if (active && payload && payload.length) {
//     const data = payload[0];
//     const actualValue = Math.round(data.payload.percent * TOTAL_POPULATION);
//     const percentage = (data.payload.percent * 100).toFixed(2);
//     return (
//       <div className="bg-white p-3 border rounded-lg shadow-lg bg-opacity-90">
//         <p className="font-semibold text-gray-800">{data.name}</p>
//         <p className="text-gray-600">{`Value: ${actualValue}`}</p>
//         <p className="text-gray-600">{`Rate: ${percentage}%`}</p>
//       </div>
//     );
//   }
//   return null;
// };

const CustomPieChart = ({ data, labels, title }) => {
  // Define color sets based on chart title or labels
  const getColors = () => {
    if (title === "Gender" && labels.includes("Male") && labels.includes("Female")) {
      return ['#0088FE', '#FF69B4']; // Blue for Male, Pink for Female
    } else if (title === "Age") {
      return ['#00C49F', '#FFBB28', '#FF8042', '#A569BD']; // Teal, Yellow, Pink, Purple
    } else {
      return ['#2ECC71', '#E74C3C', '#3498DB', '#A569BD']; // Green, Red, Blue, Blue for Purple
    }
  };

  const COLORS = getColors();

  // Format the data for Recharts Pie
  const formattedData = data.map((value, index) => ({
    name: labels[index],
    value: value,
    percent: value / 100,
  }));

  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full ring-2 ring-teal-200 rounded-md flex flex-col justify-center items-center p-6 bg-transparent text-white">
      <h1 className="text-xl font-bold text-center mb-4">{title}</h1>
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
          dataKey="value"
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
        {/* <Tooltip content={<CustomTooltip />} /> */}
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