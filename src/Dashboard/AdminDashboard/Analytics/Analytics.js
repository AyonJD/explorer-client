import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Analytics = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        }
    ];
    const data2 = [
        {
            "month": "MarHalf",
            "sell": 350
        },
        {
            "month": "MarFull",
            "sell": 285
        },
        {
            "month": "AprHalf",
            "sell": 430
        },
        {
            "month": "AprFull",
            "sell": 521
        },
        {
            "month": "MayHalf",
            "sell": 600
        }
    ];

    return (
        <div className="mid-container">
            <div className='mt-4'>
                <h5 className='text-center'>Articles Posted</h5>
                <PieChart width={1000} height={600}>
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data2} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>
            </div>

            {/* <ResponsiveContainer width="100%" height="100%" >
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer > */}
        </div>
    );
};

export default Analytics;
