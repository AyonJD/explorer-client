import React, { useContext } from 'react';
import { articleDataContext } from '../../../App';
import cover from '../../../assets/Profile/coverpic.jpg'
import './UserProfile.css'


const UserProfile = () => {
    const valueObj = useContext(articleDataContext);
    const { signedInUser } = valueObj;

    const userImg = signedInUser?.userInfo?.photoURL;

    return (
        <div className='bg-[#F8F8F8] h-[100vh]'>
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
                <div className='profile-container h-32 bg-white shadow-sm rounded-b-xl'/>
                <div className='profile-container h-32 bg-white mt-10'>
                    <div className='mt-5'>
                        dsa
                    </div>
                </div>
            </div>
        </div>
    ); 
};

export default UserProfile;