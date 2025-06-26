import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, Sector } from 'recharts';
import { FaMale, FaFemale } from 'react-icons/fa';

// Custom colors for the pie charts
const COLORS = ['#0088FE', '#FF69B4'];

const TOTAL_POPULATION = 42983;

const renderActiveShape = (props) => {
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent,
  } = props;
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  const actualValue = Math.round(percent * TOTAL_POPULATION);
  const percentage = (percent * 100).toFixed(2);

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#fff"
        fontWeight="bold"
      >{`Value: ${actualValue}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >{`Rate: ${percentage}%`}</text>
    </g>
  );
};

const GenderDistribution = () => {
  // Data for gender distribution
  const genderData = [48.42, 51.58]; // Male: 48.42%, Female: 51.58%
  const genderLabels = ['Male', 'Female'];

  // Gender data for icons and percentages
  const genderIconData = [
    { label: 'Male', value: 48.42, color: '#0088FE', icon: <FaMale size={24} className="text-blue-600" /> },
    { label: 'Female', value: 51.58, color: '#FF69B4', icon: <FaFemale size={24} className="text-pink-500" /> },
  ];

  // Format the data for Recharts Pie
  const formattedData = genderData.map((value, index) => ({
    name: genderLabels[index],
    value: value,
    percent: value / 100,
  }));

  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full max-w-[500px] ring-2 ring-white rounded-md flex flex-col justify-center items-center p-6 bg-transparent text-white">
      <h1 className="text-xl font-bold text-center mb-4">Gender</h1>
      <div className="flex items-center justify-center w-full">
        <PieChart width={650} height={480}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={formattedData}
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {genderData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
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
        <div className="ml-4 flex flex-col justify-center">
          {genderIconData.map((gender, index) => (
            <div key={index} className="flex items-center mb-3">
              <div className="mr-3">{gender.icon}</div>
              <div className="flex flex-col">
                <span className="text-base font-semibold" style={{ color: gender.color }}>
                  {gender.label}
                </span>
                <span className="text-base">{gender.value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenderDistribution;