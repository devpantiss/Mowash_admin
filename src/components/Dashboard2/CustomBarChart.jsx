import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell, CartesianGrid } from 'recharts';

const TOTAL_POPULATION = 42983;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    const percentage = data.value.toFixed(2);
    const actualValue = Math.round((data.value / 100) * TOTAL_POPULATION);
    return (
      <div className="bg-black ring-2 ring-purple-600 p-4 border rounded-lg shadow-lg bg-opacity-95 text-gray-800">
        <p className="font-semibold text-lg text-white">{label}</p>
        <p className="text-white">{`Rate: ${percentage}%`}</p>
        <p className="text-white">{`Value: ${actualValue}`}</p>
      </div>
    );
  }
  return null;
};

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const CustomBarShape = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const CustomShapeBarChart = ({ data, labels, title }) => {
  // Define colors for bars
  const COLORS = ['#2ECC71', '#E74C3C', '#3498DB']; // Green for Literate, Red for Semiliterate, Blue for Illiterate

  // Format data for Recharts Bar
  const formattedData = data.map((value, index) => ({
    name: labels[index],
    value: value,
  }));

  return (
    <div className="ring-2 ring-teal-200 rounded-md shadow-lg flex flex-col justify-center items-center p-6 bg-transparent text-white">
      <h1 className="text-xl font-bold text-center mb-6">{title}</h1>
      <BarChart
        width={400}
        height={400}
        data={formattedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff50" />
        <XAxis
          dataKey="name"
          stroke="#fff"
          fontSize={12}
          tick={{ fill: "#fff" }}
          axisLine={{ stroke: "#fff" }}
        />
        <YAxis
          stroke="#fff"
          fontSize={12}
          tick={{ fill: "#fff" }}
          axisLine={{ stroke: "none" }}
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{
            color: "#fff",
            fontSize: "14px",
            paddingTop: "10px",
          }}
        />
        <Bar dataKey="value" shape={<CustomBarShape />}>
          {formattedData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default CustomShapeBarChart;