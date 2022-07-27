import React from 'react';
import img from "../../assets/banner-img/freelancer.png"
import './Banner.css'

const Banner = () => {
    return (
        <section className=' bg-base-200 '>
            <div className='mid-container'>
                <div className=' relative banner'>
                    <div className=' grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 '>
                        <div className='flex justify-center items-center'>
                            <div className='lg:text-start md:text-start sm:text-center text-center pt-12'>
                                <span className='bg-neutral p-2 rounded-xl text-warning border-primary border'><button className="btn btn-xs btn-primary">New</button> Becoming a new Program Online</span>
                                <h1 className='lg:text-5xl md:text-5xl sm:text-5xl text-3xl font-bold my-5 '>Find the Best Article Online for your Thesis</h1>
                                <p className='text-sm lg:hidden md:hidden'>The right source of knowledge can be powerful professional growth, dark up right three</p>
                            </div>
                        </div>
                        <div className='flex justify-end items-center'>
                            <img src={img} alt="" />
                        </div>
                    </div>

                    <div className="card lg:w-2/5 md:w-[400px] w-full bg-neutral shadow-xl lg:p-10 md:p-10 sm:p-10 p-5 absolute border-t-8  border-primary border absolute-card">
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
            </div>
        </section>
    );
};

export default Banner;


// lg:bottom-[-60px] md:bottom-[-80px] sm:bottom-[-50px] bottom-[-50px] border-t-8