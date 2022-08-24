import React from 'react';
import project1 from '../../assets/about/Projects/project1.png'
import project2 from '../../assets/about/Projects/project2.png'
import project3 from '../../assets/about/Projects/project3.png'
import project4 from '../../assets/about/Projects/project4.png'
import project5 from '../../assets/about/Projects/project5.png'
import project6 from '../../assets/about/Projects/project6.png'
const Project = () => {
    return (
        <div>
            <div className='text-center'>
                <h6 className='font-extrabold text-xl'>OUR TEAM PROJECTS</h6>
                <h2 className='text-3xl font-semibold mt-2'>Appropriately foster efficient ideas.</h2>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 mt-12'>
                <div className='w-full overflow-hidden shadow-xl rounded-xl card-parent'>
                    <img className='w-full card-image' src={project1} alt="" />
                </div>
                <div className='w-full overflow-hidden shadow-xl rounded-xl card-parent'>
                    <img className='w-full card-image' src={project2} alt="" />
                </div>
                <div className='w-full overflow-hidden shadow-xl rounded-xl card-parent'>
                    <img className='w-full card-image' src={project3} alt="" />
                </div>
                <div className='w-full overflow-hidden shadow-xl rounded-xl card-parent'>
                    <img className='w-full card-image' src={project4} alt="" />
                </div>
                <div className='w-full overflow-hidden shadow-xl rounded-xl card-parent'>
                    <img className='w-full card-image' src={project5} alt="" />
                </div>
                <div className='w-full overflow-hidden shadow-xl rounded-xl card-parent'>
                    <img className='w-full card-image' src={project6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Project;