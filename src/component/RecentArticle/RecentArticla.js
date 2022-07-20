import React from 'react';

const RecentArticla = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section className='mid-container'>
            <div className="">
                <h1 className='text-5xl mt-24'>Recent Article</h1>
                <p className='mt-2'>Recent Article are selected based on the number of readers</p>
            </div>
            <div className="grid grid-cols-3 mt-10 gap-0  ">
                <div class="  bg-base-100 shadow-xl w-[370px] ">
                    <figure><img className='w-full h-[267px]' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="">
                            {year}

                        </h2>
                        <h1 className='text-xl font-bold'>Child's Sensory and Motor, Developmentt</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est perferendis ipsam aliquam.</p>
                    </div>
                    <div className="flex  items-center ml-6 ">
                    <div class="avatar ">
                        <div class="w-[36px] h-[36px] mt-2 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                        <div className="ml-2">
                            <h1 className='font-bold'>Armin Sultana</h1>
                            <h1 className='text-small'>Study power CEO</h1>
                        </div>
                    </div>
                    </div>
                </div>
                <div class=" bg-base-100 shadow-xl w-[370px]">
                    <figure><img className='w-full h-[267px]' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="">
                            {year}

                        </h2>
                        <h1 className='text-xl font-bold'>Master Buisness Class English for your buisness</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est perferendis ipsam aliquam.</p>
                    </div>
                    <div className="flex  items-center ml-6 ">
                    <div class="avatar ">
                        <div class="w-[36px] h-[36px] mt-2 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                        <div className="ml-2">
                            <h1 className='font-bold'>Arifa Akter Chaity</h1>
                            <h1 className='text-small'>Study power CEO</h1>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="  bg-base-100 shadow-xl w-[370px]">
                    <figure><img className='w-full h-[267px]' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="">
                            {year}

                        </h2>
                        <h1 className='text-xl font-bold'>Algorima Math aljabar,geometri aritmatika</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est perferendis ipsam aliquam.</p>
                    </div>
                    <div className="flex  items-center ml-6 ">
                    <div class="avatar ">
                        <div class="w-[36px] h-[36px] mt-2 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                        <div className="ml-2">
                            <h1 className='font-bold'>Imran Hussain</h1>
                            <h1 className='text-small'>Study power CEO</h1>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentArticla;