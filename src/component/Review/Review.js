import React from 'react';
import test1 from '../../assets/test1.png'
import test2 from '../../assets/test2.png'
import test3 from '../../assets/test3.png'


const Review = () => {
    return (
        <div className='mid-container'>
            <h1 className='text-2xl font-semibold border-b-[1px] pb-3 mb-5'>Testimonial</h1>
            <section class="text-gray-600 body-font">
                <div class=" px-5 py-10 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div class="h-full text-center">
                                <div className="flex items-center justify-center">
                                    <img alt="testimonial" class="w-20 h-20 mb-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 mr-2" src={test1} />

                                    <div className="">
                                        <h2 class="text-start font-medium title-font tracking-wider text-sm">Armin Sultana</h2>
                                        <p class="text-gray-500 mb-3 ">Kishoregonj, Bangladesh</p>
                                    </div>


                                </div>
                                <div class="rating mb-3">
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                </div>

                                <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span class="inline-block h-1 w-10 rounded bg-orange-500 mt-6 mb-4"></span>

                            </div>

                        </div>
                       
                        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div class="h-full text-center">
                                <div className="flex items-center justify-center">
                                    <img alt="testimonial" class="w-20 h-20 mb-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 mr-2" src={test2} />

                                    <div className="">
                                        <h2 class=" font-medium title-font tracking-wider text-sm text-start">Afroza Parvin</h2>
                                        <p class="text-gray-500 mb-3 ">Dhaka,Bangladesh</p>
                                    </div>


                                </div>
                                <div class="rating mb-3">
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"  />
                                </div>

                                <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span class="inline-block h-1 w-10 rounded bg-orange-500 mt-6 mb-4"></span>

                            </div>

                        </div>
                       
                        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div class="h-full text-center">
                                <div className="flex items-center justify-center">
                                    <img alt="testimonial" class="w-20 h-20 mb-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 mr-2" src={test3} />

                                    <div className="">
                                        <h2 class=" font-medium title-font tracking-wider text-sm text-start">Imran Hossen</h2>
                                        <p class="text-gray-500 mb-3 ">Chittagong,Bangladesh</p>
                                    </div>


                                </div>
                                <div class="rating mb-3">
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"  />
                                </div>

                                <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span class="inline-block h-1 w-10 rounded bg-orange-500 mt-6 mb-4"></span>

                            </div>

                        </div>
                       
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Review;