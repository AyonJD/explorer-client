import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import profile from '../../assets/blank user.webp'
import './Profile.css'

const Profile = () => {
    const [user] = useAuthState(auth)
    const name = user?.displayName;


    return (
        <>
            <div className="text-end mid-container">
                <button className='uppercase custom_profile_button text-black  relative right-0 w-fit ml-auto'>Edit Profile</button>
            </div>
            <div class="mid-container">

                <div class="our-team bg-secondary relative">
                    <div class="picture">
                        <img class="img-fluid" src="https://picsum.photos/130/130?image=1027" alt='' />
                    </div>
                    <div class="team-content">
                        <h1 class="name text-primary font-bold text-3xl">Michele Miller</h1>
                        <h4 class="title text-info text-xl">Web Developer</h4>
                    </div>
                    <ul class="social">
                        <li><a href="#" class="fa fa-facebook"  ></a></li>
                        <li><a href="#" class="fa fa-twitter" ></a></li>
                        <li><a href="#" class="fa fa-google-plus"></a></li>
                        <li><a href="#" class="fa fa-linkedin" ></a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Profile;