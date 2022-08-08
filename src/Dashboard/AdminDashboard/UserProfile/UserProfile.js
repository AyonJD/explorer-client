import React, { useContext } from 'react';
import { articleDataContext } from '../../../App';
import cover from '../../../assets/Profile/coverpic.jpg'
import AboutSection from './AboutSection';
import './UserProfile.css'


const UserProfile = () => {
    const valueObj = useContext(articleDataContext);
    const { signedInUser } = valueObj;

    const userImg = signedInUser?.userInfo?.photoURL;

    return (
        <div className='bg-[#F8F8F8]'>
            <div className='profile-container'>
                <div className="cover relative  w-full">
                    <div>
                        <img className='w-full' src={cover} alt="" />
                    </div>
                    <div className='absolute bottom-[-115px] pl-10 flex items-center gap-7  w-full'>
                        <div className="profile w-36 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                            <img className='w-full rounded-full' src={userImg} alt="" />
                        </div>
                        <div className='mt-10  w-full'>
                            <h6 className='text-3xl font-extrabold'>{signedInUser?.userInfo?.name}</h6>
                            <p>Web Developer</p>
                            <div className='mt-4 flex justify-between'>
                                <div>
                                    <button className='btn btn-sm mr-2'>Article</button>
                                    <button className='btn btn-sm mr-2'>About</button>
                                    <button className='btn btn-sm mr-2'>Photos</button>
                                    <button className='btn btn-sm'>Followers</button>
                                </div>
                                <div className='pr-5'>
                                    <button className='btn btn-sm'>Edit Profile</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='profile-container h-32 bg-white shadow-md rounded-b-xl' />
            </div>
            <div className='profile-container flex gap-6'>
                <div className='w-[28%]'>
                    <AboutSection />
                </div>
                <div className='mt-5 bg-white rounded-xl shadow-sm w-[44%]'>
                    <div class="card  bg-base-100 w-full">
                        <figure class="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 bg-white rounded-xl shadow-sm w-[28%]'>
                    <div class="card  bg-base-100 ">
                        <figure class="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;