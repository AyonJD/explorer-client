import React from 'react';

const RecentArticla = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section className='mid-container'>
            <div className="">
                <h1 className='text-3xl font-bold mt-24'>Recent Article</h1>
                <p className='mt-2'>Recent Article are selected based on the number of readers</p>
            </div>
            <div className="grid grid-cols-3 mt-10 gap-5 ">

                <div class=" bg-neutral shadow-xl ">
                    <figure><img className='w-full rounded-t' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-warning text-sm">
                            {year}
                        </h2>
                        <h1 className='text-2xl font-bold text-warning'>Child's Sensory and Motor, Development</h1>
                        <p className='text-sm text-warning'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.</p>

                        <div className="flex items-center gap-5 mt-5">
                            <div class="avatar ">
                                <div class="w-20 mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                            </div>
                            <div className=" text-warning">
                                <h1 className='font-bold text-xl'>Armin Sultana</h1>
                                <h1 className='text-sm'>Study power CEO</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" bg-neutral shadow-xl ">
                    <figure><img className='w-full rounded-t' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-warning text-sm">
                            {year}
                        </h2>
                        <h1 className='text-2xl font-bold text-warning'>Child's Sensory and Motor, Development</h1>
                        <p className='text-sm text-warning'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.</p>

                        <div className="flex items-center gap-5 mt-5">
                            <div class="avatar ">
                                <div class="w-20 mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                            </div>
                            <div className=" text-warning">
                                <h1 className='font-bold text-xl'>Armin Sultana</h1>
                                <h1 className='text-sm'>Study power CEO</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" bg-neutral shadow-xl ">
                    <figure><img className='w-full rounded-t' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-warning text-sm">
                            {year}
                        </h2>
                        <h1 className='text-2xl font-bold text-warning'>Child's Sensory and Motor, Development</h1>
                        <p className='text-sm text-warning'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.</p>

                        <div className="flex items-center gap-5 mt-5">
                            <div class="avatar ">
                                <div class="w-20 mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                            </div>
                            <div className=" text-warning">
                                <h1 className='font-bold text-xl'>Armin Sultana</h1>
                                <h1 className='text-sm'>Study power CEO</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RecentArticla;