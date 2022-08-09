import React from 'react';
import FaqRight from './FaqRight';
import { FiPhoneCall } from 'react-icons/fi';
import { MdAttachEmail } from 'react-icons/md';

const Faq = () => {
    return (
        <div>
            <div className='flex justify-center items-center py-20 bg-neutral'>
                <div className='text-center'>
                    <h1>Let's answer some questions</h1>
                    <h4>or choose a category to quickly find the help you need</h4>
                    <div className='w-[50%]'>
                        <input className='input border w-full mx-auto' type="text" />
                    </div>
                </div>
            </div>
            <div className='flex mt-12 mid-container gap-10'>
                <div className='w-1/3'>
                    <h1 className='py-2 px-3 bg-neutral rounded-xl mb-3'>Delivery</h1>
                    <h1 className='py-2 px-3 bg-neutral rounded-xl mb-3'>Cancellation</h1>
                    <h1 className='py-2 px-3 bg-neutral rounded-xl mb-3'>My Orders</h1>
                    <h1 className='py-2 px-3 bg-neutral rounded-xl mb-3'>Services</h1>
                </div>
                <div className='w-2/3 '>
                    <FaqRight />
                </div>
            </div>
            <div className='mid-container'>
                <div className='text-center mb-10'>
                    <h6 className='text-2xl'>You still have a question?</h6>
                    <h4>If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!</h4>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='flex justify-center items-center py-20 bg-neutral px-10 text-center'>
                        <div>
                            <div className='flex justify-center pb-3'> <FiPhoneCall></FiPhoneCall> </div>
                            <h6 className='text-xl'>+ (810) 2548 2568</h6>
                            <h4>We are always happy to help!</h4>
                        </div>
                    </div>
                    <div className='flex justify-center items-center py-20 bg-neutral px-10 text-center'>
                        <div>
                            <div className='flex justify-center pb-3'><MdAttachEmail></MdAttachEmail></div>
                            <h1>You still have a question?</h1>
                            <h4>If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;