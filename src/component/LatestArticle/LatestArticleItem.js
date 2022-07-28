import React from 'react';

const LatestArticleItem = ({ article }) => {
    return (
        <div class="card shadow-xl bg-neutral">
            <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="blog" /></figure>
            <div class="card-body text-warning px-5 py-8">
                <div className='flex justify-between items-center'>
                    <div class="badge bg-primary ">Lifestyle</div>
                    <div className='text-sm'>Jan 24, 2022</div>
                </div>
                <h1 className='text-xl font-bold'>{article.Title}</h1>
                <p className='text-sm'>{article.desc}...</p>
            </div>
        </div>
    );
};

export default LatestArticleItem;