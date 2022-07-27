import React from 'react';
import img1 from '../../assets/blog-img/news-1.jpg'
import './PopularArticle.css'

const PopularArticle = () => {
    return (
        <div className='mid-container'>
            <div className='flex w-full items-center '>
                <h1 className='text-3xl font-bold  lg:w-72 md:w-96 sm:w-96 '>Popular Article</h1>
                <span className='bg-primary h-[2px] w-full article-border'></span>
            </div>
            <p className='text-sm mt-2'>Popular articles are selected based on the number of readers</p>

            <div className='mt-10'>

                <div className="hero border rounded-2xl mb-5">
                    <div className="hero-content grid lg:grid-cols-2 md:grid-cols-2 ">
                        <div><img src={img1} className="lg:max-w-md md:max-w-sm w-full  rounded-lg shadow-2xl" alt='' /></div>
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
                <div className="hero border rounded-2xl mb-5">
                    <div className="hero-content grid lg:grid-cols-2 md:grid-cols-2 ">
                        <div><img src={img1} className="lg:max-w-md md:max-w-sm w-full  rounded-lg shadow-2xl" alt='' /></div>
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
                <div className="hero border rounded-2xl mb-5">
                    <div className="hero-content grid lg:grid-cols-2 md:grid-cols-2 ">
                        <div><img src={img1} className="lg:max-w-md md:max-w-sm w-full  rounded-lg shadow-2xl" alt='' /></div>
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
                <div className="hero border rounded-2xl ">
                    <div className="hero-content grid lg:grid-cols-2 md:grid-cols-2 ">
                        <div><img src={img1} className="lg:max-w-md md:max-w-sm w-full  rounded-lg shadow-2xl" alt='' /></div>
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

            </div>
        </div>
    );
};

export default PopularArticle;