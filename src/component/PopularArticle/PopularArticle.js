<<<<<<< HEAD
import React from "react";
import img1 from "../../assets/blog-img/news-1.jpg";

const PopularArticle = () => {
  return (
    <div className="mid-container">
      <h1 className="text-3xl font-bold"> Popular Article</h1>
      <p>
        <small>
          Popular articles are selected based on the number of readers
        </small>
      </p>

      <div className="mt-10">
        <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-2 gap-5 border mb-8">
          <figure className="w-full">
            <img className="w-full" src={img1} alt="Album" />
          </figure>
          <div className="p-5 flex items-center">
            <div>
              <p className="text-sm">Jan 24, 2022</p>
              <h1 className="text-xl font-bold my-2">
                Stimulation Child's Sensory and Motor Development
              </h1>
              <p className="text-sm">
                The objective of this study is to assess the findings of
                selected articles regarding the therapeutic...
              </p>
              <div className="flex gap-5 items-center mt-5">
                <div className="avatar">
                  <div className="lg:w-12 md:w-10 sm:w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold ">Bithika Abhedancada</h2>
                  <p className="text-sm">Study Power CEO</p>
                </div>
              </div>
            </div>
          </div>
=======
import React, { useContext } from 'react';
import { articleDataContext } from '../../App';
import './PopularArticle.css'
import PopularArticleItem from './PopularArticleItem';

import { RiArrowRightSFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
// RiArrowDropRightFill


const PopularArticle = () => {
    const valueObj = useContext(articleDataContext);
    // console.log(articles);
    const countPoplular = 20;
    const popularArticle = valueObj?.articles?.map(element => {
        if (element.popularity > countPoplular) {
            return element
        }
    });
    const popularArticleArr = [];
    popularArticle.forEach(article => {
        if (article) {
            popularArticleArr.push(article);
        }
    });
    // console.log(popularArticleArr);

    const navigate = useNavigate()
    return (
        <div className='mid-container'>
            <div className='flex w-full items-center '>
                <h1 className='text-3xl font-bold  lg:w-72 md:w-96 sm:w-96 '>Popular Article</h1>
                <span className='bg-primary h-[2px] w-full article-border'></span>
            </div>
            <p className='text-sm mt-2'>Popular articles are selected based on the number of readers</p>
            <div className='mt-10 lg:flex md:flex'>
                <div className='lg:w-3/4 grid gap-5 lg:mb-0 md:mb-0 sm:mb-5 mb-5'>
                    {
                        popularArticleArr.slice(0, 4).map(article => <PopularArticleItem
                            key={article._id}
                            article={article}
                        ></PopularArticleItem>)
                    }
                </div>
                <div className='lg:w-1/4 grid  ml-5 gap-5'>
                    <div class="card  bg-base-100 shadow-xl border">
                        <div class="card-body">
                            <h2 className='text-xl font-bold text-center'> All Category</h2>
                            <ul className='pl-5 mt-5 '>
                                <li className='flex cursor-pointer hover:text-primary duration-300 mb-1'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span> Fashion</li>
                                <li className='flex cursor-pointer hover:text-primary duration-300 mb-1'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span>Photography</li>
                                <li className='flex cursor-pointer hover:text-primary duration-300 mb-1'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span> Travel</li>
                                <li className='flex cursor-pointer hover:text-primary duration-300 mb-1'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span> Fitness</li>
                                <li className='flex cursor-pointer hover:text-primary duration-300 mb-1'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span> Food</li>
                                <li className='flex cursor-pointer hover:text-primary duration-300 mb-1'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span> Beauty</li>
                                <li className='flex cursor-pointer hover:text-primary duration-300 mb-1'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span>Make Up</li>
                                <li className='flex cursor-pointer hover:text-primary duration-300 mb-1'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span>Sport</li>
                                <li className='flex cursor-pointer hover:text-primary duration-300 mb-1'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span>Entertainment</li>
                                <li className='flex cursor-pointer hover:text-primary duration-300 mb-1'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span>Make Up</li>
                                <li className='flex cursor-pointer hover:text-primary duration-300 mb-1'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span>LifeStyle</li>
                                <li className='flex cursor-pointer hover:text-primary duration-300 mb-1'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span>Home</li>
                                <li className='flex cursor-pointer hover:text-primary duration-300 mb-1'> <span className='mt-1'><RiArrowRightSFill></RiArrowRightSFill></span>Sport</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card shadow-xl register-card">
                        <div class="card-body text-center">
                            <h2 className='font-bold text-center text-warning '>Join Membership</h2>
                            <h2 className=' font-bold text-warning text-xl'>Want to access our <br /> Premium Content?</h2>
                            <p className='text-[12px] text-warning'>Sometimes features require a sort description. This can be detailed description </p>
                            <button onClick='/register' class="btn rounded-full text-white register-btn">Register Now</button>
                            <button class="btn btn-outline  rounded-full text-warning ">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>

>>>>>>> 0e0061769c68d926bd72f86a2c787a7ea931ee2e
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-2 gap-5 border mb-8">
          <figure className="w-full">
            <img className="w-full" src={img1} alt="Album" />
          </figure>
          <div className="p-5 flex items-center">
            <div>
              <p className="text-sm">Jan 24, 2022</p>
              <h1 className="text-xl font-bold my-2">
                Stimulation Child's Sensory and Motor Development
              </h1>
              <p className="text-sm">
                The objective of this study is to assess the findings of
                selected articles regarding the therapeutic...
              </p>
              <div className="flex gap-5 items-center mt-5">
                <div className="avatar">
                  <div className="lg:w-12 md:w-10 sm:w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold ">Bithika Abhedancada</h2>
                  <p className="text-sm">Study Power CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-2 gap-5  border mb-8">
          <figure className="w-full">
            <img className="w-full" src={img1} alt="Album" />
          </figure>
          <div className="p-5 flex items-center">
            <div>
              <p className="text-sm">Jan 24, 2022</p>
              <h1 className="text-xl font-bold my-2">
                Stimulation Child's Sensory and Motor Development
              </h1>
              <p className="text-sm">
                The objective of this study is to assess the findings of
                selected articles regarding the therapeutic...
              </p>
              <div className="flex gap-5 items-center mt-5">
                <div className="avatar">
                  <div className="lg:w-12 md:w-10 sm:w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold ">Bithika Abhedancada</h2>
                  <p className="text-sm">Study Power CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-2 gap-5  border mb-8">
          <figure className="w-full">
            <img className="w-full" src={img1} alt="Album" />
          </figure>
          <div className="p-5 flex items-center">
            <div>
              <p className="text-sm">Jan 24, 2022</p>
              <h1 className="text-xl font-bold my-2">
                Stimulation Child's Sensory and Motor Development
              </h1>
              <p className="text-sm">
                The objective of this study is to assess the findings of
                selected articles regarding the therapeutic...
              </p>
              <div className="flex gap-5 items-center mt-5">
                <div className="avatar">
                  <div className="lg:w-12 md:w-10 sm:w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold ">Bithika Abhedancada</h2>
                  <p className="text-sm">Study Power CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularArticle;
