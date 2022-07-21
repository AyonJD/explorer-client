import React from 'react';

const RecentArticla = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section className='mid-container'>
            <div className='flex w-full items-center mt-24'>
                <h1 className='text-3xl font-bold lg:w-60 w-72'>Recent Article</h1>
                <span className='bg-primary h-[2px] w-full '></span>
            </div>
            <p className='text-sm mt-2'>Popular articles are selected based on the number of readers</p>
            <div className="grid grid-cols-3 mt-10 gap-5 ">

                <div className=" bg-neutral shadow-xl rounded">
                    <figure><img className='w-full rounded-t' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body p-5">
                        <p className="text-warning text-sm">
                            {year}
                        </p>
                        <h1 className='text-xl font-bold text-warning'>Child's Sensory and Motor, Development</h1>
                        <p className='text-sm text-warning'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.</p>

                        <div className="flex items-center gap-5 mt-2">
                            <div className="avatar ">
                                <div className="w-12 mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                            </div>
                            <div className=" text-warning">
                                <h1 className='font-bold '>Armin Sultana</h1>
                                <h1 className='text-sm'>Study power CEO</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-neutral shadow-xl rounded">
                    <figure><img className='w-full rounded-t' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body p-5">
                        <h2 className="text-warning text-sm">
                            {year}
                        </h2>
                        <h1 className='text-xl font-bold text-warning'>Child's Sensory and Motor, Development</h1>
                        <p className='text-sm text-warning'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.</p>

                        <div className="flex items-center gap-5 mt-2">
                            <div className="avatar ">
                                <div className="w-12 mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                            </div>
                            <div className=" text-warning">
                                <h1 className='font-bold '>Armin Sultana</h1>
                                <h1 className='text-sm'>Study power CEO</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-neutral shadow-xl rounded">
                    <figure><img className='w-full rounded-t' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body p-5">
                        <h2 className="text-warning text-sm">
                            {year}
                        </h2>
                        <h1 className='text-xl font-bold text-warning'>Child's Sensory and Motor, Development</h1>
                        <p className='text-sm text-warning'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.</p>

                        <div className="flex items-center gap-5 mt-2">
                            <div className="avatar ">
                                <div className="w-12 mt-2 rounded-full ring ring-primary ring-offset-base-100 ">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                            </div>
                            <div className=" text-warning">
                                <h1 className='font-bold '>Armin Sultana</h1>
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