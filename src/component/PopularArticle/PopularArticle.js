import React, { useContext } from "react";
import { articleDataContext } from "../../App";
import "./PopularArticle.css";
import PopularArticleItem from "./PopularArticleItem";

import { RiArrowRightSFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import RegisterCard from "./RegisterCard";
// RiArrowDropRightFill

const PopularArticle = () => {
  const valueObj = useContext(articleDataContext);

  const { setCategoryArticle } = valueObj

  // console.log(articles);
  const countPoplular = 0;
  const popularArticle = valueObj?.articles?.map((element) => {
    if (element?.likes?.length > countPoplular) {
      return element;
    }
  });

  const popularArticleArr = [];
  popularArticle.forEach((article) => {
    if (article) {
      popularArticleArr.push(article);
    }
  });

  // console.log(popularArticleArr)

  return (
    <div className="mid-container">
      <div className="flex w-full items-center ">
        <h1 className="text-3xl font-bold  lg:w-72 md:w-96 sm:w-96 ">
          Popular Article
        </h1>
        <span className="bg-primary h-[2px] w-full article-border"></span>
      </div>
      <p className="text-sm mt-2">
        Popular articles are selected based on the number of readers
      </p>
      <div className="mt-10 lg:flex md:flex">
        <div className="lg:w-3/4 md:w-[70%] grid gap-5 lg:mb-0 md:mb-0 sm:mb-5 mb-5">
          {popularArticleArr.slice(0, 3).map((article) => (
            <PopularArticleItem
              key={article._id}
              article={article}
            ></PopularArticleItem>
          ))}
        </div>
        <div className="lg:w-1/4 md:w-[30%] grid  lg:ml-5 md:ml-5 gap-5">
          <div className="card  bg-base-100 shadow-xl border">
            <div className="card-body">
              <h2 className="text-xl font-bold text-center"> All Category</h2>
              <ul className="pl-5 mt-5 ">

                <li onClick={() => setCategoryArticle('Fashion')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Fashion
                </Link>
                </li>

                <li onClick={() => setCategoryArticle('Photography')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Photography
                </Link>
                </li>

                <li onClick={() => setCategoryArticle('Travel')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Travel
                </Link>
                </li>

                <li onClick={() => setCategoryArticle('Fitness')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Fitness
                </Link></li>

                <li onClick={() => setCategoryArticle('Food')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Food
                </Link></li>

                <li onClick={() => setCategoryArticle('Beauty')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Beauty
                </Link></li>

                <li onClick={() => setCategoryArticle('MakeUp')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  MakeUp
                </Link></li>
                <li onClick={() => setCategoryArticle('Sport')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Sport
                </Link></li>

                <li onClick={() => setCategoryArticle('Entertainment')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Entertainment
                </Link></li>

                <li onClick={() => setCategoryArticle('Lifestyle')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Lifestyle
                </Link></li>

                <li onClick={() => setCategoryArticle('Concepts')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Concepts
                </Link></li>
              </ul>
            </div>
          </div>
          <div>
            <RegisterCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularArticle;