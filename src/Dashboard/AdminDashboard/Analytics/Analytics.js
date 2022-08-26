import React, { useContext } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, ComposedChart, CartesianGrid, XAxis, YAxis, Legend, Area, Bar, Line, BarChart } from 'recharts';
import { articleDataContext } from '../../../App';

const Analytics = () => {
    const valueObj = useContext(articleDataContext);
    const { articles, categoryArticle } = valueObj;

    // category value from article data
    const catValue = articles?.map(article => {
        const catValueArray = article?.blogs?.category;
        return catValueArray;

    });
    // unique category value from article data
    // const uniqueCategory = catValue.filter((item, index) => catValue.indexOf(item) === index);
    const uniqueCategory = [...new Set(catValue)];


    const handleFileterArticle = (category) => {
        let filterArticle = articles.filter(article => {
            if (article?.blogs?.category === category) {
                return article;
            }
        })
        return filterArticle;
    }

    const handleCatWiseCount = () => {
        let catWiseCount = 0;
        articles.forEach(article => {
            if (article?.blogs?.category === "Travel") {
                catWiseCount++;
            }
        });
        return catWiseCount;
    }



    // const handleCatWiseCount = () => {
    //     let catWiseCount = {};
    //     articles.forEach(article => {
    //         if (article?.blogs?.category in catWiseCount) {
    //             catWiseCount[article?.blogs?.category] += 1;
    //         } else {
    //             catWiseCount[article?.blogs?.category] = 1;
    //         }
    //     })
    //     return catWiseCount;
    // }

    // likecount function for pie chart
    const handleLikesCount = (callback) => {
        let likeCount = 0;
        callback.forEach(article => {
            likeCount = likeCount + article?.likes?.length;
        });
        return likeCount;
    }
    // commentcount function for compossed chart
    const handleCommentsCount = (callback) => {
        let commentCount = 0;
        callback.forEach(article => {
            commentCount = commentCount + article?.comments?.length;
        })
    }
    // like count
    const travelLikeCount = handleLikesCount(handleFileterArticle('Travel'));
    const fashionLikeCount = handleLikesCount(handleFileterArticle('Fashion'));
    const photographyLikeCount = handleLikesCount(handleFileterArticle('Photography'));
    const foodLikeCount = handleLikesCount(handleFileterArticle('Food'));
    const fitnessLikeCount = handleLikesCount(handleFileterArticle('Fitness'));
    const beautyLikeCount = handleLikesCount(handleFileterArticle('Beauty'));
    const makeupLikeCount = handleLikesCount(handleFileterArticle('Makeup'));
    const sportLikeCount = handleLikesCount(handleFileterArticle('Sport'));
    const entertainmentLikeCount = handleLikesCount(handleFileterArticle('Entertainment'));
    const lifestyleLikeCount = handleLikesCount(handleFileterArticle('LifeStyle'));
    const conceptsLikeCount = handleLikesCount(handleFileterArticle('Concepts'));

    // comment count
    const travelCommentCount = handleCommentsCount(handleFileterArticle('Travel'));
    const fashionCommentCount = handleCommentsCount(handleFileterArticle('Fashion'));
    const photographyCommentCount = handleCommentsCount(handleFileterArticle('Photography'));

    const data = [
        { name: 'Travel', value: travelLikeCount },
        { name: 'Fashion', value: fashionLikeCount },
        { name: 'Photography', value: photographyLikeCount },
        { name: 'Fitness', value: fitnessLikeCount },
        { name: 'Food', value: foodLikeCount },
        { name: 'Beauty', value: beautyLikeCount },
        { name: 'Makeup', value: makeupLikeCount },
        { name: 'Sport', value: sportLikeCount },
        { name: 'Entertainment', value: entertainmentLikeCount },
        { name: 'Lifestyle', value: lifestyleLikeCount },
        { name: 'Concepts', value: conceptsLikeCount },
    ];

    const data1 = [
        { name: 'Travel', value: travelCommentCount, uv: travelCommentCount, pv: 800, amt: 1400 },
        { name: 'Fashion', value: fashionCommentCount, uv: fashionCommentCount, pv: 967, amt: 1506 },
        { name: 'Photography', value: photographyCommentCount, uv: photographyCommentCount, pv: 1098, amt: 989 },
    ];

    const data2 = [
        {
            name: 'Travel',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Photography',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Concepts',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Fitness',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Food',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Sport',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Lifestyle',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF5733', '#CD5C5C', '#DFFF00', '#9FE2BF', '#40E0D0', '#DE3163', '#CCCCFF'];

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
        <div>
            <div className="mid-container flex gap-10" >
                <div className='mt-4 w-1/2 card-body items-center card-compact shadow-lg'>
                    <h5 className='font-bold text-xl text-center'>User Liked</h5>
                    <div style={{ width: '85%', height: 450 }}>
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

                <div className='mt-4 w-1/2 card-body items-center card-compact shadow-lg'>
                    <h4 className='font-bold text-xl'>User Comments</h4>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <ComposedChart
                                width={500}
                                height={400}
                                data={data1}
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

            <div className='mid-container'>
                <div className='mt-4 card-body items-center card-compact shadow-lg'>
                    <h4 className='font-bold text-xl py-4'>Articles Published</h4>
                    <BarChart
                        width={1000}
                        height={300}
                        data={data2}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        {/* <YAxis /> */}
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey="pv" fill="#8884d8" />
                        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                    </BarChart>
                </div>
            </div>

        </div>

    );
};

export default Analytics;
