import { useForm } from 'react-hook-form';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { articleDataContext } from '../../../App';

const Login = () => {
    const { register, formState: { errors }, handleSubmit, trigger, reset } = useForm();
    const [btnState, setBtnState] = useState(false);
    const [authUser] = useAuthState(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const valueObj = useContext(articleDataContext);
    const { users } = valueObj;
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true })
        }
    }, [user, gUser, navigate, from]);


    let signInError;
    if (error) {
        signInError = <p className='text-red-500 py-3'>Incorrect Email or Password.</p>
    }

    let socialError
    if (gError) {
        socialError = <p className='text-red-500 py-3'>{gError?.message}</p>
    }


    const onSubmit = async data => {
        setBtnState(true);
        await signInWithEmailAndPassword(data.email, data.password)

        const existingUser = users?.find(user => user.userInfo.email === data.email);
        if (!existingUser) {
            return;
        } else if (existingUser?.userInfo.password !== data.password) {
            return;
        } else {
            reset();
            toast.success('Successfully logged in.');
        }
    }

    const email = authUser?.email;
    // console.log(email);
    // const userInfo = {
    //     email: authUser?.email,
    //     name: authUser?.displayName,
    //     photoURL: authUser?.photoURL,
    //     role: 'user',
    //     ocupation: "N/A",
    //     dob: "N/A",
    //     phone: "N/A",
    //     address: "N/A",
    // }

    // //Handle google signing

    // const handleGoogleSigning = async () => {
    //     await signInWithGoogle();
    // }

    // useEffect(() => {
    //     //PUT API for updating users image
    //     const url = `https://exclusive-xylia-ayonjd.koyeb.app/users/${email}`
    //     // console.log(url)
    //     if (email && !btnState) {
    //         fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 userInfo
    //             })
    //         })
    //     }
    // }, [userInfo, email, btnState])

    return (
        <div className="sign-in-container">
            <form className='toggle_form' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='custom_font'>Sign In</h1>
                <div className="social-links">
                    <div onClick={() => signInWithGoogle()}>
                        <i className="fa-brands fa-google"></i>
                    </div>
                    <div>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </div>
                    <div>
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </div>
                </div>
                <span className='custom_font toggle_form_span'>or use your account</span>
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
                            message: "Minimum eight characters, at least one letter and one number"
                        }
                    })}
                    onKeyUp={() => {
                        trigger('password')
                    }}
                />
                <small className='text-[#FF4B2B] custom_font custom_font_size'>{errors?.password?.message}</small>
                <small className='text-center'>{signInError}</small>
                <button type='submit' className="toggle_form_button form_btn">Sign In</button>
            </form>
        </div>
    );
};

export default Login;