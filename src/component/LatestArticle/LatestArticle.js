import React, { useContext } from 'react';
import { articleDataContext } from '../../App';
import LatestArticleItem from './LatestArticleItem';

const LatestArticle = () => {
    const valueObj = useContext(articleDataContext);

    return (
        <div className='mid-container'>
            <div className='flex w-full items-center'>
                <h1 className='text-3xl font-bold lg:w-72 md:w-96 sm:w-96 '>Premium Article</h1>
                <span className='bg-primary h-[2px] w-full article-border'></span>
            </div>
            <p className='text-sm mt-2'>Popular articles are selected based on the number of readers</p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-7 mt-14'>

                {
                    valueObj.articles.slice(0, 3).map(article => <LatestArticleItem
                        key={article._id}
                        article={article}
                    ></LatestArticleItem>)
                }
            </div>
        </div>
    );
};

export default LatestArticle;