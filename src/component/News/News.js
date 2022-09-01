import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import getAllArticles from '../../source/actions/articlesAction';
import NewsItems from './NewsItems';

const News = () => {

    const articles = useSelector((state) => state.articles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllArticles())
    }, [dispatch]);


    return (
        <div className='mid-container'>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-5'>
                {
                    articles.slice(8, 12).map(article => <NewsItems
                        key={article.id}
                        article={article}
                    />)
                }
            </div>
        </div>
    );
};

export default News;