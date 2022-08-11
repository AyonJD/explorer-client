import React, { useContext, useState } from 'react';
import { articleDataContext } from '../../App';
import PremiumArticleItem from './PremiumArticleItem';

const PremiumArticles = () => {
    const valueObj = useContext(articleDataContext);
    const { articles } = valueObj;
    // console.log(articles)
    const premiumArticles = articles.filter(premiumArticle => {
        if (premiumArticle?.blogs?.premium === "Premium") {
            return premiumArticle;
        }
    });
    // console.log(premiumArticles);
    const [noOfPremiumArticles, setnoOfPremiumArticles] = useState(3);
    const slicePremiumArticles = premiumArticles.slice(0, noOfPremiumArticles)
    const loadMorePremiumArticles = () => {
        setnoOfPremiumArticles(noOfPremiumArticles + noOfPremiumArticles);
    };
    const [show, setShow] = useState(false);
    return (
        <div className='mid-container'>
            <div className='flex w-full items-center'>
                <h1 className='text-3xl font-bold lg:w-72 md:w-96 sm:w-96 '>Premium Article</h1>
                <span className='bg-primary h-[2px] w-full article-border'></span>
            </div>
            <p className='text-sm mt-2'>Popular articles are selected based on the number of readers</p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-7 mt-14'>

                {
                    slicePremiumArticles.map(article => <PremiumArticleItem
                        key={article._id}
                        article={article}
                    ></PremiumArticleItem>)

                }
            </div>
            <div className='flex lg:justify-end md:justify-center sm:justify-center pt-3'>
                <button className='btn btn-md rounded-xl text-white register-btn btn-primary mt-2' onClick={() => loadMorePremiumArticles()}>Show More...</button>
            </div>
        </div >
    );
};

export default PremiumArticles;