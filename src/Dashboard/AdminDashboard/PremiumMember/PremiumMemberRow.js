import React from 'react';

const PremiumMemberRow = ({ premiumMember, serial }) => {
    console.log(premiumMember);
    const { userInfo, _id } = premiumMember;
    return (
        <tr>
            <td>{serial + 1}</td>



            <td className='py-5 pl-5 flex items-center'>
                <img className='h-11 rounded-full mr-3' src={userInfo?.photoURL} alt="" />
                {userInfo?.name}</td>
            <td>{userInfo?.email}</td>
            <td>Premium</td>
            <td><button className='btn btn-xs btn-primary rounded-full'>Details</button></td>
        </tr>
    );
};

export default PremiumMemberRow;