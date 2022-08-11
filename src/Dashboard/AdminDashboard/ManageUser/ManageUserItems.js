import React from 'react';

const ManageUserItems = ({ user }) => {
    // console.log(user);
    const { admin, userInfo } = user;
    const { email, name } = userInfo;
    const membershipPlan = userInfo?.membershipPlan;

    // console.log(membershipPlan)
    return (
        <tr>
            <td className='py-5 pl-5'>{name}</td>
            <td>{email}</td>
            <td>{admin ? "Admin" : "User"}</td>
            <td>{membershipPlan ? "Premium" : `${admin ? "All Access" : "Free"}`}</td>
            <td><button className='btn btn-neutral btn-xs text-warning'>Active</button></td>
            <td className='text-xl font-bold cursor-pointer'>...</td>
        </tr>
    );
};

export default ManageUserItems;