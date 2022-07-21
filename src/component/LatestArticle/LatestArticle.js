import React from 'react';

const LatestArticle = () => {
    return (
        <div className='mid-container'>
            <div className='flex w-full items-center'>
                <h1 className='text-3xl font-bold lg:w-72 md:w-96 sm:w-96 '>Latest Article</h1>
                <span className='bg-primary h-[2px] w-full article-border'></span>
            </div>
            <p className='text-sm mt-2'>Popular articles are selected based on the number of readers</p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-7 mt-14'>

                <div class="card shadow-xl bg-neutral">
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="blog" /></figure>
                    <div class="card-body text-warning px-5 py-8">
                        <div className='flex justify-between items-center'>
                            <div class="badge bg-primary ">Lifestyle</div>
                            <div className='text-sm'>Jan 24, 2022</div>
                        </div>
                        <h1 className='text-xl font-bold'>The basis of making the correct system</h1>
                        <p className='text-sm'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.</p>
                    </div>
                </div>
                
                <div class="card shadow-xl bg-neutral">
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body text-warning px-5 py-8">
                        <div className='flex justify-between items-center'>
                            <div class="badge bg-primary ">Lifestyle</div>
                            <div className='text-sm'>Jan 24, 2022</div>
                        </div>
                        <h1 className='text-xl font-bold'>The basis of making the correct system</h1>
                        <p className='text-sm'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.</p>
                    </div>
                </div>
                
                <div class="card shadow-xl bg-neutral">
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body text-warning px-5 py-8">
                        <div className='flex justify-between items-center'>
                            <div class="badge bg-primary ">Lifestyle</div>
                            <div className='text-sm'>Jan 24, 2022</div>
                        </div>
                        <h1 className='text-xl font-bold'>The basis of making the correct system</h1>
                        <p className='text-sm'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.</p>
                    </div>
                </div>
                
                <div class="card shadow-xl bg-neutral">
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body text-warning px-5 py-8">
                        <div className='flex justify-between items-center'>
                            <div class="badge bg-primary ">Lifestyle</div>
                            <div className='text-sm'>Jan 24, 2022</div>
                        </div>
                        <h1 className='text-xl font-bold'>The basis of making the correct system</h1>
                        <p className='text-sm'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.</p>
                    </div>
                </div>
                
                <div class="card shadow-xl bg-neutral">
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body text-warning px-5 py-8">
                        <div className='flex justify-between items-center'>
                            <div class="badge bg-primary ">Lifestyle</div>
                            <div className='text-sm'>Jan 24, 2022</div>
                        </div>
                        <h1 className='text-xl font-bold'>The basis of making the correct system</h1>
                        <p className='text-sm'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.</p>
                    </div>
                </div>
                
                <div class="card shadow-xl bg-neutral">
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body text-warning px-5 py-8">
                        <div className='flex justify-between items-center'>
                            <div class="badge bg-primary ">Lifestyle</div>
                            <div className='text-sm'>Jan 24, 2022</div>
                        </div>
                        <h1 className='text-xl font-bold'>The basis of making the correct system</h1>
                        <p className='text-sm'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.</p>
                    </div>
                </div>
                

            </div>
        </div>
    );
};

export default LatestArticle;