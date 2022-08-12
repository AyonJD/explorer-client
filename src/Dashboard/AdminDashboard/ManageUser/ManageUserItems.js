import React from 'react';
import Popup from 'reactjs-popup';
import { useForm } from 'react-hook-form';
import 'reactjs-popup/dist/index.css';
import './ManageUserItems.css';

const ManageUserItems = ({ user }) => {
    const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
    const { admin, userInfo } = user;
    const { email, name } = userInfo;
    const membershipPlan = userInfo?.membershipPlan;

    const onSubmitParam = async data => {
        
        reset();
    }
    return (
        <tr>
            <td className='py-5 pl-5'>{name}</td>
            <td>{email}</td>
            <td>{admin ? "Admin" : "User"}</td>
            <td>{membershipPlan ? "Premium" : `${admin ? "All Access" : "Free"}`}</td>
            <td><button className='btn btn-neutral btn-xs text-warning'>Active</button></td>
            <td className='text-xl font-bold cursor-pointer'>
                <Popup className="popup_content" trigger={<button>...</button>} position="left center">
                    <form className='py-5 px-3' onSubmit={handleSubmit(onSubmitParam)}>
                        <input type="text" placeholder='Admin possition' className="input h-8 w-full max-w-xs"
                            {...register("possition", {
                                required: true,
                                minLength: {
                                    value: 3, message: 'Minimum 3 character required'
                                }
                            })}

                            onKeyUp={() => {
                                trigger('possition')
                            }}
                        />
                        <small className='text-[#FF4B2B] custom_font_size'>{errors?.name?.message}</small>

                        <button className='btn btn-outline btn-primary btn-sm mt-5' type="submit">Make Admin</button>
                    </form>
                </Popup>

            </td>
        </tr>
    );
};

export default ManageUserItems;