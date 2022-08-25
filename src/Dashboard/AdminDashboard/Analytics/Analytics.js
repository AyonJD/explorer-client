import React, { useContext } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, ComposedChart, CartesianGrid, XAxis, YAxis, Legend, Area, Bar, Line } from 'recharts';
import { articleDataContext } from '../../../App';

const Analytics = () => {
    const valueObj = useContext(articleDataContext);
    const { articles, categoryArticle } = valueObj;

    const handleFileterArticle = (category) => {
        let filterArticle = articles.filter(article => {
            if (article?.blogs?.category === category) {
                return article;
            }
        })
        return filterArticle;
    }
    // console.log(filterArticle);
    const handleLikesCount = (callback) => {
        let likeCount = 0;
        callback.forEach(article => {
            likeCount = likeCount + article?.likes?.length;
        });
        return likeCount;
    }
    const travelLikeCount = handleLikesCount(handleFileterArticle('Travel'));
    const fashionLikeCount = handleLikesCount(handleFileterArticle('Fashion'));

    const data = [
        { name: 'Travel Article', value: travelLikeCount, uv: 590, pv: 800, amt: 1400 },
        { name: 'Fashion Article', value: fashionLikeCount, uv: 868, pv: 967, amt: 1506 },
        { name: 'Education Article', value: 300, uv: 1397, pv: 1098, amt: 989 },
        { name: 'Premium Article', value: 200, uv: 1480, pv: 1200, amt: 1228 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${100}%`}
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

            <div className='mt-4'>
                <h4 className='font-bold text-xl'>User Liked</h4>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <ComposedChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="name" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div >
    );
};

export default Analytics;
