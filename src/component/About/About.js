import React from 'react';
import './About.css'
import banner from '../../assets/About Page/Shape Design/cta.png'
import MemberCard from './MemberCard';
import Services from './Services';

const About = () => {
    return (
        <div>
            <div className='mid-container'>
                <div className='grid grid-cols-2 mid-container'>
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
            </div>

            <div className='mid-container'>
                <MemberCard />
            </div>

            <div className='mid-container'>
                <Services/>
            </div>
        </div>
    );
};

export default About;