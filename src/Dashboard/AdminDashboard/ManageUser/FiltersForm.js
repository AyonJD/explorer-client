import React from 'react';

const FiltersForm = () => {
    return (
        <div className='flex justify-between gap-10'>
            <div className='w-full'>
                <div className="form-control w-full">
                    <label className="label pb-1">
                        <p className="label-text ">Role</p>
                    </label>
                    <select defaultValue={'DEFAULT'} className="select select-bordered focus:outline-none ">
                        <option disabled value="DEFAULT">Select Role</option>
                        <option>Admin</option>
                        <option>Author</option>
                        <option>Editor</option>
                        <option>Maintainer</option>
                        <option>Subscriber</option>
                    </select>
                </div>
            </div>
            <div className='w-full'>
                <div className="form-control w-full">
                    <label className="label pb-1">
                        <p className="label-text ">Plan</p>
                    </label>
                    <select defaultValue={'DEFAULT'} className="select select-bordered focus:outline-none">
                        <option disabled value="DEFAULT">Select Plan</option>
                        <option>Basic</option>
                        <option>Standard</option>
                        <option>Premium</option>
                    </select>
                </div>
            </div>
            <div className='w-full'>
                <div className="form-control w-full">
                    <label className="label pb-1">
                        <p className="label-text ">Status</p>
                    </label>
                    <select defaultValue={'DEFAULT'} className="select select-bordered focus:outline-none">
                        <option disabled value="DEFAULT">Select Status</option>
                        <option>Pending</option>
                        <option>Active</option>
                        <option>InActive</option>
                    </select>
                </div>
            </div>

        </div>
    );
};

export default FiltersForm;