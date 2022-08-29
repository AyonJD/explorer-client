import React from 'react';

const AboutSection = ({ signedInUser, users }) => {
    console.log(signedInUser);
    // console.log(users);

    return (
        <div>
            <div className='mt-5 bg-base-100 rounded-xl shadow-md p-6'>
                <h6 className='font-semibold'>About</h6>
                <p className='text-sm'>Tart I love sugar plum I love oat cake. Sweet ⭐️ roll caramels I love jujubes. Topping cake wafer.</p>
                <h6 className='font-semibold mt-5'>Joined</h6>
                <p className='text-sm'>August 15, 2022</p>

                <h6 className='font-semibold mt-5'>Lives</h6>
                <p className='text-sm'>Chittagong, Bangladesh</p>

                <h6 className='font-semibold mt-5'>Email</h6>
                <p className='text-sm'>{signedInUser?.email}</p>
                <h6 className='font-semibold mt-5'>Linkedin</h6>
                <p className='text-sm'>{signedInUser?.linkedin ? signedInUser?.linkedin : `${"Update Linkedin"}`}</p>

                <h6 className='font-semibold mt-5'>Occupation</h6>
                <p className='text-xs'>{signedInUser?.occupation ? signedInUser?.occupation : `${"Update Occupation"}`}</p>
                <h6 className='font-semibold mt-5'>Education</h6>
                <p className='text-xs'>{signedInUser?.education ? signedInUser?.education : `${"Update Education"}`}</p>
            </div>
        </div>
    );
};

export default AboutSection;