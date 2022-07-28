import React from 'react';
import img1 from '../../assets/blog-img/news-1.jpg'


const PopularArticleItem = ({ article }) => {
    // console.log(article);
    return (
        <div>
            <div className="hero border rounded-2xl">
                <div className="hero-content grid lg:grid-cols-2 md:grid-cols-2 ">

                    <div className='p-3 flex items-center'>
                        <div>
                            <p className='text-sm'>Jan 24, 2022</p>
                            <h1 className='text-xl font-bold my-2'>{article.Title}</h1>
                            <p className='text-sm'>{article.desc.slice(0, 150)}...</p>
                            <div className='flex gap-5 items-center mt-5'>
                                <div className="avatar">
                                    <div className="lg:w-12 md:w-14 sm:w-16 w-14 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" alt='' />
                                    </div>
                                </div>
                                <div>
                                    <h2 className='font-semibold '>{article.author}</h2>
                                    <p className='text-sm'>Study Power CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div><img src={img1} className="lg:max-w-md md:max-w-sm w-full  rounded-lg shadow-2xl" alt='' /></div>
                </div>
            </div>
        </div>
    );
};

export default PopularArticleItem;