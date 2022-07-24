import React from 'react';

const ArticleItem = ({ article, year }) => {
    return (
        <div className=" bg-neutral shadow-xl rounded">
            <figure><img className='w-full rounded-t' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body p-5">
                <p className="text-warning text-sm">
                    {year}
                </p>
                <h1 className='text-xl font-bold text-warning md:h-24'>{article.Title}</h1>
                <p className='text-sm text-warning' title={article.desc}>{article.desc.slice(0, 150)}...</p>

                <div className="flex items-center gap-5 mt-2 pb-3">
                    <div className="avatar ">
                        <div className="w-12 mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
                            <img src="https://placeimg.com/192/192/people" alt='' />
                        </div>
                    </div>
                    <div className="text-warning">
                        <h1 className='font-bold '>{article.author}</h1>
                        <h1 className='text-sm'>Study power CEO</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleItem;