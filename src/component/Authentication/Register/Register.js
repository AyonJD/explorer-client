import React from 'react';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { useForm } from "react-hook-form";
import image from '../../../assets/icon/Google.png'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
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


    if (user || gUser) {
        navigate(from, { replace: true })
    }

    let signUpError;
    if (error || gError) {
        signUpError = <p className='text-red-500 py-3'>{error?.message || gError?.message}</p>
    }
    let socialError
    if (gError) {
        socialError = <p className='text-red-500 py-3'>{gError?.message}</p>
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);

    }
    return (
        <div className='mid-container lg:my-10'>
            {/* <div className='w-full flex order-2'>
                <img className='w-full shrink-0' src={image} alt="" />
            </div> */}
            <div className='flex justify-center items-center'>
                <div className="card flex-shrink-0 w-full lg:max-w-lg md:max-w-lg sm:max-w-lg max-w-sm shadow-2xl bg-base-100 ">
                    <div className="card-body border rounded-2xl ">
                        <h1 className='text-3xl text-center font-bold'>Sign-Up </h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="input input-bordered focus:outline-none"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
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
                                    placeholder="Password"
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
                            {signUpError}
                            <input className='btn w-full btn-primary font-bold' type="submit" value="Register" />
                        </form>
                        <p className='py-3 text-center '>Already have an Account?  <Link to="/login" ><span className=' link text-primary ml-1 '> Please Login</span></Link></p>
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline font-bold"> <img className='w-7 mr-2' src={image} alt="" /> Continue with google</button>
                    </div>
                    {socialError}
                </div>
            </div>
        </div>
    );
};

export default Register;