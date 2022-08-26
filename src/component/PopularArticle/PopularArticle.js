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

  const { articles, setCategoryArticle } = valueObj

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

  // category wise article count
  const handleCatWiseCount = (category) => {
    let catWiseCount = 0;
    articles.forEach(article => {
      if (article?.blogs?.category === category) {
        catWiseCount++;
      }
    });
    return catWiseCount;
  }
  const travelCount = handleCatWiseCount("Travel");
  const photographyCount = handleCatWiseCount("Photography");
  const foodCount = handleCatWiseCount("Food");
  const conceptsCount = handleCatWiseCount("Concepts");
  const lifestyleCount = handleCatWiseCount("Lifestyle");
  const fitnessCount = handleCatWiseCount("Fitness");
  const beautyCount = handleCatWiseCount("Beauty");
  const fashionCount = handleCatWiseCount("Fashion");
  const makeupCount = handleCatWiseCount("Makeup");
  const sportCount = handleCatWiseCount("Sport");
  const entertainmentCount = handleCatWiseCount("Entertainment");



  return (
    <div className="mid-container">
      <div className='flex w-full items-center border-b-[1px] pb-3 mb-5'>
        <h1 className='text-2xl font-semibold '>Popular Article</h1>
      </div>
      <div className="mt-5 lg:flex md:flex">
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
                  Fashion <span className="mx-2"> ({fashionCount})</span>
                </Link>
                </li>

                <li onClick={() => setCategoryArticle('Photography')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Photography <span className="mx-2"> ({photographyCount})</span>
                </Link>
                </li>

                <li onClick={() => setCategoryArticle('Travel')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Travel  <span className="mx-2"> ({travelCount})</span>
                </Link>
                </li>

                <li onClick={() => setCategoryArticle('Fitness')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Fitness <span className="mx-2"> ({fitnessCount})</span>
                </Link></li>

                <li onClick={() => setCategoryArticle('Food')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Food <span className="mx-2"> ({foodCount})</span>
                </Link></li>

                <li onClick={() => setCategoryArticle('Beauty')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Beauty <span className="mx-2"> ({beautyCount})</span>
                </Link></li>

                <li onClick={() => setCategoryArticle('MakeUp')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  MakeUp <span className="mx-2"> ({makeupCount})</span>
                </Link></li>
                <li onClick={() => setCategoryArticle('Sport')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Sport <span className="mx-2"> ({sportCount})</span>
                </Link></li>

                <li onClick={() => setCategoryArticle('Entertainment')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Entertainment <span className="mx-2"> ({entertainmentCount})</span>
                </Link></li>

                <li onClick={() => setCategoryArticle('Lifestyle')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Lifestyle <span className="mx-2"> ({lifestyleCount})</span>
                </Link></li>

                <li onClick={() => setCategoryArticle('Concepts')} className="cursor-pointer hover:text-primary duration-300 mb-1"><Link className="flex" to='/search-category'> <span className="mt-1"><RiArrowRightSFill /> </span>
                  Concepts <span className="mx-2"> ({conceptsCount})</span>
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