import React, { useContext, useState } from 'react';
import { articleDataContext } from '../../App';
import PremiumArticleItem from './PremiumArticleItem';

const PremiumArticles = () => {
    const valueObj = useContext(articleDataContext);
    const { articles } = valueObj;
    // console.log(articles)
    const premiumArticles = articles.filter(premiumArticle => {
        console.log(premiumArticle)
        if (premiumArticle?.blogs?.premium === "Premium" || premiumArticle?.signedInUser?.admin === true) {
            return premiumArticle;
        }
    });
    // console.log(premiumArticles);
    const [noOfPremiumArticles, setnoOfPremiumArticles] = useState(3);
    const slicePremiumArticles = premiumArticles.slice(0, noOfPremiumArticles)
    const loadMorePremiumArticles = () => {
        setnoOfPremiumArticles(noOfPremiumArticles + noOfPremiumArticles);
    }

    return (
        <div className='mid-container'>
            <div className='flex w-full items-center border-b-[1px] pb-3 mb-7'>
                <h1 className='text-2xl font-semibold '>Premium Article</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-7 mt-5'>

                {
                    slicePremiumArticles.map(article => <PremiumArticleItem
                        key={article._id}
                        article={article}
                    ></PremiumArticleItem>)

                }
            </div>
            <div className='flex lg:justify-end md:justify-center sm:justify-center pt-3'>
                <button className='btn btn-md rounded-xl text-white btn-primary mt-2' onClick={() => loadMorePremiumArticles()}>Show More...</button>
            </div>
        </div >
    );
};

export default PremiumArticles;