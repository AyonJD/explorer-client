import React from 'react';
import { useForm } from 'react-hook-form';
import Popup from 'reactjs-popup';

const PopupForMakeAdmin = ({ handleEdit }) => {
    const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();

    return (
        <Popup className="popup_content" trigger={<button>...</button>} position="left center">
            <form className='py-5 px-3' onSubmit={handleSubmit(handleEdit)}>
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

                <button className='btn btn-outline btn-primary btn-sm mt-5' type="submit">Edit Admin</button>
            </form>
        </Popup>
    );
};

export default PopupForMakeAdmin;