import React, { useContext, useEffect } from 'react';
import { articleDataContext } from '../../App';
import SearchCategoryItems from './SearchCategoryItems';

const SearchCategory = () => {
    const valueObj = useContext(articleDataContext);
    const { articles, categoryArticle } = valueObj;

    // console.log(categoryArticle)

    let filterArticle = articles.filter(article => {
        if (article?.blogs?.category === categoryArticle) {
            return article
        }
    })

    console.log(filterArticle);

    return (
        <div className='mid-container'>
            <div className=" grid grid-cols-3 gap-5 ">
                {
                    filterArticle.map((article) =>
                        <SearchCategoryItems
                            article={article}
                        />)
                }
            </div>
        </div>
    );
};

export default SearchCategory;