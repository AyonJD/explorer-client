import React from 'react';

const FiltersForm = () => {
    return (
        <div className='flex justify-between gap-10'>
            <div className='w-full'>
                <div class="form-control w-full">
                    <label class="label pb-1">
                        <p class="label-text ">Role</p>
                    </label>
                    <select class="select select-bordered focus:outline-none">
                        <option disabled selected>Select Role</option>
                        <option>Admin</option>
                        <option>Author</option>
                        <option>Editor</option>
                        <option>Maintainer</option>
                        <option>Subscriber</option>
                    </select>
                </div>
            </div>
            <div className='w-full'>
                <div class="form-control w-full">
                    <label class="label pb-1">
                        <p class="label-text ">Plan</p>
                    </label>
                    <select class="select select-bordered focus:outline-none">
                        <option disabled selected>Select Plan</option>
                        <option>Basic</option>
                        <option>Standard</option>
                        <option>Premium</option>
                    </select>
                </div>
            </div>
            <div className='w-full'>
                <div class="form-control w-full">
                    <label class="label pb-1">
                        <p class="label-text ">Status</p>
                    </label>
                    <select class="select select-bordered focus:outline-none">
                        <option disabled selected>Select Status</option>
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