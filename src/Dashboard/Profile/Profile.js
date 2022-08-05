import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import profile from '../../assets/blank user.webp'
import './Profile.css'

const Profile = () => {
    // const valueObj = useContext()


    return (
        <>
            <div className="text-end mid-container">
                <button className='uppercase custom_profile_button text-black  relative right-0 w-fit ml-auto'>Edit Profile</button>
            </div>
            <div className="mid-container">

                <div className="our-team bg-secondary relative">
                    <div className="picture">
                        <img className="img-fluid" src="https://picsum.photos/130/130?image=1027" alt='' />
                    </div>
                    <div className="team-content">
                        <h1 className="name text-primary font-bold text-3xl">Michele Miller</h1>
                        <h4 className="title text-info text-xl">Web Developer</h4>
                    </div>
                    <ul className="social">
                        <li><a href="#" className="fa fa-facebook"  ></a></li>
                        <li><a href="#" className="fa fa-twitter" ></a></li>
                        <li><a href="#" className="fa fa-google-plus"></a></li>
                        <li><a href="#" className="fa fa-linkedin" ></a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Profile;