import React from 'react';

const AddUserSection = () => {
    return (
        <div className='flex'>
            <div className='flex items-center gap-2 w-[50%]'>
                <h6>Show</h6>
                <div>
                    <div className="form-control">
                        <select className="select select-bordered focus:outline-none">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                    </div>
                </div>
                <h6>entries</h6>
            </div>
            <div className='w-[50%] flex justify-between gap-5'>
                <div className='w-[70%] text-end flex justify-end'>
                    <input type="text" placeholder="Search user.." className="input input-bordered w-full focus:outline-none " />
                </div>
                <div className='w-[30%] text-end'>
                    <button className='btn btn-neutral btn-md '>Add User</button>
                </div>
            </div>
        </div>
    );
};

export default AddUserSection;