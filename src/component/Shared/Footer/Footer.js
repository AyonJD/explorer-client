import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' bg-base-200'>
            <div className='mid-container'>
                <footer className="footer py-10 text-base-content grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-1">
                    <div>
                        <span
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="20"
                            data-aos-duration="800"
                            data-aos-easing="ease-in-out"
                            className="footer-title text-secondary opacity-80">Our Menu</span>
                        <Link
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="40"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            to="/" className="link link-hover hover:no-underline hover:tracking-widest hover:text-primary duration-300">Pizza</Link>

                        <Link
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="60"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            to="/" className="link link-hover hover:no-underline hover:tracking-widest hover:text-primary duration-300">Burger</Link>

                        <Link
                            data-aos="fade-up"
                            data-aos-offset="150"
                            data-aos-delay="80"
                            data-aos-duration="1400"
                            data-aos-easing="ease-in-out"
                            to="/" className="link link-hover hover:no-underline hover:tracking-widest hover:text-primary duration-300">Chicken</Link>

                        <Link
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-delay="100"
                            data-aos-duration="1600"
                            data-aos-easing="ease-in-out"
                            to="/" className="link link-hover hover:no-underline hover:tracking-widest hover:text-primary duration-300">Pasta</Link>
                    </div>
                    <div>
                        <span
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="20"
                            data-aos-duration="800"
                            data-aos-easing="ease-in-out"
                            className="footer-title text-secondary opacity-80">Company</span>
                        <Link
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="40"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            to="/" className="link link-hover hover:no-underline hover:tracking-widest hover:text-primary duration-300">About Us</Link>

                        <Link
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="60"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            to="/" className="link link-hover hover:no-underline hover:tracking-widest hover:text-primary duration-300">Contact</Link>

                        <Link
                            data-aos="fade-up"
                            data-aos-offset="150"
                            data-aos-delay="80"
                            data-aos-duration="1400"
                            data-aos-easing="ease-in-out"
                            to="/" className="link link-hover hover:no-underline hover:tracking-widest hover:text-primary duration-300">Jobs</Link>

                        <Link
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-delay="100"
                            data-aos-duration="1600"
                            data-aos-easing="ease-in-out"
                            to="/" className="link link-hover hover:no-underline hover:tracking-widest hover:text-primary duration-300">Press Kit</Link>
                    </div>
                    <div>
                        <span
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="20"
                            data-aos-duration="800"
                            data-aos-easing="ease-in-out"
                            className="footer-title text-secondary opacity-80">Legal</span>
                        <a 
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="40"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            className="link link-hover hover:text-primary duration-300">Terms of use</a>
                        <a
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="60"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            className="link link-hover hover:text-primary duration-300">Privacy policy</a>
                        <a
                            data-aos="fade-up"
                            data-aos-offset="150"
                            data-aos-delay="80"
                            data-aos-duration="1400"
                            data-aos-easing="ease-in-out"
                            className="link link-hover hover:text-primary duration-300">Cookie policy</a>
                    </div>
                    <div>
                        <span
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="20"
                            data-aos-duration="800"
                            data-aos-easing="ease-in-out"
                            className="footer-title text-secondary opacity-80">Newsletter</span>
                        <div className="form-control w-80">
                            <label
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="40"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div
                                data-aos="fade-up"
                                data-aos-offset="150"
                                data-aos-delay="60"
                                data-aos-duration="1200"
                                data-aos-easing="ease-in-out"
                                className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </footer>

                <footer className="footer footer-center pb-5  bg-base-200 text-base-content rounded">
                    <div>
                        <div
                            data-aos="zoom-in"
                            data-aos-offset="100"
                            data-aos-delay="50"
                            data-aos-duration="1800"
                            data-aos-easing="ease-in-out"
                            className="grid grid-flow-col gap-4">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-primary duration-300"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-primary duration-300"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-primary duration-300"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-offset="50"
                        data-aos-delay="50"
                        data-aos-duration="1800"
                        data-aos-easing="ease-in-out"
                    >
                        <p>Copyright © 2022 - All right reserved By <span className='font-semibold text-primary'>Explorer</span></p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;