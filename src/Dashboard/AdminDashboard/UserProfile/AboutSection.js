import React from 'react';

const AboutSection = ({ signedInUser, users }) => {
    // console.log(signedInUser);
    // console.log(users);

    return (
        <div>
            <div className='mt-5 bg-base-100 rounded-xl shadow-md p-6'>
                <h6 className='font-semibold'>About</h6>
                <p className='text-xs'>{signedInUser?.about ? signedInUser?.about : `${"Update About Yourself"}`}</p>
                <h6 className='font-semibold mt-5'>Joined</h6>
                <p className='text-xs'>August 15, 2022</p>

                <h6 className='font-semibold mt-5'>Lives</h6>
                <p className='text-xs'>{signedInUser?.address ? signedInUser?.address : `${"Update where you lives"}`}</p>

                <h6 className='font-semibold mt-5'>Email</h6>
                <p className='text-xs'>{signedInUser?.email}</p>
                <h6 className='font-semibold mt-5'>Facebook</h6>
                <p className='text-xs'>{signedInUser?.facebook ? signedInUser?.facebook : `${"Update Facebook Link"}`}</p>
                <h6 className='font-semibold mt-5'>Linkedin</h6>
                <p className='text-xs'>{signedInUser?.linkedin ? signedInUser?.linkedin : `${"Update Linkedin Link"}`}</p>
                <h6 className='font-semibold mt-5'>Phone</h6>
                <p className='text-xs'>{signedInUser?.number ? signedInUser?.number : `${"Update Linkedin Link"}`}</p>

                <h6 className='font-semibold mt-5'>Occupation</h6>
                <p className='text-xs'>{signedInUser?.occupation ? signedInUser?.occupation : `${"Update Occupation"}`}</p>
                <h6 className='font-semibold mt-5'>Education</h6>
                <p className='text-xs'>{signedInUser?.education ? signedInUser?.education : `${"Update Education"}`}</p>
            </div>
            <div className='mt-5 bg-base-100 rounded-xl shadow-md p-6'>
                <h6 className='font-semibold'>Pinned Articles</h6>
                <p className='text-xs'>pin your articles</p>
                <h6 className='font-semibold mt-5'>Featured</h6>
                <p className='text-xs'>add some feature</p>
            </div>
        </div>
    );
};

export default AboutSection;