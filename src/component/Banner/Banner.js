import React from 'react';
import img from "../../assets/banner-img/bored.png"

const Banner = () => {
    return (
        <section className='mid-container relative banner absolute '>
            <div className=' grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                <div className='flex justify-center items-center'>
                    <div>
                        <span className='bg-neutral p-2 rounded-2xl text-warning'><button class="btn btn-xs btn-primary">Tiny</button> Becoming a new program online</span>
                        <h1 className='text-5xl font-bold my-5'>Find the Best Article
                            Online for your Thesis</h1>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
            <div class="card lg:w-1/4 bg-neutral shadow-xl p-10 absolute lg:bottom-[-50px] bottom-[-180px] border-t-8 border-primary border">
                <div className='grid grid-cols-2 gap-5 text-warning font-semibold'>
                    <div className='text-center'>
                        <h2 className='text-3xl'>2000+</h2>
                        <h2>Articles Submitted</h2>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-3xl'>150</h2>
                        <h2>Category Listed</h2>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-3xl'>300+</h2>
                        <h2>Articles Contributors</h2>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-3xl'>90%</h2>
                        <h2>Satisfaction Rate</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;