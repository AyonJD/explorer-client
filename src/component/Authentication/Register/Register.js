
import { useUpdateProfile } from 'react-firebase-hooks/auth';

import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { useForm } from "react-hook-form";
import image from '../../../assets/icon/Google.png'
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import { articleDataContext } from '../../../App';
import useToken from '../../Hooks/useToken';
import { updateProfile } from 'firebase/auth';
import auth from '../../../firebase.init';
import toast from 'react-hot-toast';
import { error } from 'daisyui/src/colors/colorNames';

const Signup = () => {


    const { register, formState: { errors }, handleSubmit, trigger, reset } = useForm();
    const [btnState, setBtnState] = useState(true);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [authUser] = useAuthState(auth);
    const [userName, setUserName] = useState('');
    const [token] = useToken(user || gUser, userName || gUser?.displayName);
    const valueObj = useContext(articleDataContext);
    const { users } = valueObj;

    // console.log(users)

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    })

    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true })
        }
    }, [user, gUser, from, navigate])

    let signUpError;
    let socialError
    if (gError) {
        socialError = <p className='text-red-500 py-3'>{gError?.message}</p>
    }

    let userInfo = {}
    const onSubmit = async data => {
        //set display name in state for token and update name in firebase
        const displayName = data.name;
        // console.log(displayName);
        await createUserWithEmailAndPassword(data.email, data.password)
        setUserName(displayName);
        // await updateProfile( {displayName} );

        const existingUser = users?.find(user => user.userInfo.email === data.email);
        // console.log(existingUser)

        if (existingUser) {
            toast.error('Account already exists. Please login.')
            signUpError = <p className='text-red-500 py-3'>User already exists.</p>
            return;
        } else {
            userInfo = {
                email: data.email,
                name: data.name,
                password: data.password,
                role: 'user',
                ocupation: data.ocupation || "N/A",
                dob: data.dob || "N/A",
                phone: data.phone || "N/A",
                address: data.address || "N/A",
                photoURL: data.img || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            }
            // console.log(userInfo)
            // PUT API
            fetch(`https://exclusive-xylia-ayonjd.koyeb.app/users/${data.email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userInfo
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('Account created successfully.')
                }
                )
            reset();
        }

    }





    const email = authUser?.email;

    userInfo = {
        email: authUser?.email,
        name: authUser?.displayName,
        photoURL: authUser?.photoURL,
        role: 'user',
        ocupation: "N/A",
        dob: "N/A",
        phone: "N/A",
        address: "N/A"
    }

    //Handle google signing

    const handleGoogleSigning = async () => {
        setBtnState(false);
        await signInWithGoogle();
    }

    useEffect(() => {
        //PUT API for updating users image
        const url = `https://exclusive-xylia-ayonjd.koyeb.app/users/${email}`
        // console.log(url)
        if (email && !btnState) {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userInfo
                })
            })
        }
    }, [btnState, email, userInfo])

    return (
        <div className="sign-up-container">
            <form className='toggle_form' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='custom_font'>Create Account</h1>
                <div className="social-links">
                    <div onClick={handleGoogleSigning}>
                        <i class="fa-brands fa-google"></i>
                    </div>
                    <div>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </div>
                    <div>
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </div>
                </div>
                <span className='custom_font toggle_form_span'>or use your email for registration</span>
                <input type="text" placeholder="Name"
                    {...register("name", {
                        required: true,
                        minLength: {
                            value: 3, message: 'Minimum 3 character required'
                        }
                    })}

                    onKeyUp={() => {
                        trigger('name')
                    }}
                />
                <small className='text-[#FF4B2B] custom_font custom_font_size'>{errors?.name?.message}</small>


                <input type="email" placeholder="Email"
                    {...register("email", {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid Email"
                        }
                    })}
                    onKeyUp={(e) => {
                        trigger('email')
                    }}
                />
                <small className='text-[#FF4B2B] custom_font custom_font_size'>{errors?.email?.message}</small>


                <input type="password" placeholder="Password"
                    {...register('password', {
                        required: 'Password is required',
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            message: "Minimum eight characters, at least one uppercase and one number"
                        }
                    })}
                    onKeyUp={() => {
                        trigger('password')
                    }}
                />
                <small className='text-[#FF4B2B] text-center custom_font custom_font_size'>{errors?.password?.message}</small>

                <small className='text-center'>{signUpError}</small>
                <button type="submit" className="toggle_form_button form_btn">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;