import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const TopNav = () => {
    return (
        <div className='border-b'>
            <div className='mid-container hidden md:block'>
                <div className='logo flex items-center justify-between'>
                    <h1 className='text-2xl'>EXPLORER</h1>
                    <div className="nav_content flex items-center justify-between">
                        <ul className="menu menu-horizontal p-0">
                            <li className='mr-1 hover:text-primary'><Link to='/'><small className='font-normal text-gray-600'>Premium Content</small></Link></li>
                            <li className='mr-1 hover:text-primary'><Link to='/all-article'><small className='font-normal text-gray-600'>Get Premium</small></Link></li>
                            <li className='mr-1 hover:text-primary'><Link to='/about'><small className='font-normal text-gray-600'>Contact</small></Link></li>
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