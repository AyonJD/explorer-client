import React from 'react';
import './About.css'
import banner from '../../assets/about/Shape Design/cta.png'
import MemberCard from './MemberCard';
import Services from './Services';
import Project from './Project';

const About = () => {
    return (
        <div>
            <div className='mid-container'>
                <div className='grid grid-cols-2 mid-container'>
                    <div className='about-banner flex items-center'>
                        <div>

                            <h1 className='text-5xl font-semibold  mt-2'>Who We Are?</h1>
                            <h2 className='font-semibold text-2xl mb-14 mt-5'>Let's work together and <br /> make awesome site easily</h2>
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
                <Services />
            </div>

            <div className='mid-container'>
                <Project />
            </div>
        </div>
    );
};

export default About;