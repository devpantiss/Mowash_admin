import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

// Sample data for the bar graph (Revenue over the last 12 months)
const data = [
    { month: 'J', revenue: 150 },
    { month: 'F', revenue: 180 },
    { month: 'M', revenue: 200 },
    { month: 'A', revenue: 220 },
    { month: 'M', revenue: 270 },
    { month: 'J', revenue: 300 },
    { month: 'J', revenue: 350 },
    { month: 'A', revenue: 320 },
    { month: 'S', revenue: 290 },
    { month: 'O', revenue: 310 },
    { month: 'N', revenue: 240 },
    { month: 'D', revenue: 190 },
];

const cardData = [
    {
        title: 'Total Mowash Engineers',
        value: '4.79 Cr.',
        subText: 'Total Households Benefitted',
        subValue: '119.5 Lakhs',
        backgroundColor: 'bg-blue-900',
    },
    {
        title: 'Total Users',
        value: '3.56 Cr.',
        subText: 'Households Covered',
        subValue: '99.09 Lakhs (83%)',
        backgroundColor: 'bg-blue-800',
    },
    {
        title: 'Total Toilets',
        value: '9,509',
        subText: 'Retrofitted',
        subValue: '8,530',
        additionalText: 'Dibyanjan Friendly',
        additionalValue: '979',
        backgroundColor: 'bg-blue-700',
    },
    {
        title: 'Total Jobs Executed',
        value: '4.11 Cr.',
        subText: 'Govt.',
        subValue: '3.98 Cr.',
        additionalText: 'Private',
        additionalValue: '13,14,041',
        backgroundColor: 'bg-blue-600',
    },
    {
        title: 'Total Revenue Generated',
        value: '₹ 2767.51 Cr.',
        chart: true,
        backgroundColor: 'bg-blue-500',
    },
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white text-black p-2 rounded shadow-lg">
                <p>{`₹ ${payload[0].value.toFixed(2)} Cr.`}</p>
            </div>
        );
    }
    return null;
};

const yAxisTickFormatter = (value) => `${value} Cr.`;

const FirstRow = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
            {cardData.map((card, index) => (
                <div key={index} className={`p-4 rounded-lg ${card.backgroundColor} text-white`}>
                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                    <p className="text-2xl font-bold mb-2">{card.value}</p>

                    {card.subText && (
                        <>
                            <hr className="border-white my-2" />
                            <p className="text-sm text-gray-300">{card.subText}</p>
                            <p className="font-bold">{card.subValue}</p>
                        </>
                    )}

                    {card.additionalText && (
                        <>
                            <p className="text-sm text-gray-300">{card.additionalText}</p>
                            <p className="font-bold">{card.additionalValue}</p>
                        </>
                    )}

                    {card.chart && (
                        <div className="mt-4">
                            <ResponsiveContainer width="100%" height={100}>
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis
                                        dataKey="month"
                                        tick={{ fontSize: 12, fill: '#FFF' }} // Adjust font size and color for X-axis
                                        tickSize={5} // Adjust tick size for better spacing
                                        tickMargin={5} // Adjust margin below the tick for better alignment
                                        axisLine={true} // Remove X-axis line for a cleaner look
                                        tickLine={false} // Remove tick lines
                                    />
                                    <YAxis
                                        tickFormatter={yAxisTickFormatter}
                                        tick={{
                                            fontSize: 10,      // Font size increased for better visibility
                                            fill: '#FFF',       // White color for the labels
                                            fontWeight: 'bold', // Make the labels bold
                                        }}
                                        tickLine={false}      // Remove tick lines for a cleaner look
                                        axisLine={false}      // Remove the axis line for a clean design
                                        width={20}
                                        domain={[0, 400]}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Bar dataKey="revenue" fill="#FFA500" />
                                </BarChart>
                            </ResponsiveContainer>
                            <p className="text-xs mt-2">Showing result of 2024</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FirstRow;
