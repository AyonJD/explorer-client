import React, { useState } from 'react';
import FaqRight from './FaqRight';
import { FiPhoneCall } from 'react-icons/fi';
import { MdAttachEmail } from 'react-icons/md';
import { FaCoins } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';
import { AiOutlineShopping } from 'react-icons/ai';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { TbDiscount2 } from 'react-icons/tb';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { MdFreeCancellation } from 'react-icons/md';
import { MdOutlineSystemUpdateAlt } from 'react-icons/md';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { TbMessages } from 'react-icons/tb';
import { MdCardMembership } from 'react-icons/md';
import { ImFeed } from 'react-icons/im';

const Faq = () => {
    const [active, setActive] = useState("first");
    const titlePayment = {
        title: "Payment",
        content: [
            {
                question: "Does my subscription automatically renew??",
                answer: "Pastry pudding cookie toffee bonbon jujubes jujubes powder topping."
            },
            {
                question: "Which license do I need to use an item in a commercial?",
                answer: "At tempor commodo ullamcorper a lacus vestibulum."
            },
            {
                question: "Is the Regular License the same thing as an editorial license?",
                answer: "Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Tootsie roll sweet cupcake."
            }
        ]
    };
    const titleDelivery = {
        title: "Delivery",
        content: [
            {
                question: "Where has my order reached?",
                answer: "Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps."
            },
            {
                question: "The shipment status shows that it has been returned/cancelled. What does it mean and who do I contact?",
                answer: "Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake."
            },
            {
                question: "What do I need to do to get the shipment delivered within a specific timeframe?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
        ]
    };
    const titleService = {
        title: "Services",
        content: [
            {
                question: "How do I change my delivery address?",
                answer: "Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan."
            },
            {
                question: "How can I cancel my shipment?",
                answer: "Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake."
            },
            {
                question: "What documents do I need to carry for self-collection of my shipment?",
                answer: "At tempor commodo ullamcorper a lacus vestibulum. Ultrices neque ornare aenean euismod. Fringilla est ullamcorper eget nulla facilisi. Morbi tristique senectus et netus et."
            }
        ]
    }
    const titleOrders = {
        title: "Orders",
        content: [
            {
                question: "How do I change my delivery address?",
                answer: "Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan."
            },
            {
                question: "How can I cancel my shipment?",
                answer: "Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. BJujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake."
            },
            {
                question: "What documents do I need to carry for self-collection of my shipment?",
                answer: "At tempor commodo ullamcorper a lacus vestibulum. Ultrices neque ornare aenean euismod. Fringilla est ullamcorper eget nulla facilisi. Morbi tristique senectus et netus et."
            }
        ]
    }
    const titlePromo = {
        title: "Promo Issues",
        content: [
            {
                question: "How do I change my delivery address?",
                answer: "Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan."
            },
            {
                question: "How can I cancel my shipment?",
                answer: "Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. BJujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake."
            },
            {
                question: "What documents do I need to carry for self-collection of my shipment?",
                answer: "At tempor commodo ullamcorper a lacus vestibulum. Ultrices neque ornare aenean euismod. Fringilla est ullamcorper eget nulla facilisi. Morbi tristique senectus et netus et."
            }
        ]
    }

    return (
        <div>
            <div className='flex justify-center items-center py-20 bg-fuchsia-50'>
                <div className='text-center'>
                    <h1 className='text-4xl text-violet-500'>Let's answer some questions</h1>
                    <span className=' divider '>Or</span>
                    <h4 className='font-thin text-black'>Choose a category to quickly find the help you need</h4>
                    <div className=' py-4 mx-auto'>
                        <input className='input border w-full' type="text" placeholder='Search' />
                    </div>
                </div>
            </div>
            <div className='flex mt-12 mid-container gap-10 '>
                <div className='w-1/3 mt-6'>
                    <button onClick={() => setActive('first')} className='btn py-2 w-full register-btn text-white rounded-xl mb-3'> <FaCoins className='mx-4' size={20} ></FaCoins> Payment</button>

                    <button onClick={() => setActive('second')} className='btn py-2 w-full register-btn text-white  rounded-xl mb-3'><TbTruckDelivery className='mx-4' size={25}></TbTruckDelivery>Delivery</button>
                    <button onClick={() => setActive('third')} className='btn py-2 w-full register-btn text-white rounded-xl mb-3'><AiOutlineShopping className='mx-4' size={25}></AiOutlineShopping>Orders</button>
                    <button onClick={() => setActive('fourth')} className='btn py-2 w-full register-btn text-white rounded-xl mb-3'><MdOutlineMiscellaneousServices className='mx-4' size={25}></MdOutlineMiscellaneousServices>Services</button>
                    <button onClick={() => setActive('fifth')} className='btn py-2 w-full register-btn text-white rounded-xl mb-3'><TbDiscount2 className='mx-4' size={25}></TbDiscount2>Promo</button>
                </div>
                <div className='w-2/3 '>
                    {active === "first" && <FaqRight content={titlePayment} />}
                    {active === "second" && <FaqRight content={titleDelivery} />}
                    {active === "third" && <FaqRight content={titleOrders} />}
                    {active === "fourth" && <FaqRight content={titleService} />}
                    {active === "fifth" && <FaqRight content={titlePromo} />}
                </div>
            </div>

            <div className='mid-container'>
                <div className='text-center mb-10 mt-10'>
                    <h6 className='text-3xl font-bold'>Need Help?</h6>
                    <h6>We have got you covered</h6>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-10 text-center'>
                    <div>
                        <div class="avatar placeholder">
                            <div class="bg-fuchsia-100 text-neutral-content rounded-full w-24">
                                <span><FaCoins className='mx-4' size={40} ></FaCoins></span>
                            </div>
                        </div>
                        <span><h4>Payment Issues</h4></span>
                    </div>
                    <button>
                        <div class="avatar placeholder">
                            <div class="bg-fuchsia-100 text-neutral-content rounded-full w-24">
                                <span><MdOutlineManageAccounts className='mx-4' size={40} ></MdOutlineManageAccounts></span>
                            </div>
                        </div>
                        <span><h4>Account Related</h4></span>
                    </button>
                    <div>
                        <div class="avatar placeholder">
                            <div class="bg-fuchsia-100 text-neutral-content rounded-full w-24">
                                <span><MdFreeCancellation className='mx-4' size={40} ></MdFreeCancellation></span>
                            </div>
                        </div>
                        <span><h4>Cancel Card</h4></span>
                    </div>
                    <div>
                        <div class="avatar placeholder">
                            <div class="bg-fuchsia-100 text-neutral-content rounded-full w-24">
                                <span><MdOutlineSystemUpdateAlt className='mx-4' size={40} ></MdOutlineSystemUpdateAlt></span>
                            </div>
                        </div>
                        <span><h4>Article Publishing</h4></span>
                    </div>
                    <div>
                        <div class="avatar placeholder">
                            <div class="bg-fuchsia-100 text-neutral-content rounded-full w-24">
                                <span><AiOutlineShareAlt className='mx-4' size={40} ></AiOutlineShareAlt></span>
                            </div>
                        </div>
                        <span><h4>Sharing</h4></span>
                    </div>
                    <div>
                        <div class="avatar placeholder">
                            <div class="bg-fuchsia-100 text-neutral-content rounded-full w-24">
                                <span><TbMessages className='mx-4' size={40} ></TbMessages></span>
                            </div>
                        </div>
                        <span><h4>Messaging</h4></span>
                    </div>
                    <div>
                        <div class="avatar placeholder">
                            <div class="bg-fuchsia-100 text-neutral-content rounded-full w-24">
                                <span><MdCardMembership className='mx-4' size={40} ></MdCardMembership></span>
                            </div>
                        </div>
                        <span><h4>Membership</h4></span>
                    </div>
                    <div>
                        <div class="avatar placeholder">
                            <div class="bg-fuchsia-100 text-neutral-content rounded-full w-24">
                                <span><ImFeed className='mx-4' size={40} ></ImFeed></span>
                            </div>
                        </div>
                        <span><h4>Feedback</h4></span>
                    </div>
                </div>
            </div>
            <div className='mid-container'>
                <div className='text-center mb-10 mt-10'>
                    <h6 className='text-3xl font-bold'>You still have a question?</h6>
                    <h6>If you cannot find a question in our FAQ, you can always contact us. <br /> We will answer to you shortly!</h6>
                </div>
                <div className='grid grid-cols-2 gap-10'>
                    <div className='flex justify-center items-center py-16 bg-neutral px-10 text-center rounded-xl'>
                        <div>
                            <div className='flex justify-center pb-3'> <FiPhoneCall size={30} color="fuchsia"></FiPhoneCall> </div>
                            <h6 className='text-xl'>+ (810) 2548 2568</h6>
                            <h4>We are always happy to help!</h4>
                        </div>
                    </div>
                    <div className='flex justify-center items-center py-16 bg-neutral px-10 text-center'>
                        <div>
                            <div className='flex justify-center pb-3'><MdAttachEmail size={30} color="fuchsia"></MdAttachEmail></div>
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