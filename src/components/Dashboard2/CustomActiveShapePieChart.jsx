import React, { useState, useEffect } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";
import CountUp from "react-countup";

// Colors for pie chart segments
const COLORS = ["#EF4444", "#10B981"]; // Red for "Need", Green for "Covered"

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
    value,
    percent,
  } = props;

  const activeOuterRadius = outerRadius + 10;
  const percentage = (percent * 100).toFixed(1);

  return (
    <g>
      {/* Active sector with expanded radius */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={activeOuterRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      {/* Center text */}
      <text
        x={cx}
        y={cy - 30}
        textAnchor="middle"
        fill="#fff"
        fontSize="16"
        fontWeight="bold"
      >
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        fill="#fff"
        fontSize="20"
        fontWeight="bold"
      >
        <tspan>
          <CountUp
            key={payload.value}
            start={0}
            end={payload.value}
            duration={1.5}
            separator=","
            useEasing={true}
          />
        </tspan>
      </text>
      <text
        x={cx}
        y={cy + 30}
        textAnchor="middle"
        fill="#fff"
        fontSize="14"
        fontWeight="bold"
      >
        {`${percentage}%`}
      </text>
    </g>
  );
};

const CustomActiveShapePieChart = ({ data, labels, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Prepare data for Recharts
  const chartData = data.map((value, index) => ({
    name: labels[index],
    value,
  }));

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="text-white bg-gray-900/30 p-6 rounded-t-xl">
      <h3 className="text-xl font-semibold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomActiveShapePieChart;