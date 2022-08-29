import React from 'react';
import img from "../../assets/animation_500_l6988a4t.gif"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import PaymentCart from '../PaymentCart/PaymentCart';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jekdk7m', 'template_qa1bryi', form.current, 'WGyggDUCVnY_3-3yG')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your email has been sent successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
             
              
            }, (error) => {
                console.log(error.text);
            });
        if (emailjs.sendForm) {
            e.target.user_name.value = '';
            e.target.user_email.value = '';
            e.target.message.value = '';

        }
    };

    return (


        <section className="mid-container">
            
            
            <div className="flex md:flex-nowrap flex-wrap lg:mt-12 mb-5">
                <div className='md:block hidden'>
                    <img src={img} alt="" />
                </div>
                
                <div className=" py-10 px-8 lg:w-2/4 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8  md:mt-0 border border-gray-300 rounded-lg shadow-2xl">
                    <h2 className=" text-lg mb-1 font-medium title-font">Contact Us</h2>
                    <p className="leading-relaxed mb-5 text-sm text-gray-500">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                    <form ref={form} onSubmit={sendEmail} >


                        <div className=" p mb-4">
                            <label for="name" className="leading-7 text-sm ">Name</label>
                            <input type="text" id="name" name="user_name" className="w-full rounded input input-bordered focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 duration-500 ease-in-out focus:outline-none" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm">Email</label>
                            <input type="email" id="email" name="user_email" className="w-full rounded input input-bordered focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 duration-500 focus:outline-none" />
                        </div>
                        <div className="relative mb-4">
                            <label for="message" className="leading-7 text-sm">Message</label>
                            <textarea id="message" name="message" className="w-full rounded input input-bordered focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out focus:outline-none" defaultValue={""} />
                        </div>

                        <input className="text-white btn btn-primary border-0 py-2 px-6 focus:outline-none w-full rounded" type="submit" value="Send Message" />

                        {/* <button className="text-white btn btn-primary border-0 py-2 px-6 focus:outline-none rounded">Send Message</button> */}
                        {/* <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}

                    </form>
                </div>
            </div>





        </section>


    );
};

export default Contact;