import React from 'react';
import { ImFacebook } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { RiLinkedinFill } from 'react-icons/ri';

const SocialLinked = () => {
    return (
        <div className='mt-3 grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-x-5'>
            <div className=' flex items-center justify-between bg-[#1a6dd4] rounded pr-3 mb-3 cursor-pointer'>
                <span className='font-bold text-white h-10 w-10 bg-[#1865c5] flex items-center rounded justify-center'><ImFacebook /></span>
                <h2 className='font-semibold text-white'>Facebook</h2>
                <h3 className='font-bold text-white'>12.1K</h3>
            </div>
            <div className=' flex items-center justify-between bg-[#55acef] rounded pr-3 mb-3 cursor-pointer'>
                <span className='font-bold text-white h-10 w-10 bg-[#4fa0de] flex items-center rounded justify-center'><FaTwitter /></span>
                <h2 className='font-semibold text-white'>Twitter</h2>
                <h3 className='font-bold text-white'>68.9K</h3>
            </div>
            <div className=' flex items-center justify-between bg-[#c13584] rounded pr-3 mb-3 cursor-pointer'>
                <span className='font-bold text-white h-10 w-10 bg-[#b3317b] flex items-center rounded justify-center'><GrInstagram /></span>
                <h2 className='font-semibold text-white'>Instagram</h2>
                <h3 className='font-bold text-white'>46.4K</h3>
            </div>
            <div className=' flex items-center justify-between bg-[#e4223e] rounded pr-3 mb-3 cursor-pointer'>
                <span className='font-bold text-white h-10 w-10 bg-[#d4203a] flex items-center rounded justify-center'><RiLinkedinFill /></span>
                <h2 className='font-semibold text-white'>LinkedIn</h2>
                <h3 className='font-bold text-white'>17.6K</h3>
            </div>
        </div>
    );
};

export default SocialLinked;