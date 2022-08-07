import React, { useContext } from 'react';
import { articleDataContext } from '../../../App';
import AddUserSection from './AddUserSection';
import FiltersForm from './FiltersForm';
import ManageUserItems from './ManageUserItems';

const ManageUser = () => {
    const valueObj = useContext(articleDataContext);
    const { users } = valueObj;


    return (
        <div className='p-7 '>
            <div className=' bg-neutral shadow-sm p-5 rounded-xl mb-5'>
                <h6 className='text-[19px] font-semibold mb-3'>Filters</h6>

                <FiltersForm />
            </div>

            <div>
                <div className=' py-4 px-5 shadow-sm rounded-md'>
                    <AddUserSection />
                </div>
                <div className="overflow-x-auto shadow-md">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th className='py-4 pl-5 bg-neutral'>Name</th>
                                <th className='py-4 bg-neutral'>Role</th>
                                <th className='py-4 bg-neutral'>Plan</th>
                                <th className='py-4 bg-neutral'>Email</th>
                                <th className='py-4 bg-neutral'>Status</th>
                                <th className='py-4 bg-neutral'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {users.map(user => <ManageUserItems />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;