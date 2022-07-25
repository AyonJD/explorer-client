import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import profile from '../../assets/blank user.webp'

const Profile = () => {
    const [user] = useAuthState(auth)
    const name = user?.displayName;


    return (
        <div className='py-10  mid-container'>
            <div className='text-center w-full'>
                {
                    user?.photoURL ? <img className='rounded-full mx-auto' src={user?.photoURL} alt="" /> :
                        <img src={profile} alt="" />
                }
                <button className='btn btn-sm btn-primary mt-5'>Edit Profile</button>
            </div>
        </div>
    );
};

export default Profile;