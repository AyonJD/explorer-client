import React from 'react';
import img from "../../assets/banner-img/freelancer.png"

const Banner = () => {
    return (
        <section className=' bg-base-200 '>
            <div className='mid-container relative banner absolute'>
                <div className=' grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 '>
                    <div className='flex justify-center items-center'>
                        <div>
                            <span className='bg-neutral p-2 rounded-xl text-warning border-primary border'><button class="btn btn-xs btn-primary">New</button> Becoming a new Program Online</span>
                            <h1 className='text-5xl font-bold my-5 '>Find the Best Article Online for your Thesis</h1>
                        </div>
                    </div>
                    <div className='flex justify-end items-center'>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="card lg:w-2/5 bg-neutral shadow-xl p-10 absolute lg:bottom-[-60px] md:bottom-[-120px] bottom-[-180px] border-t-8 border-primary border">
                    <div className='grid grid-cols-2 gap-5 text-warning '>
                        <div className='text-center'>
                            <h2 className='text-3xl font-semibold'>2000+</h2>
                            <h2 className='text-sm'>Articles Submitted</h2>
                        </div>
                        <div className='text-center '>
                            <h2 className='text-3xl font-semibold'>150</h2>
                            <h2 className='text-sm'>Category Listed</h2>
                        </div>
                        <div className='text-center'>
                            <h2 className='text-3xl font-semibold'>300+</h2>
                            <h2 className='text-sm'>Articles Contributors</h2>
                        </div>
                        <div className='text-center'>
                            <h2 className='text-3xl font-semibold'>90%</h2>
                            <h2 className='text-sm'>Satisfaction Rate</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;