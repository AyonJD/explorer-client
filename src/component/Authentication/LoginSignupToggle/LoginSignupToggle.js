import React from 'react';
import { useState } from 'react';
import Login from '../Login/Login';
import Signup from '../Register/Register';

const LoginSignupToggle = () => {
    const [activeClass, setActiveClass] = useState('');
    return (
        <div className="wrapper flex items-center justify-center">
            <div className={`form_container ${activeClass}`}>
                <div>
                    <Signup />
                    <Login />
                </div>
                <div className="overlay-container">
                    <div className="overlay-left">
                        <h1 className='custom_font'>Welcome Back</h1>
                        <p className='toggle_form_paragrapn custom_font'>To keep connected with us please login with your personal info</p>
                        <button onClick={() => setActiveClass('')} id="signIn" className="toggle_form_button overlay_btn custom_font">Sign In</button>
                    </div>
                    <div className="overlay-right">
                        <h1 className='custom_font'>Hello, Friend</h1>
                        <p className='custom_font toggle_form_paragrapn'>Enter your personal details and start journey with us</p>
                        <button onClick={() => setActiveClass('right-panel-active')} id="signUp" className="toggle_form_button overlay_btn button">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignupToggle;