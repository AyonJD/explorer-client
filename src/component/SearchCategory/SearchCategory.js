import React, { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { articleDataContext } from '../../App';
import SearchCategoryItems from './SearchCategoryItems';

const SearchCategory = () => {
    const valueObj = useContext(articleDataContext);
    const { articles, categoryArticle, searchValue } = valueObj;
    const navigate = useNavigate()

    // console.log(categoryArticle)


    let filterArticle = articles.filter(article => {
        if (article?.blogs?.category === categoryArticle) {
            return article
        }
    })


    let filterSearch = articles.filter(article => {
        if (article?.blogs?.category?.toLowerCase().includes(searchValue?.toLowerCase()) || article?.blogs?.Title?.toLowerCase().includes(searchValue?.toLowerCase())) {
            return article
        }
        // else {
        //     // toast.error('No Article Found')
        //     navigate("/")
        //     return null
        // }
    })


    // console.log(filterSearch);

    return (
        <div className='mid-container'>
            <div className=" grid grid-cols-3 gap-5 ">
                {
                    categoryArticle && categoryArticle?.length !== 0 ? (filterArticle.map((article) =>
                        <SearchCategoryItems
                            article={article}
                        />)) : (filterSearch.map((article) =>
                            <SearchCategoryItems
                                article={article}
                            />))
                }
            </div>
        </div>
    );
};

export default SearchCategory;