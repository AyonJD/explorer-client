import React, { useContext } from 'react';
import { articleDataContext } from '../../App';
import ArticleItem from './ArticleItem';
import RecentArticleItems from './RecentArticleItems';

const RecentArticla = () => {
    const valueObj = useContext(articleDataContext);
    const { articles } = valueObj;
    const articleCopy = [...articles];

    return (
        <section className='mid-container'>
            <div className='flex w-full items-center lg:mt-16 md:mt-36 sm:mt-44 mt-16'>
                <h1 className='text-3xl font-bold lg:w-72 w-72 md:w-96 sm:w-96'>Recent Article</h1>
                <span className='bg-primary h-[2px] w-full article-border'></span>
            </div>
            <p className='text-sm mt-2'>Recent articles are selected based on update published</p>
            <div className="mt-10 lg:flex md:flex">
                <div className='lg:w-[70%]'>
                    <div className=" grid grid-cols-2 gap-7 lg:mb-0 md:mb-0 sm:mb-5 mb-5">
                        {articles.slice(0, 2).map((article) => (
                            <ArticleItem
                                key={article._id}
                                article={article}
                            ></ArticleItem>
                        ))}
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-2">
                        {articles.slice(0, 6).map((article) => (
                            <RecentArticleItems
                                key={article._id}
                                article={article}
                            ></RecentArticleItems>
                        ))}
                    </div>
                </div>
                <div className="lg:w-[30%] grid  ml-5 gap-5">

                </div>
            </div>
        </section>
    );
};

export default RecentArticla;