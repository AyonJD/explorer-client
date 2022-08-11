import React, { useState } from 'react';
import FaqRight from './FaqRight';
import { FiPhoneCall } from 'react-icons/fi';
import { MdAttachEmail } from 'react-icons/md';

const Faq = () => {
    const titlePayment = {
        title: "Payment",
        content: [
            {
                question: "what is your payment?",
                answer: "payment done."
            },
            {
                question: "what is your payment?",
                answer: "payment done."
            },
        ]
    };
    const titleDelivery = {
        title: "Delivery",
        content: [
            {
                question: "what is your Delivery?",
                answer: "Delivery done."
            },
            {
                question: "what is your Delivery?",
                answer: "Delivery done."
            },
        ]
    };
    const tileCancalation = {
        title: "Cancellation",
        content: [
            {
                question: "what is your Cancellation?",
                answer: "Cancellation done."
            },
            {
                question: "what is your Cancellation?",
                answer: "Cancellation done."
            },
        ]
    }
    const [active, setActive] = useState("first");
    return (
        <div>
            <div className='flex justify-center items-center py-20 bg-neutral'>
                <div className='text-center'>
                    <h1 className='text-2xl text-violet-500'>Let's answer some questions</h1>
                    <span className=' divider '>Or</span>
                    <h4 className='font-thin'>Choose a category to quickly find the help you need</h4>
                    <div className=' py-4 mx-auto'>
                        <input className='input border w-full' type="text" />
                    </div>
                </div>
            </div>
            <div className='flex mt-12 mid-container gap-10'>
                <div className='w-1/3'>
                    <button onClick={() => setActive('first')} className='btn py-2 w-full bg-neutral rounded-xl mb-3'>Delivery</button>
                    <button onClick={() => setActive('second')} className='btn py-2 w-full bg-neutral rounded-xl mb-3'>Cancellation</button>
                    <button onClick={() => setActive('third')} className='btn py-2 w-full bg-neutral rounded-xl mb-3'>My Orders</button>
                    <button onClick={() => setActive('fourth')} className='btn py-2 w-full bg-neutral rounded-xl mb-3'>Services</button>
                </div>
                <div className='w-2/3 '>
                    {active === "first" && <FaqRight title="1" />}
                    {active === "second" && <FaqRight title="2" />}
                    {active === "third" && <FaqRight title="3" />}
                    {active === "fourth" && <FaqRight title="4" />}
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