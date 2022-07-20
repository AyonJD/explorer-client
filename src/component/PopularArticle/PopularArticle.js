import React from 'react';
import img1 from '../../assets/blog-img/news-1.jpg'

const PopularArticle = () => {
    return (
        <div className='mid-container'>
            <div className='flex w-full items-center'>
                <h1 className='text-3xl font-bold lg:w-72 w-72'>Popular Article</h1>
                <span className='bg-primary h-[2px] w-full '></span>
            </div>
            <p className='text-sm mt-2'>Popular articles are selected based on the number of readers</p>

            <div className='mt-10'>

                <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-2 gap-5 border mb-8">
                    <figure className='w-full'><img className='w-full' src={img1} alt="Album" /></figure>
                    <div className='p-5 flex items-center'>
                        <div>
                            <p className='text-sm'>Jan 24, 2022</p>
                            <h1 className='text-xl font-bold my-2'>Stimulation Child's Sensory and Motor Development</h1>
                            <p className='text-sm'>The objective of this study is to assess the findings of selected articles regarding the therapeutic...</p>
                            <div className='flex gap-5 items-center mt-5'>
                                <div className="avatar">
                                    <div className="lg:w-12 md:w-10 sm:w-10 rounded-full">
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

                <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-2 gap-5 border mb-8">
                    <figure className='w-full'><img className='w-full' src={img1} alt="Album" /></figure>
                    <div className='p-5 flex items-center'>
                        <div>
                            <p className='text-sm'>Jan 24, 2022</p>
                            <h1 className='text-xl font-bold my-2'>Stimulation Child's Sensory and Motor Development</h1>
                            <p className='text-sm'>The objective of this study is to assess the findings of selected articles regarding the therapeutic...</p>
                            <div className='flex gap-5 items-center mt-5'>
                                <div className="avatar">
                                    <div className="lg:w-12 md:w-10 sm:w-10 rounded-full">
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
                <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-2 gap-5  border mb-8">
                    <figure className='w-full'><img className='w-full' src={img1} alt="Album" /></figure>
                    <div className='p-5 flex items-center'>
                        <div>
                            <p className='text-sm'>Jan 24, 2022</p>
                            <h1 className='text-xl font-bold my-2'>Stimulation Child's Sensory and Motor Development</h1>
                            <p className='text-sm'>The objective of this study is to assess the findings of selected articles regarding the therapeutic...</p>
                            <div className='flex gap-5 items-center mt-5'>
                                <div className="avatar">
                                    <div className="lg:w-12 md:w-10 sm:w-10 rounded-full">
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
                <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-2 gap-5  border ">
                    <figure className='w-full'><img className='w-full' src={img1} alt="Album" /></figure>
                    <div className='p-5 flex items-center'>
                        <div>
                            <p className='text-sm'>Jan 24, 2022</p>
                            <h1 className='text-xl font-bold my-2'>Stimulation Child's Sensory and Motor Development</h1>
                            <p className='text-sm'>The objective of this study is to assess the findings of selected articles regarding the therapeutic...</p>
                            <div className='flex gap-5 items-center mt-5'>
                                <div className="avatar">
                                    <div className="lg:w-12 md:w-10 sm:w-10 rounded-full">
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
    );
};

export default PopularArticle;