import React from 'react';
import btn from '../../assets/app-icons@2x-1-pftptto39ghfe7k3qv9day657nzmauub5fj7ls7dm6.webp'
import image from '../../assets/about/Shape Design/animation_500_l6b0h556.gif'

const Subscribe = () => {
    return (
        <div className='bg-accent'>
            <div className='mid-container' id='subscribe'>
                <div className='grid grid-cols-2 gap-10 items-center'>
                    <div>
                        <h2 className='text-2xl font-semibold'>Subscribe to Updates</h2>
                        <p className='text-sm mt-3 mb-5'>Get the latest creative news from FooBar about art, design and business.</p>
                        <div className='flex items-center '>
                            <input className=' p-3 w-full rounded-l border' placeholder='Your email address' type="" name="" value="" />
                            <button className='btn btn-primary rounded-l-none  rounded-r' type="">Subscribe</button>
                        </div>
                        <div className='flex items-center gap-2 my-6'>
                            <input type="checkbox" class="checkbox" /><p className='text-xs'>By signing up, you agree to the our terms and our Privacy Policy agreement</p>
                        </div>
                        <img src={btn} alt="" />
                        <p className='text-xs mt-4'>Download HealthCare App. Its 100% FREE.</p>
                    </div>

                    <div>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;