import React, { useState } from 'react';
import FaqRight from './FaqRight';
import { FiPhoneCall } from 'react-icons/fi';
import { MdAttachEmail } from 'react-icons/md';

const Faq = () => {
    const titlePayment = {
        title: "Payment",
        content: [
            {
                question: "Does my subscription automatically renew??",
                answer: "Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake."
            },
            {
                question: "Which license do I need to use an item in a commercial?",
                answer: "At tempor commodo ullamcorper a lacus vestibulum. Ultrices neque ornare aenean euismod. Dui vivamus arcu felis bibendum. Turpis in eu mi bibendum neque egestas congue. Nullam ac tortor vitae purus faucibus ornare suspendisse sed."
            },
            {
                question: "Is the Regular License the same thing as an editorial license?",
                answer: "Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake."
            }
        ]
    };
    const titleDelivery = {
        title: "Delivery",
        content: [
            {
                question: "Where has my order reached?",
                answer: "Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake."
            },
            {
                question: "The shipment status shows that it has been returned/cancelled. What does it mean and who do I contact?",
                answer: "Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake."
            },
            {
                question: "What do I need to do to get the shipment delivered within a specific timeframe?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
        ]
    };
    const tileCancalation = {
        title: "Cancellation",
        content: [
            {
                question: "How do I change my delivery address?",
                answer: "Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan."
            },
            {
                question: "How can I cancel my shipment?",
                answer: "Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake."
            },
            {
                question: "What documents do I need to carry for self-collection of my shipment?",
                answer: "At tempor commodo ullamcorper a lacus vestibulum. Ultrices neque ornare aenean euismod. Dui vivamus arcu felis bibendum. Turpis in eu mi bibendum neque egestas congue. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Tortor consequat id porta nibh. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Faucibus nisl tincidunt eget nullam non nisi. Enim nunc faucibus a pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nec nam aliquam sem et tortor consequat id. Fringilla est ullamcorper eget nulla facilisi. Morbi tristique senectus et netus et."
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
                answer: "Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake."
            },
            {
                question: "What documents do I need to carry for self-collection of my shipment?",
                answer: "At tempor commodo ullamcorper a lacus vestibulum. Ultrices neque ornare aenean euismod. Dui vivamus arcu felis bibendum. Turpis in eu mi bibendum neque egestas congue. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Tortor consequat id porta nibh. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Faucibus nisl tincidunt eget nullam non nisi. Enim nunc faucibus a pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nec nam aliquam sem et tortor consequat id. Fringilla est ullamcorper eget nulla facilisi. Morbi tristique senectus et netus et."
            }
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
                    <button onClick={() => setActive('first')} className='btn py-2 w-full bg-neutral rounded-xl mb-3'>Payment</button>
                    <button onClick={() => setActive('second')} className='btn py-2 w-full bg-neutral rounded-xl mb-3'>Cancellation</button>
                    <button onClick={() => setActive('third')} className='btn py-2 w-full bg-neutral rounded-xl mb-3'>Orders</button>
                    <button onClick={() => setActive('fourth')} className='btn py-2 w-full bg-neutral rounded-xl mb-3'>Services</button>
                </div>
                <div className='w-2/3 '>
                    {active === "first" && <FaqRight titlePayment={titlePayment} />}
                    {active === "second" && <FaqRight titleDelivery={titleDelivery} />}
                    {active === "third" && <FaqRight tileCancalation={tileCancalation} />}
                    {active === "fourth" && <FaqRight titleOrders={titleOrders} />}
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