import React, { useContext } from 'react';
import { articleDataContext } from '../../../App';
import cover from '../../../assets/Profile/coverpic.jpg'


const UserProfile = () => {
    const valueObj = useContext(articleDataContext);
    const { signedInUser } = valueObj;

    const userImg = signedInUser?.userInfo?.photoURL;

    return (
        <div className='bg-[#F8F8F8]'>
            <div className='bg-white w-[1200px] mx-auto'>
                <div className="cover relative">
                    <div>
                        <img src={cover} alt="" />
                    </div>
                    <div className='absolute bottom-[-100px] pl-10 flex items-center gap-7'>
                        <div className="profile w-36 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                            <img className='w-full rounded-full' src={userImg} alt="" />
                        </div>
                        <div className='mt-5'>
                            <h6 className='text-3xl font-extrabold'>{signedInUser?.userInfo?.name}</h6>
                            <p>Web Developer</p>
                        </div>
                    </div>
                </div>
                <div className='mid-container'>

                </div>
            </div>
        </div>
    );
};

export default UserProfile;