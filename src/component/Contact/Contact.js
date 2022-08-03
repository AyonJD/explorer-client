import React from 'react';
import img from "../../assets/animation_500_l6988a4t.gif"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

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
            <div className="flex w-full items-center ">
                <h1 className="text-3xl font-bold  lg:w-72 md:w-96 sm:w-96 ">
                    Contact with Us
                </h1>
                <span className="bg-primary h-[2px] w-full article-border"></span>
            </div>
            <p className="text-sm mt-2">
                Popular articles are selected based on the number of readers
            </p>

            <div className="flex sm:flex-nowrap flex-wrap mt-12">
                <div>
                    <img src={img} alt="" />
                </div>
                {/* <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe title='map' width="100%" height="100%" className="absolute inset-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37144.03679128258!2d91.0921473!3d22.87236290000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754a4f60180b351%3A0xaf35df91820c2a37!2sMaijdee!5e1!3m2!1sen!2sbd!4v1653831893740!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a className="text-indigo-500 leading-relaxed">explorer@gmail.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>
                </div> */}
                <div className=" py-10 px-8 lg:w-2/4 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 border border-gray-300 rounded-lg shadow-2xl">
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