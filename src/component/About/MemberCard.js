import React from 'react';
import { ImFacebook } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { RiLinkedinFill } from 'react-icons/ri';
import ayon from '../../assets/about/Member/ayon.jpg'
import armin from '../../assets/about/Member/291753181_1326861554506308_4174174933119289480_n.jpg'
import imran from '../../assets/about/Member/B612_20210323_173713_393-01-01-01.jpeg'
import mozammel from '../../assets/about/Member/Mozammel.jpg'
import hasan from '../../assets/about/Member/Hasan kamrul2.jpg'
import './MemberCard.css'

const MemberCard = () => {
    return (
        <div className='member'>
            <div className='text-center'>
                <h6 className='font-extrabold text-2xl'>OUR TEAM</h6>
                <h2 className='text-3xl font-semibold mt-2'>Our Expert Leadership</h2>
            </div>
            <div className='mt-24'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-16'>
                    <div className='inner-box bg-neutral rounded-xl text-warning'>
                        <div className='pb-52 rounded-xl'>
                            <div className='flex'>
                                <div className="inner-icon pt-10 px-5 z-30">
                                    <ImFacebook className='icon text-[#3b5998]' />
                                    <FaTwitter className='icon text-[#1da1f2]' />
                                    <FiGithub className='icon text-[#3b5998]' />
                                    <RiLinkedinFill className='icon text-[#0077b5]' />
                                </div>
                                <div className="inner-img w-full">
                                    <div className=' h-96'>
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
                                <div className="inner-icon pt-10 px-5 z-30">
                                    <ImFacebook className='icon text-[#3b5998]' />
                                    <FaTwitter className='icon text-[#1da1f2]' />
                                    <FiGithub className='icon text-[#3b5998]' />
                                    <RiLinkedinFill className='icon text-[#0077b5]' />
                                </div>
                                <div className="inner-img w-full">
                                    <div className='h-96'>
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
                                <div className="inner-icon pt-10 px-5 z-30">
                                    <ImFacebook className='icon text-[#3b5998]' />
                                    <FaTwitter className='icon text-[#1da1f2]' />
                                    <FiGithub className='icon text-[#3b5998]' />
                                    <RiLinkedinFill className='icon text-[#0077b5]' />
                                </div>
                                <div className="inner-img w-full">
                                    <div className='h-96'>
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
                <div className='mt-24 grid grid-cols-2 gap-16 w-[78%] mx-auto'>
                    <div className='w-[80%]'>
                        <div className='inner-box bg-neutral rounded-xl text-warning'>
                            <div className='pb-52 rounded-xl'>
                                <div className='flex'>
                                    <div className="inner-icon pt-10 px-5 z-30">
                                        <ImFacebook className='icon text-[#3b5998]' />
                                        <FaTwitter className='icon text-[#1da1f2]' />
                                        <FiGithub className='icon text-[#3b5998]' />
                                        <RiLinkedinFill className='icon text-[#0077b5]' />
                                    </div>
                                    <div className="inner-img w-full">
                                        <div className=' w-full h-96'>
                                            <img className='h-full rounded-xl' src={mozammel} alt="" />
                                        </div>
                                        <div className='mt-4 px-5 '>
                                            <h2 className='font-semibold text-2xl '>Md Mozammel</h2>
                                            <h2 className='text-sm '>CEO of Company</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[80%]'>
                        <div className='inner-box bg-neutral rounded-xl text-warning'>
                            <div className='pb-52 rounded-xl'>
                                <div className='flex'>
                                    <div className="inner-icon pt-10 px-5 z-30">
                                        <ImFacebook className='icon text-[#3b5998]' />
                                        <FaTwitter className='icon text-[#1da1f2]' />
                                        <FiGithub className='icon text-[#3b5998]' />
                                        <RiLinkedinFill className='icon text-[#0077b5]' />
                                    </div>
                                    <div className="inner-img w-full">
                                        <div className=' w-full h-96'>
                                            <img className='h-full rounded-xl' src={hasan} alt="" />
                                        </div>
                                        <div className='mt-4 px-5 '>
                                            <h2 className='font-semibold text-2xl '>Hasan Kamrul</h2>
                                            <h2 className='text-sm '>CEO of Company</h2>
                                        </div>
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