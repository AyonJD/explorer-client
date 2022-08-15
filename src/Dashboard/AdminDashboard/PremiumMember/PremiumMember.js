import React, { useContext } from 'react';
import { articleDataContext } from '../../../App';
import PremiumMemberRow from './PremiumMemberRow';

const PremiumMember = () => {
    const valueObj = useContext(articleDataContext);
    const { users } = valueObj;

    const premiumMember = users?.filter(user => user.userInfo.membershipPlan);
    return (
        <div className="overflow-x-auto shadow-md">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th className='text-accent py-4 pl-5 bg-neutral'>#</th>
                        <th className='text-accent py-4 pl-5 bg-neutral'>User</th>
                        <th className='text-accent py-4 bg-neutral'>Email</th>
                        <th className='text-accent py-4 bg-neutral'>Plan</th>
                        <th className='text-accent py-4 bg-neutral'>Plan Details</th>
                        <th className='text-accent py-4 bg-neutral'>Actions</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {premiumMember?.map((member, index) => <PremiumMemberRow serial={index} premiumMember={member} key={member._id} />)}
                </tbody>
            </table>
        </div>
    );
};

export default PremiumMember;