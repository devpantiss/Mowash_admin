import React, { PureComponent } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';

const TOTAL_POPULATION = 42983;

class CustomTooltip extends PureComponent {
  render() {
    const { active, payload, label } = this.props;
    if (active && payload && payload.length) {
      const prevalence = payload[0].value;
      const actualValue = Math.round((prevalence / 100) * TOTAL_POPULATION);
      return (
        <div className="bg-gray-900 bg-opacity-90 p-3 rounded-lg shadow-lg border border-purple-600 text-white">
          <p className="font-semibold">{`Disease: ${label}`}</p>
          <p>{`Prevalence: ${prevalence}%`}</p>
          <p>{`Value: ${actualValue}`}</p>
        </div>
      );
    }
    return null;
  }
}

export default class RadarChartComponent extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-radar-chart-2p5sxm';

  render() {
    const { data } = this.props;

    // Fallback if data is not provided or empty
    if (!data || data.length === 0) {
      return <div className="text-white text-center">No data available for Radar Chart</div>;
    }

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#ffffff50" strokeWidth={2} />
          <PolarAngleAxis
            dataKey="disease"
            tick={{ fill: '#FFF', fontSize: 14, fontWeight: 'bold' }}
          />
          <PolarRadiusAxis
            tick={{ fill: '#FFF', fontSize: 12, fontWeight: 'bold' }}
            domain={[0, 20]}
            tickCount={5}
          />
          <Radar
            name="Prevalence"
            dataKey="prevalence"
            stroke="#FF4500"
            fill="#99F6E4" // Tailwind teal-200
            fillOpacity={0.6}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}