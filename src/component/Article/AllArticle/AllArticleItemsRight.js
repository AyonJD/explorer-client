import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllArticleItemsRight = ({ article }) => {

    const goToDetails = useNavigate();
    const handleNavigate = () => {
        goToDetails(`/article/${article._id}`);
    };

    return (
        <>
            <div
                className='flex items-center gap-1 '
                onClick={() => handleNavigate(article._id)}>
                <div className='w-[35%] h-16 overflow-hidden'>
                    <img className='w-full h-full' src={article?.blogs?.img} alt={article?.blogs?.Title} />
                </div>
                <div className='w-[65%] p-2'>
                    <h2 className='text-sm font-semibold'>{article?.blogs?.Title?.slice(0, 50)}</h2>
                    <p className='text-xs mt-2 font-light'>{article?.blogs?.date}</p>
                </div>
            </div>
            <hr />
        </>
    );
};

export default AllArticleItemsRight;