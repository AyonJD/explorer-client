import React from 'react';
import './About.css'
import banner from '../../assets/About Page/Shape Design/cta.png'

const About = () => {
    return (
        <div className='mid-container'>
            <div className='grid grid-cols-2'>
                <div className='about-banner flex items-center'>
                    <div>
                        <h2 className='font-semibold text-2xl'>What's Your SEO Score</h2>
                        <h1 className='text-5xl font-semibold mb-14 mt-2'>SEO Services Provide <br /> For Your Agency</h1>
                        <button className='start-btn'>Let's Start</button>
                        <button className='contact-btn'>Contact Now</button>
                    </div>
                </div>
                <div className=' flex items-center justify-center'>
                    <img src={banner} alt="" />
                </div>
            </div>


            <div>
                <div className='icon-box'>
                    <h2>01</h2>
                </div>
            </div>
        </div>
    );
};

export default About;