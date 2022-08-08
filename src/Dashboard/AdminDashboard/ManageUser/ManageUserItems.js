import React from 'react';

const ManageUserItems = () => {
    return (
        <tr>
            <td className='py-5 pl-5'>Imran Hossen</td>
            <td>imranhossen81@gmail.com</td>
            <td>Admin</td>
            <td>Premium</td>
            <td><button className='btn btn-neutral btn-xs text-warning'>Active</button></td>
            <td className='text-xl font-bold cursor-pointer'>...</td>
        </tr>
    );
};

export default ManageUserItems;