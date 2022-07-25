import React, { useContext, useEffect, useState } from 'react';
import { articleDataContext } from '../../App';
import ArticleItem from './ArticleItem';

const RecentArticla = () => {
    const [articles] = useContext(articleDataContext);
    console.log(articles);
    const articleCopy = [...articles];

    return (
        <section className='mid-container'>
            <div className='flex w-full items-center lg:mt-16 md:mt-36 sm:mt-44 mt-16'>
                <h1 className='text-3xl font-bold lg:w-72 w-72 lg:w-72 md:w-96 sm:w-96'>Recent Article</h1>
                <span className='bg-primary h-[2px] w-full article-border'></span>
            </div>
            <p className='text-sm mt-2'>Popular articles are selected based on the number of readers</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mt-10 gap-7 ">
                {
                    articleCopy.reverse().slice(0, 3).map(article => <ArticleItem
                        key={article.id}
                        article={article}
                    ></ArticleItem>)
                }
            </div>
        </section>
    );
};

export default RecentArticla;