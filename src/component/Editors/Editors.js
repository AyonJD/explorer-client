import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import getAllArticles from '../../source/actions/articlesAction';
import EditorItems from './EditorItems';

const Editors = () => {

    const articles = useSelector((state) => state.articles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllArticles())
    }, [dispatch]);


    return (
        <div className='mid-container'>
            <h1 className='text-2xl font-semibold border-b-[1px] pb-3 mb-5'>Editor's Picks</h1>
            <div className='grid md:grid-cols-3 grid-cols-2 gap-5'>
                {
                    articles.slice(25, 31).map(article => <EditorItems
                        key={article.id}
                        article={article}
                    />)
                }
            </div>
        </div>
    );
};

export default Editors;