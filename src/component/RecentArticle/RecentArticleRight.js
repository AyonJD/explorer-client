import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecentArticleRight = ({ article }) => {

    const goToDetails = useNavigate();
    const handleNavigate = () => {
        goToDetails(`/article/${article._id}`);
    };

    return (
        <div
            className='flex items-center gap-2 border-b-[1px] py-3 cursor-pointer'
            onClick={() => handleNavigate(article._id)}>
            <div className='w-[35%]'>
                <img className='w-full h-20' src={article?.blogs?.img} alt={article?.img} />
            </div>
            <div className='w-[65%] p-2'>
                <h2 className='text-sm font-semibold hover:text-[#da334a]'>{article?.blogs?.Title.slice(0, 50)}</h2>
                <p className='text-xs mt-2 font-light'>{article?.blogs?.date}</p>
            </div>
        </div>
    );
};

export default RecentArticleRight;