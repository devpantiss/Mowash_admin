import React from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

// Trend data for districts (sample)
const generateTrendData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    month: `Sep-${23 + i % 2}`,
    claims: Math.floor(Math.random() * 50) + 50,
  }));
};

// District data
const districtData = [
  { district: 'Angul', claims: 63771, change: 2671, trend: generateTrendData() },
  { district: 'Balasore', claims: 104935, change: -3421, trend: generateTrendData() },
  { district: 'Bargarh', claims: 60855, change: 2444, trend: generateTrendData() },
  { district: 'Bhadrak', claims: 84390, change: 2418, trend: generateTrendData() },
  { district: 'Bolangir', claims: 34607, change: 1349, trend: generateTrendData() },
  { district: 'Boudh', claims: 0, change: 0, trend: generateTrendData() },
  { district: 'Cuttack', claims: 59261, change: 24855, trend: generateTrendData() },
  { district: 'Deogarh', claims: 7122, change: -562, trend: generateTrendData() },
  { district: 'Dhenkanal', claims: 96147, change: 1943, trend: generateTrendData() },
  { district: 'Gajapati', claims: 2483, change: 32, trend: generateTrendData() },
  { district: 'Ganjam', claims: 173645, change: -5819, trend: generateTrendData() },
  { district: 'Jagatsinghpur', claims: 33361, change: 1136, trend: generateTrendData() },
  { district: 'Jajpur', claims: 143522, change: -5077, trend: generateTrendData() },
  { district: 'Jharsuguda', claims: 3575, change: 257, trend: generateTrendData() },
  { district: 'Kalahandi', claims: 36706, change: -1590, trend: generateTrendData() },
  { district: 'Kandhamal', claims: 6285, change: 0, trend: generateTrendData() },
  { district: 'Kendrapara', claims: 40602, change: 112, trend: generateTrendData() },
  { district: 'Keonjhar', claims: 19872, change: -1390, trend: generateTrendData() },
  { district: 'Khorda', claims: 1258979, change: 56779, trend: generateTrendData() },
  { district: 'Koraput', claims: 5874, change: 184, trend: generateTrendData() },
  { district: 'Malkangiri', claims: 0, change: 0, trend: generateTrendData() },
  { district: 'Mayurbhanj', claims: 49096, change: 1834, trend: generateTrendData() },
  { district: 'Nabarangpur', claims: 9283, change: 192, trend: generateTrendData() },
  { district: 'Nayagarh', claims: 28749, change: 1065, trend: generateTrendData() },
  { district: 'Nuapada', claims: 7320, change: 351, trend: generateTrendData() },
  { district: 'Puri', claims: 44032, change: -1000, trend: generateTrendData() },
  { district: 'Rayagada', claims: 7850, change: 390, trend: generateTrendData() },
  { district: 'Sambalpur', claims: 69952, change: -1309, trend: generateTrendData() },
  { district: 'Subarnapur', claims: 119069, change: 5713, trend: generateTrendData() },
  { district: 'Sundargarh', claims: 85832, change: 3336, trend: generateTrendData() },
];

const DistrictRow = ({ district, claims, change, trend }) => {
  const changeDirection = change > 0 ? '↑' : '↓';
  const changeColor = change > 0 ? 'text-green-400' : 'text-red-400';

  return (
    <tr className="border-b border-gray-700">
      <td className="p-2">{district}</td>
      <td className="p-2 flex items-center space-x-2">
        <span>{claims.toLocaleString()}</span>
        <span className={`${changeColor}`}>
          {changeDirection} {Math.abs(change).toLocaleString()}
        </span>
      </td>
      <td className="p-2">
        <ResponsiveContainer width="100%" height={30}>
          <LineChart data={trend}>
            <Tooltip />
            <Line type="monotone" dataKey="claims" stroke="#8884d8" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </td>
    </tr>
  );
};

const ClaimSummaryTable = () => {
  const tableColumns = [
    districtData.slice(0, 10),
    districtData.slice(10, 20),
    districtData.slice(20, 30),
  ];

  return (
    <div className="p-8 bg-transparent ring-2 ring-gray-700 rounded-md text-white">
      <h1 className="text-3xl font-bold mb-4">
        Claim Summary <span className="text-orange-400">31,96,445</span>
      </h1>
      <div className="flex space-x-4">
        {tableColumns.map((column, index) => (
          <div key={index} className="flex-1">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-green-800 text-left">
                  <th className="p-2">District</th>
                  <th className="p-2">No. of Claims</th>
                  <th className="p-2">Monthly Trend</th>
                </tr>
              </thead>
              <tbody>
                {column.map((district, index) => (
                  <DistrictRow
                    key={index}
                    district={district.district}
                    claims={district.claims}
                    change={district.change}
                    trend={district.trend}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClaimSummaryTable;
