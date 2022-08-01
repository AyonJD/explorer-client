import React, { useContext } from 'react';
import { articleDataContext } from '../../App';
import ArticleItem from './ArticleItem';
import RecentArticleItems from './RecentArticleItems';
import RecentArticleRight from './RecentArticleRight';
import { ImFacebook } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { RiLinkedinFill } from 'react-icons/ri';

const RecentArticla = () => {
    const valueObj = useContext(articleDataContext);
    const { articles } = valueObj;
    const articleCopy = [...articles];

    return (
        <section className='mid-container'>
            <div className='flex w-full items-center lg:mt-16 md:mt-36 sm:mt-44 mt-16'>
                <h1 className='text-3xl font-bold lg:w-72 w-72 md:w-96 sm:w-96'>Recent Article</h1>
                <span className='bg-primary h-[2px] w-full article-border'></span>
            </div>
            <p className='text-sm mt-2'>Recent articles are selected based on update published</p>
            <div className="mt-10 lg:flex md:flex">
                <div className='lg:w-[70%] lg:pr-10 md:pr-5 lg:py-5 md:py-5 lg:border-r-[1px] md:border-r-[1px]'>
                    <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-7 lg:mb-0 md:mb-0 sm:mb-5 mb-5">
                        {articles.slice(3, 5).map((article) => (
                            <ArticleItem
                                key={article._id}
                                article={article}
                            ></ArticleItem>
                        ))}
                    </div>

                    <div className="mt-5 grid lg:grid-cols-2 md:grid-cols-2 gap-x-7 gap-y-4">
                        {articles.slice(0, 6).map((article) => (
                            <RecentArticleItems
                                key={article._id}
                                article={article}
                            ></RecentArticleItems>
                        ))}
                    </div>
                </div>
                <div className="lg:w-[30%] grid  lg:ml-5 md:ml-5 mt-10 lg:mt-0 md:mt-0">
                    <div>
                        <h2 className='bg-black text-white py-2 pl-3 rounded'>OUR PICKS</h2>
                    </div>
                    <div className=" grid">
                        {articles.slice(0, 4).map((article) => (
                            <RecentArticleRight
                                key={article._id}
                                article={article}
                            ></RecentArticleRight>
                        ))}
                    </div>
                    <div className='mt-3 grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-x-5'>
                        <div className=' flex items-center justify-between bg-[#1a6dd4] rounded pr-3 mb-3'>
                            <span className='font-bold text-white h-10 w-10 bg-[#1865c5] flex items-center rounded justify-center'><ImFacebook /></span>
                            <h2 className='font-semibold text-white'>Facebook</h2>
                            <h3 className='font-bold text-white'>12.1K</h3>
                        </div>
                        <div className=' flex items-center justify-between bg-[#55acef] rounded pr-3 mb-3'>
                            <span className='font-bold text-white h-10 w-10 bg-[#4fa0de] flex items-center rounded justify-center'><FaTwitter /></span>
                            <h2 className='font-semibold text-white'>Twitter</h2>
                            <h3 className='font-bold text-white'>68.9K</h3>
                        </div>
                        <div className=' flex items-center justify-between bg-[#c13584] rounded pr-3 mb-3'>
                            <span className='font-bold text-white h-10 w-10 bg-[#b3317b] flex items-center rounded justify-center'><GrInstagram /></span>
                            <h2 className='font-semibold text-white'>Instagram</h2>
                            <h3 className='font-bold text-white'>46.4K</h3>
                        </div>
                        <div className=' flex items-center justify-between bg-[#e4223e] rounded pr-3 mb-3'>
                            <span className='font-bold text-white h-10 w-10 bg-[#d4203a] flex items-center rounded justify-center'><RiLinkedinFill /></span>
                            <h2 className='font-semibold text-white'>LinkedIn</h2>
                            <h3 className='font-bold text-white'>17.6K</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentArticla;