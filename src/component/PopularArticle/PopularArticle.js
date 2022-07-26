import React, { useContext } from 'react';
import { articleDataContext } from '../../App';
import './PopularArticle.css'
import PopularArticleItem from './PopularArticleItem';

const PopularArticle = () => {
    const [articles] = useContext(articleDataContext);
    // console.log(articles);
    const countPoplular = 20;
    const popularArticle = articles.map(element=> {
        if (element.popularity > countPoplular) {
            return element
        }
    });
    const popularArticleArr = [];
    popularArticle.forEach(article => {
        if (article) {
            popularArticleArr.push(article);
        }
    });
    // console.log(popularArticleArr);

    return (
        <div className='mid-container'>
            <div className='flex w-full items-center '>
                <h1 className='text-3xl font-bold  lg:w-72 md:w-96 sm:w-96 '>Popular Article</h1>
                <span className='bg-primary h-[2px] w-full article-border'></span>
            </div>
            <p className='text-sm mt-2'>Popular articles are selected based on the number of readers</p>
            <div className='mt-10'>
                {
                    popularArticleArr.slice(0, 4).map(article => <PopularArticleItem
                        key={article.id}
                        article={article}
                    ></PopularArticleItem>)
                }
            </div>
        </div>
    );
};

export default PopularArticle;