import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './PostArticle.css';
// import { toast } from 'react-toastify';
import toast from "react-hot-toast";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { articleDataContext } from '../../App';
const PostArticle = () => {
    const valueObj = useContext(articleDataContext);
    const { signedInUser } = valueObj;
    const { register, handleSubmit, watch, formState: { errors }, trigger, reset } = useForm();

    const imageSotrageKey = `0ca5c9cdb23add3ecfaff014d8e4ad9c`

    const handleAddProduct = async data => {
        const image = data.image[0];
        const url = `https://api.imgbb.com/1/upload?key=${imageSotrageKey}`
        const formData = new FormData();
        formData.append('image', image);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                if (result.success) {
                    const img = result.data.url;
                    // console.log(img, 'img-url');
                    const blogs = {
                        Title: data.title,
                        category: data.category,
                        premium: data.access,
                        tags: [data.tags],
                        desc: data.details,
                        img: img,
                        date: new Date().toLocaleDateString(),
                    }
                    //send data to db
                    fetch(`https://exclusive-xylia-ayonjd.koyeb.app/blogs`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({ blogs, signedInUser, likes: [], comments: [] })
                    })
                        .then(res => res.json())
                        .then(inserted => {

                            if (inserted.insertedId) {
                                // alert('Succuessfully posted')
                                toast.success(`Your post ${data.title.slice(0, 5)}... added successfully.`);

                                reset()
                            }
                            else {
                                toast.error('Failed to add a Article')
                            }
                        }
                        )
                }
            })
    }
    return (
        <div>
            <form className='mt-10 text-3xl md:w-1/2 w-3/4 mx-auto text-center' onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Article Title"
                        className="input input-bordered w-full"
                        {...register("title", {
                            required: {
                                value: true,
                                message: 'Title is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.title?.type === 'required' && <span className="label-text-alt text-red-500">{errors.title.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Category"
                        className="input input-bordered w-full"
                        {...register("category", {
                            required: {
                                value: true,
                                message: 'Category is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.category?.type === 'required' && <span className="label-text-alt text-red-500">{errors.category.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Access</span>
                    </label>
                    <select className="select select-bordered focus:outline-none overflow-hidden w-full"
                        {...register("access", {
                            required: {
                                value: true,
                                message: 'Access Field is Required'
                            }
                        })}>
                        <option>Free</option>
                        <option>Premium</option>
                    </select>
                    <label className="label">
                        {errors.access?.type === 'required' && <span className="label-text-alt text-red-500">{errors.access.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Tags</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Article Tags"
                        className="input input-bordered w-full"
                        {...register("tags", {
                            required: {
                                value: true,
                                message: 'Tags is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.tags?.type === 'required' && <span className="label-text-alt text-red-500">{errors.tags.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea
                        row={5} col={20}
                        type="number"
                        placeholder="details"
                        className="input input-bordered w-full"
                        {...register("details", {
                            required: {
                                value: true,
                                message: 'details is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.details?.type === 'required' && <span className="label-text-alt text-red-500">{errors.details.message}</span>}
                    </label>
                </div>





                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        id="file"
                        className=''
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label for="file" className="file_label btn-3 ">
                        <span>Choose Photo</span>
                    </label>
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>

                <button className='btn px-6 py-2 my-2 flex items-center text-lg font-bold ' type="submit">
                    Add Article
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3 ' />
                    </span>
                </button>
            </form>
        </div>
    );
};

export default PostArticle;