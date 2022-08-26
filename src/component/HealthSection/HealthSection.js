import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import getAllArticles from '../../source/actions/articlesAction';
import HealthSectionItem from './HealthSectionItem';

const HealthSection = () => {
    const [healthArticle, setHealthArticles] = useState([]);
    const articles = useSelector((state) => state.articles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllArticles())
    }, [dispatch]);

    // console.log(articles)

    const healthArticles = articles.filter(article => article.blogs.category === "Health");
    console.log(healthArticles)

    return (
        <div className="mid-container">
            <div className='flex w-full items-center border-b-[1px] pb-3 mb-5'>
                <h1 className='text-2xl font-semibold '>Healthy Living</h1>
            </div>
            <div className="mt-5 grid md:grid-cols-2 md:gap-10">
                <div className=" lg:mb-0 md:mb-0 sm:mb-5 mb-5">
                    {healthArticles.slice(0, 4).map((article) => (
                        <HealthSectionItem
                            key={article._id}
                            article={article}
                        ></HealthSectionItem>
                    ))}
                </div>
                <div className=" lg:mb-0 md:mb-0 sm:mb-5 mb-5">
                    {healthArticles.slice(4, 10).map((article) => (
                        <HealthSectionItem
                            key={article._id}
                            article={article}
                        ></HealthSectionItem>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HealthSection;