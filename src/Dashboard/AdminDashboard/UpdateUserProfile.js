
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UpdateUserProfile = () => {
    const [user] = useAuthState(auth)
    const name = user?.displayName;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imgStorageKey = 'a7ae0492c3659f35e2c0af7203e883ca'
    const onSubmit = async data => {

        const image = data.img[0];
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
                    const tools = {
                        toolName: data.toolName,
                        description: data.description,
                        price: data.price,
                        quantity: data.quantity,
                        img: img,
                        education: data.education,
                        occupation: data.occupation,
                        linkedIn: data.linkedIn
                    }
                    fetch(`https://sheltered-taiga-12711.herokuapp.com/profile/${email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(tools, currentUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success('Profile Updated Successfully.')
                            reset()
                        })
                }
            })
    }

    return (
        <div className='py-10 '>
            <h1 className='text-center font-bold text-3xl'>My Profile</h1>
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
                        <span className="label-text">Education Level</span>
                    </label>
                    <select className="select w-full  select-bordered focus:outline-none"
                        {...register("education", {
                            required: {
                                value: true,
                                message: 'Education is Required'
                            }
                        })}>
                        <option>PhD (Doctor of Philosophy)</option>
                        <option>Masters</option>
                        <option>Bachelors/Honours</option>
                        <option>Diploma</option>
                        <option>Higher Secondary</option>
                        <option>Secondary</option>
                        <option>JSC/JDC/8 pass</option>
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
                        <option>Web Developer</option>
                        <option>Software developer</option>
                        <option>Marketing Manager</option>
                        <option>Account Executive</option>
                        <option>Businessmen</option>
                        <option>Student</option>
                    </select>
                    <label className="label">
                        {errors.occupation?.type === 'required' && <span className="label-text-alt text-red-500">{errors.occupation.message}</span>}
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
                        {...register("linkedIn", {
                            required: {
                                value: true,
                                message: 'LinkedIn Profile Link is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.linkedIn?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedIn.message}</span>}
                    </label>
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Number</span>
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