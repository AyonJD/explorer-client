import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../../assets/logo.png';

const TopNav = () => {
    return (
        <div className='border-b'>
            <div className='mid-container top_nav_pd hidden md:block'>
                <div className='logo flex items-center justify-between'>
                    <div>
                        <img className="w-[100px]" src={logo} alt="" />
                    </div>
                    <div className="nav_content flex items-center justify-between">
                        <ul className="menu menu-horizontal p-0">
                            <li className='mr-1 hover:text-primary'><Link to='/'><small className='font-normal text-secondary'>Premium Content</small></Link></li>
                            <li className='mr-1 hover:text-primary'><Link to='/all-article'><small className='font-normal text-secondary'>Get Premium</small></Link></li>
                            <li className='mr-1 hover:text-primary'><Link to='/about'><small className='font-normal text-secondary'>Contact</small></Link></li>
                        </ul>

                        <div className="nav_content_rignt flex items-center justify-between">
                            <div className='flex ml-2'>
                                <FaFacebookF className='mx-2' />
                                <FaTwitter className='mx-2' />
                                <FaInstagram className='mx-2' />
                            </div>
                            <button className='btn btn-sm btn-outline ml-2 rounded-sm'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;