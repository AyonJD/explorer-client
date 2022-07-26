import React, { useContext } from 'react';
import { articleDataContext } from '../../App';
import './PopularArticle.css'
import PopularArticleItem from './PopularArticleItem';

import { RiArrowRightSFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
// RiArrowDropRightFill


const PopularArticle = () => {
    const [articles] = useContext(articleDataContext);
    // console.log(articles);
    const countPoplular = 20;
    const popularArticle = articles.map(element => {
        if (element.popularity > countPoplular) {
            return element
        }
    });
    const popularArticleArr = [];
    popularArticle.forEach(article => {
        if (article) {
            popularArticleArr.push(article);
        }
    });
    // console.log(popularArticleArr);

    const navigate = useNavigate()
    return (
        <div className='mid-container'>
            <div className='flex w-full items-center '>
                <h1 className='text-3xl font-bold  lg:w-72 md:w-96 sm:w-96 '>Popular Article</h1>
                <span className='bg-primary h-[2px] w-full article-border'></span>
            </div>
            <p className='text-sm mt-2'>Popular articles are selected based on the number of readers</p>
            <div className='mt-10 flex'>
                <div className='w-3/4 grid gap-5'>
                    {
                        popularArticleArr.slice(0, 4).map(article => <PopularArticleItem
                            key={article.id}
                            article={article}
                        ></PopularArticleItem>)
                    }
                </div>
                <div className='w-1/4 grid ml-5 gap-5'>
                    <div class="card  bg-base-100 shadow-xl">
                        <div class="card-body p-4">
                            <h2 className='font-bold text-center'> All Category</h2>
                            <ul className='pl-5 text-sm'>
                                <li className='flex'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span> Fashion</li>
                                <li className='flex'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span>Photography</li>
                                <li className='flex'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span> Travel</li>
                                <li className='flex'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span> Fitness</li>
                                <li className='flex'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span> Food</li>
                                <li className='flex'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span> Beauty</li>
                                <li className='flex'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span>Make Up</li>
                                <li className='flex'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span>Sport</li>
                                <li className='flex'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span>Entertainment</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card bg-pink-100 shadow-xl">
                        <div class="card-body p-4">
                            <h2 className=' text-center text-[14px] text-warning '>Join Membership</h2>
                            <h1 className='text-[16px] font-bold text-warning'>Want to access our <br /> premium content?</h1>
                            <p className='text-[12px] text-warning'>Sometimes features require a sort <br /> description.This can be detailed <br /> description </p>
                            <button onClick='/register' class="btn btn-secondary rounded-full text-[14px]">Register Now</button>
                            <button class="btn btn-outline  rounded-full btn-primary">Contact</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PopularArticle;