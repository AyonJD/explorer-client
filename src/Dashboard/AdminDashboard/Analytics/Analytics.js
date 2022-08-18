import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Analytics = () => {
    const data = [
        { name: 'Basic Article', value: 400 },
        { name: 'Travel Article', value: 300 },
        { name: 'Education Article', value: 300 },
        { name: 'Premium Article', value: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    // export default class Example extends PureComponent {
    //     static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';


    return (
        <div className="mid-container" >
            <div className='mt-4'>
                <h5 className='font-bold text-xl'>User Visited</h5>
                <div style={{ width: '100%', height: 450 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                cx={200}
                                cy={200}
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={200}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip></Tooltip>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div >
        </div >
    );
};

export default Analytics;
