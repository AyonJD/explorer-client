import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProducts = () => {
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
                    const img = result.data.url;
                    const tools = {
                        toolName: data.toolName,
                        description: data.description,
                        price: data.price,
                        quantity: data.quantity,
                        img: img
                    }
                    fetch('https://sheltered-taiga-12711.herokuapp.com/add-tools', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tools)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added successfully')
                                reset()
                            } else {
                                toast.error('Failed to the add Product')
                            }
                        })
                }
            })
    }

    return (
        <div className='py-10 '>
            <h1 className='text-center font-bold text-3xl'>Add a Product </h1>
            <form className='w-3/4 mx-auto' onSubmit={handleSubmit(onSubmit)} >

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Product Name"
                        className="input input-bordered focus:outline-none"
                        {...register("toolName", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />

                    <label className="label">
                        {errors.toolName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.toolName.message}</span>}
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Add a short description</span>
                    </label>
                    <textarea name='address' className="textarea textarea-bordered w-full" type="text"
                        placeholder="Enter a description"
                        className="input input-bordered focus:outline-none"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        })}>
                    </textarea>

                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="Number"
                        min="0"
                        placeholder="Enter Product Price"
                        className="input input-bordered focus:outline-none"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input
                        type="Number"
                        min="10"
                        placeholder="Enter Product Quantity"
                        className="input input-bordered focus:outline-none"
                        {...register("quantity", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
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
                <input className='btn btn-primary w-full text-white ' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProducts;