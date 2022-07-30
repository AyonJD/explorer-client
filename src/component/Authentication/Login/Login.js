import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { useForm } from "react-hook-form";
import image from '../../../assets/icon/Google.png'
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
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
    const from = location.state?.from?.pathname || "/";




    if (user || gUser) {
        navigate(from, { replace: true })
    }

    let signInError;
    if (error) {
        signInError = <p className='text-red-500 py-3'>Sorry! These credentials do not match our records.</p>
    }

    let socialError
    if (gError) {
        socialError = <p className='text-red-500 py-3'>{gError?.message}</p>
    }


    const onSubmit = data => {
        setBtnState(true);
        signInWithEmailAndPassword(data.email, data.password)
    }


    const email = authUser?.email;
    // console.log(email);
    const userInfo = {
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
        await signInWithGoogle();
    }

    useEffect(() => {
        //PUT API for updating users image
        const url = `https://floating-ocean-13139.herokuapp.com/users/${email}`
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
    }, [userInfo, email])
    return (
        <div className='mid-container lg:my-10'>
            <div className='flex justify-center items-center'>
                <div className="card flex-shrink-0 w-full lg:max-w-lg md:max-w-lg sm:max-w-lg max-w-sm shadow-2xl bg-base-100 ">
                    <div className="card-body border rounded-2xl ">
                        <h1 className='text-3xl text-center font-bold'>Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="input input-bordered focus:outline-none"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    autoComplete='on'
                                    type="password"
                                    placeholder="Enter Your Password"
                                    className="input input-bordered focus:outline-none"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            {signInError}
                            <input className='btn w-full btn-primary font-bold' type="submit" value="LOGIN" />
                        </form>
                        <p className='py-3 text-center '>New Explorer?  <Link to="/register" ><span className=' link text-primary ml-1'> Create New Account</span></Link></p>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleSigning} className="btn btn-outline font-bold "> <img className='w-7 mr-2' src={image} alt="" /> Continue with google</button>
                        {socialError}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;