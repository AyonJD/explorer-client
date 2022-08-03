import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllArticleItemsRight = ({article}) => {

    const goToDetails = useNavigate();
    const handleNavigate = () => {
        goToDetails(`/article/${article._id}`);
    };

    return (
        <div
        className='flex items-center gap-3 border-b-[1px] pb-3'
        onClick={() => handleNavigate(article._id)}>
        <div className='w-[35%] h-20 overflow-hidden'>
            <img className='w-full h-full' src={article?.img} alt={article?.img} />
        </div>
        <div className='w-[65%] p-2'>
            <h2 className='text-sm font-semibold'>{article?.Title?.slice(0, 50)}</h2>
            <p className='text-xs mt-2 font-light'>January 10, 2021</p>
        </div>
    </div>
    );
};

export default AllArticleItemsRight;