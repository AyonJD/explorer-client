import React from 'react';
import img1 from '../../assets/blog-img/news-1.jpg'
import './PopularArticle.css'

import {RiArrowRightSFill } from 'react-icons/ri';
// RiArrowDropRightFill


const PopularArticle = () => {
    return (
        <div className='mid-container'>
            <div className='flex w-full items-center '>
                <h1 className='text-3xl font-bold  lg:w-72 md:w-96 sm:w-96 '>Popular Article</h1>
                <span className='bg-primary h-[2px] w-full article-border'></span>
            </div>
            <p className='text-sm mt-2'>Popular articles are selected based on the number of readers</p>

            <div className='mt-10 flex w-full'>

                <div class="hero border rounded-2xl w-2/3 ">
                    <div class="hero-content grid lg:grid-cols-2 md:grid-cols-2 ">
                        <div><img src={img1} class="lg:max-w-md md:max-w-sm w-full  rounded-lg shadow-2xl" alt='' /></div>
                        <div className='p-3 flex items-center'>
                            <div>
                                <p className='text-sm'>Jan 24, 2022</p>
                                <h1 className='text-xl font-bold my-2'>Stimulation Child's Sensory and Motor Development</h1>
                                <p className='text-sm'>The objective of this study is to assess the findings of selected articles regarding the therapeutic...</p>
                                <div className='flex gap-5 items-center mt-5'>
                                    <div className="avatar">
                                        <div className="lg:w-12 md:w-14 sm:w-16 w-14 rounded-full">
                                            <img src="https://placeimg.com/192/192/people" alt='' />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className='font-semibold '>Bithika Abhedancada</h2>
                                        <p className='text-sm'>Study Power CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div class="card w-52  bg-base-100 shadow-xl ml-5  ">
                        <div class="card-body ">
                            <h2 className='font-bold text-center'>. All Category</h2>
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
                </div>

            </div>
            <div className='mt-10 flex w-full'>

                <div class="hero border rounded-2xl w-2/3 ">
                    <div class="hero-content grid lg:grid-cols-2 md:grid-cols-2 ">
                        <div><img src={img1} class="lg:max-w-md md:max-w-sm w-full  rounded-lg shadow-2xl" alt='' /></div>
                        <div className='p-3 flex items-center'>
                            <div>
                                <p className='text-sm'>Jan 24, 2022</p>
                                <h1 className='text-xl font-bold my-2'>Stimulation Child's Sensory and Motor Development</h1>
                                <p className='text-sm'>The objective of this study is to assess the findings of selected articles regarding the therapeutic...</p>
                                <div className='flex gap-5 items-center mt-5'>
                                    <div className="avatar">
                                        <div className="lg:w-12 md:w-14 sm:w-16 w-14 rounded-full">
                                            <img src="https://placeimg.com/192/192/people" alt='' />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className='font-semibold '>Bithika Abhedancada</h2>
                                        <p className='text-sm'>Study Power CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div class="card w-52  bg-pink-100 shadow-xl ml-5  ">
                        <div class="card-body p-4 ml-3 ">
                            <h2 className=' text-center text-[14px] text-warning '>Join Membership</h2>
                            <h1 className='text-[16px] font-bold text-warning'>Want to access our <br /> premium content?</h1>
                            <p className='text-[12px] text-warning'>Sometimes features require a sort <br /> description.This can be detailed <br /> description </p>
                            <button class="btn btn-secondary rounded-full text-[14px]">Register Now</button>
                            <button class="btn btn-outline  rounded-full btn-primary">Contact</button>
                           
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PopularArticle;