import React, { PureComponent } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';

const TOTAL_INCOME = 815404075; // Total income for 13,025 households (INR)

class CustomTooltip extends PureComponent {
  render() {
    const { active, payload, label } = this.props;
    if (active && payload && payload.length) {
      const percentage = payload[0].value;
      const actualValue = Math.round((percentage / 100) * TOTAL_INCOME);
      return (
        <div className="bg-gray-900 bg-opacity-90 p-3 rounded-lg shadow-lg border border-teal-600 text-white">
          <p className="font-semibold">{`Source: ${label}`}</p>
          <p>{`Percentage: ${percentage}%`}</p>
          <p>{`Value: INR ${actualValue.toLocaleString('en-IN')}`}</p>
        </div>
      );
    }
    return null;
  }
}

export default class CurrencyRadarGraph extends PureComponent {
  render() {
    const { data } = this.props;

    // Fallback if data is not provided or empty
    if (!data || data.length === 0) {
      return <div className="text-white text-center">No data available for Radar Chart</div>;
    }

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#ffffff50" />
          <PolarAngleAxis
            dataKey="source"
            tick={{ fill: '#FFF', fontSize: 12, fontWeight: 'bold' }}
          />
          <PolarRadiusAxis
            tick={{ fill: '#FFF', fontSize: 10, fontWeight: 'bold' }}
            domain={[0, 50]}
            tickCount={6}
          />
          <Radar
            name="Percentage"
            dataKey="percentage"
            stroke="#FF4500"
            fill="#99F6E4" // Changed to Tailwind teal-200
            fillOpacity={0.6}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}