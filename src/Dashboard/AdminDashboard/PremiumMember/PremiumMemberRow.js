import React, { useState } from 'react';
import Popup from 'reactjs-popup';

const PremiumMemberRow = ({ premiumMember, serial }) => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const { userInfo, _id } = premiumMember;
    const { plan, price, duration, description, features } = userInfo?.membershipPlan;

    return (
        <tr>
            <td>{serial + 1}</td>



            <td className='py-5 pl-5 flex items-center'>
                <img className='h-11 rounded-full mr-3' src={userInfo?.photoURL} alt="" />
                {userInfo?.name}</td>
            <td>{userInfo?.email}</td>
            <td>Premium</td>
            <td>
                <button type="button" className='btn btn-xs btn-primary rounded-full font-bold text-white' onClick={() => setOpen(o => !o)}>
                    Details
                </button>
                <Popup className="popup_content " open={open} closeOnDocumentClick onClose={closeModal} position="left center">

                    <div className="overflow-x-auto rounded-lg bg-transparent shadow-md">
                        <table className="table hover table-zebra rounded-lg bg-transparent table-compact w-full">
                            <thead>
                                <tr className='popup_table_header'>
                                    <th className='py-4'>Plan</th>
                                    <th className='py-4 '>Price</th>
                                    <th className='py-4 '>Duration</th>
                                    <th className='py-4 '>Description</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr>
                                    <td className='py-5 pl-5'>{plan}</td>
                                    <td className='py-5 pl-5'>${price}</td>
                                    <td className='py-5 pl-5'>{duration}</td>
                                    <td className='py-5 pl-5'>{description}</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                </Popup>
            </td>
        </tr>
    );
};

export default PremiumMemberRow;