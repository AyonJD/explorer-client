import React, { useContext, useMemo } from 'react';
import { articleDataContext } from '../../../App';
import PremiumMemberRow from './PremiumMemberRow';

const PremiumMember = () => {
    const valueObj = useContext(articleDataContext);
    const { users } = valueObj;

    const premiumMember = useMemo(() => {
        return users?.filter(user => user.userInfo.membershipPlan);
    }, [users]);


    return (
        <div className='p-8'>
            <div className="overflow-x-auto shadow-md">
                <table className="table table-compact w-full">
                    <thead>
                        <tr className='premium_dashboard_table_header'>
                            <th className='text-accent py-4 pl-5 bg-neutral'>#</th>
                            <th className='md:col-span-1 col-span-3 text-accent py-4 pl-5 bg-neutral'>User</th>
                            <th className='text-accent py-4 bg-neutral'>Email</th>
                            <th className='text-accent py-4 bg-neutral'>Plan</th>
                            <th className='text-accent py-4 bg-neutral'>Plan Details</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {premiumMember?.map((member, index) => <PremiumMemberRow serial={index} premiumMember={member} key={member._id} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PremiumMember;