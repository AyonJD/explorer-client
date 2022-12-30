import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { articleDataContext } from '../../../App';
import auth from '../../../firebase.init';

const UpdateUserProfile = () => {
    const valueObj = useContext(articleDataContext);
    const { signedInUser } = valueObj;
    const userImg = signedInUser?.img || signedInUser?.userInfo?.photoURL || signedInUser?.img;
    const [user] = useAuthState(auth)
    const name = user?.displayName || signedInUser?.userInfo?.name;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imgStorageKey = 'a7ae0492c3659f35e2c0af7203e883ca'
    const onSubmit = async (data) => {
        // console.log(data);

        const image = data?.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const email = user?.email;
                    const currentUser = { email: email };
                    const img = result.data.url;
                    const userInformation = {
                        userName: data?.name,
                        img: img,
                        about: data?.about,
                        education: data.education,
                        occupation: data.occupation,
                        facebook: data.facebook,
                        linkedin: data.linkedin,
                        address: data.address,
                        number: data.number
                    }
                    console.log(userInformation);
                    fetch(`https://exclusive-xylia-ayonjd.koyeb.app/users/${email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            email: `${user?.email}`,
                            authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                        body: JSON.stringify(userInformation, currentUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            toast.success('Profile Updated Successfully.')
                            reset()
                        })
                }
            })
    }

    return (
        <div className='py-10 mid-container'>
            <div className='flex justify-center w-full'>
                <img className='rounded-full w-32' src={userImg} alt="" />
            </div>
            <form className='lg:w-3/4 md:w-4/5 mx-auto' onSubmit={handleSubmit(onSubmit)} >

                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Name</span>
                    </label>
                    <input
                        type="text"
                        disabled
                        value={name}
                        className="input input-bordered focus:outline-none"
                    />
                </div>
                <div className="form-control mt-5">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        disabled
                        value={user?.email}
                        className="input input-bordered focus:outline-none"
                    />
                </div>

                <div className="form-control mt-5 w-full">
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <select className="select w-full  select-bordered focus:outline-none"
                        {...register("education", {
                            required: {
                                value: true,
                                message: 'Education is Required'
                            }
                        })}>
                        <option>PHD</option>
                        <option>Masters</option>
                        <option>Honours</option>
                        <option>Diploma</option>
                        <option>Higher Secondary</option>
                        <option>Secondary</option>
                    </select>
                    <label className="label">
                        {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Occupation</span>
                    </label>
                    <select className="select w-full  select-bordered focus:outline-none"
                        {...register("occupation", {
                            required: {
                                value: true,
                                message: 'Education is Required'
                            }
                        })}>
                        <option>Student</option>
                        <option>Web Developer</option>
                        <option>Software developer</option>
                        <option>Marketing Manager</option>
                        <option>Accounts Executive</option>
                        <option>Businessmen</option>
                    </select>
                    <label className="label">
                        {errors.occupation?.type === 'required' && <span className="label-text-alt text-red-500">{errors.occupation.message}</span>}
                    </label>
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">About</span>
                    </label>
                    <input
                        type="text"
                        placeholder="About Yourself"
                        className="input input-bordered focus:outline-none"
                        {...register("about", {
                            required: {
                                value: true,
                                message: 'about is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.about?.type === 'required' && <span className="label-text-alt text-red-500">{errors.about.message}</span>}
                    </label>
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Facebook Profile </span>
                    </label>
                    <input
                        type="url"
                        placeholder="Enter Your Facebook Profile Link"
                        className="input input-bordered focus:outline-none"
                        {...register("facebook", {
                            required: {
                                value: true,
                                message: 'Facebook Profile Link is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.facebook?.type === 'required' && <span className="label-text-alt text-red-500">{errors.facebook.message}</span>}
                    </label>
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">LinkedIn Profile </span>
                    </label>
                    <input
                        type="url"
                        placeholder="Enter Your LinkedIn Profile Link"
                        className="input input-bordered focus:outline-none"
                        {...register("linkedin", {
                            required: {
                                value: true,
                                message: 'LinkedIn Profile Link is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.message}</span>}
                    </label>
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Your Current Address"
                        className="input input-bordered focus:outline-none"
                        {...register("address", {
                            required: {
                                value: true,
                                message: 'Address is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                    </label>
                </div>


                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Enter Your Phone Number"
                        className="input input-bordered focus:outline-none"
                        {...register("number", {
                            required: {
                                value: true,
                                message: 'Number is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                    </label>
                </div>

                <div className="form-control">
                    <label htmlFor='img' className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        id='img'
                        type="file"
                        className="input focus:outline-none pl-1 w-52"
                        {...register("img", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                    </label>
                </div>

                {/* {signInError} */}
                <input className='btn btn-primary w-sm text-white ' type="submit" value="UPDATE PROFILE" />
            </form>
        </div>
    );
};

export default UpdateUserProfile;