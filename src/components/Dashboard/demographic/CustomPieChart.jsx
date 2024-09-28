import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Custom colors for the pie charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomPieChart = ({ data, labels }) => {
  // Format the data for Recharts Pie
  const formattedData = data.map((value, index) => ({
    name: labels[index],
    value: value,
  }));

  return (
    <div className="w-full ring-2 ring-white rounded-md flex justify-center items-center p-4">
      <PieChart width={250} height={350}>
        <Pie

          data={formattedData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip className="w-[300px]"/>
        <Legend />
      </PieChart>
    </div>
  );
};

export default CustomPieChart;
