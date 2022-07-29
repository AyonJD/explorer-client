import React from 'react';

const LatestArticleItem = ({ article }) => {
    return (
        <div className="card shadow-xl bg-neutral">
            <figure><img className='w-full' src={article.img} alt="blog" /></figure>
            <div className="card-body text-warning px-5 py-8">
                <div className='flex justify-between items-center'>
                    <div className="badge bg-primary ">Lifestyle</div>
                    <div className='text-sm'>Jan 24, 2022</div>
                </div>
                <h1 className='text-xl font-bold'>{article.Title}</h1>
                <p className='text-sm'>{article?.desc?.slice(0, 100)}...</p>
            </div>
        </div>
    );
};

export default LatestArticleItem;