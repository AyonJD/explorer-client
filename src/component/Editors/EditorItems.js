import React from 'react';

const EditorItems = ({ article }) => {
    return (


        <div class="card bg-base-100 rounded-none">
            <div className='w-full sm:h-52 h-32'>
                <img className='h-full w-full rounded-none' src={article?.blogs?.img} alt={article.title} />
            </div>
            <div class="card-body px-0 py-3">
                <div class="badge badge-accent ">{article?.blogs?.category}</div>
                <h2 className='font-semibold'>{article?.blogs?.Title}</h2>
                <p className='text-xs'>{article?.blogs?.date}</p>
            </div>
        </div>
    );
};

export default EditorItems;