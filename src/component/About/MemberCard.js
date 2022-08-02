import React from 'react';
import { ImFacebook } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { RiLinkedinFill } from 'react-icons/ri';
import ayon from '../../assets/about/Member/ayon.jpg'
import armin from '../../assets/about/Member/291753181_1326861554506308_4174174933119289480_n.jpg'
import imran from '../../assets/about/Member/B612_20210322_163421_944 (2)-01.jpeg'
import './MemberCard.css'

const MemberCard = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='font-bold text-2xl'>OUR TEAM</h1>
                <h1 className='text-3xl font-bold'>Our Expert Leadership</h1>
            </div>
            <div className='mt-24'>
                <div className='grid grid-cols-3 gap-16'>
                    <div className='inner-box bg-neutral rounded-xl text-warning'>
                        <div className='pb-52 rounded-xl'>
                            <div className='flex'>
                                <div className="inner-icon pt-10 px-5 z-50">
                                    <ImFacebook className='icon text-[#3b5998]' />
                                    <FaTwitter className='icon text-[red]' />
                                    <GrInstagram className='icon' />
                                    <RiLinkedinFill className='icon' />
                                </div>
                                <div className="inner-img w-full">
                                    <div className=' w-full h-96'>
                                        <img className='h-full rounded-xl' src={armin} alt="" />
                                    </div>
                                    <div className='mt-4 px-5 '>
                                        <h2 className='font-semibold text-2xl '>Armin Sultana</h2>
                                        <h2 className='text-sm '>CEO of Company</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='inner-box bg-neutral rounded-xl text-warning'>
                        <div className='pb-52 rounded-xl'>
                            <div className='flex'>
                                <div className="inner-icon pt-10 px-5 z-50">
                                    <ImFacebook className='icon text-[#3b5998]' />
                                    <FaTwitter className='icon text-[red]' />
                                    <GrInstagram className='icon' />
                                    <RiLinkedinFill className='icon' />
                                </div>
                                <div className="inner-img w-full">
                                    <div className=' w-full h-96'>
                                        <img className='h-full rounded-xl' src={ayon} alt="" />
                                    </div>
                                    <div className='mt-4 px-5 '>
                                        <h2 className='font-semibold text-2xl '>Ayon Jodder</h2>
                                        <h2 className='text-sm '>CEO of Company</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='inner-box bg-neutral rounded-xl text-warning'>
                        <div className='pb-52 rounded-xl'>
                            <div className='flex'>
                                <div className="inner-icon pt-10 px-5 z-50">
                                    <ImFacebook className='icon text-[#3b5998]' />
                                    <FaTwitter className='icon text-[red]' />
                                    <GrInstagram className='icon' />
                                    <RiLinkedinFill className='icon' />
                                </div>
                                <div className="inner-img w-full">
                                    <div className=' w-full h-96'>
                                        <img className='h-full rounded-xl' src={imran} alt="" />
                                    </div>
                                    <div className='mt-4 px-5 '>
                                        <h2 className='font-semibold text-2xl '>Imran Hossen</h2>
                                        <h2 className='text-sm '>CEO of Company</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;