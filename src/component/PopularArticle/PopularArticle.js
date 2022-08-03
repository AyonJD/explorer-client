import React, { useContext } from "react";
import { articleDataContext } from "../../App";
import "./PopularArticle.css";
import PopularArticleItem from "./PopularArticleItem";

import { RiArrowRightSFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
// RiArrowDropRightFill

const PopularArticle = () => {
  const valueObj = useContext(articleDataContext);
  const navigate = useNavigate();
  // console.log(articles);
  const countPoplular = 0;
  const popularArticle = valueObj?.articles?.map((element) => {
    if (element?.blogs?.likes?.length > countPoplular) {
      return element;
    }
  });
  const popularArticleArr = [];
  popularArticle.forEach((article) => {
    if (article) {
      popularArticleArr.push(article);
    }
  });

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
                <li className="flex cursor-pointer hover:text-primary duration-300 mb-1">
                  {" "}
                  <span className="mt-1">
                    <RiArrowRightSFill></RiArrowRightSFill>
                  </span>{" "}
                  Fashion
                </li>
                <li className="flex cursor-pointer hover:text-primary duration-300 mb-1">
                  {" "}
                  <span className="mt-1">
                    <RiArrowRightSFill></RiArrowRightSFill>
                  </span>
                  Photography
                </li>
                <li className="flex cursor-pointer hover:text-primary duration-300 mb-1">
                  {" "}
                  <span className="mt-1">
                    <RiArrowRightSFill></RiArrowRightSFill>
                  </span>{" "}
                  Travel
                </li>
                <li className="flex cursor-pointer hover:text-primary duration-300 mb-1">
                  {" "}
                  <span className="mt-1">
                    <RiArrowRightSFill></RiArrowRightSFill>
                  </span>{" "}
                  Fitness
                </li>
                <li className="flex cursor-pointer hover:text-primary duration-300 mb-1">
                  {" "}
                  <span className="mt-1">
                    <RiArrowRightSFill></RiArrowRightSFill>
                  </span>{" "}
                  Food
                </li>
                <li className="flex cursor-pointer hover:text-primary duration-300 mb-1">
                  {" "}
                  <span className="mt-1">
                    <RiArrowRightSFill></RiArrowRightSFill>
                  </span>{" "}
                  Beauty
                </li>
                <li className="flex cursor-pointer hover:text-primary duration-300 mb-1">
                  {" "}
                  <span className="mt-1">
                    <RiArrowRightSFill></RiArrowRightSFill>
                  </span>
                  Make Up
                </li>
                <li className="flex cursor-pointer hover:text-primary duration-300 mb-1">
                  {" "}
                  <span className="mt-1">
                    <RiArrowRightSFill></RiArrowRightSFill>
                  </span>
                  Sport
                </li>
                <li className="flex cursor-pointer hover:text-primary duration-300 mb-1">
                  {" "}
                  <span className="mt-1">
                    <RiArrowRightSFill></RiArrowRightSFill>
                  </span>
                  Entertainment
                </li>
                <li className="flex cursor-pointer hover:text-primary duration-300 mb-1">
                  {" "}
                  <span className="mt-1">
                    <RiArrowRightSFill></RiArrowRightSFill>
                  </span>
                  Make Up
                </li>
                <li className="flex cursor-pointer hover:text-primary duration-300 mb-1">
                  {" "}
                  <span className="mt-1">
                    <RiArrowRightSFill></RiArrowRightSFill>
                  </span>
                  LifeStyle
                </li>
                <li className="flex cursor-pointer hover:text-primary duration-300 mb-1">
                  {" "}
                  <span className="mt-1">
                    <RiArrowRightSFill></RiArrowRightSFill>
                  </span>
                  Home
                </li>
                <li className="flex cursor-pointer hover:text-primary duration-300 mb-1">
                  {" "}
                  <span className="mt-1">
                    <RiArrowRightSFill></RiArrowRightSFill>
                  </span>
                  Sport
                </li>
              </ul>
            </div>
          </div>
          <div className="card shadow-xl register-card">
            <div className="card-body text-center">
              <h2 className="font-bold text-center text-warning ">
                Join Membership
              </h2>
              <h2 className=" font-bold text-warning text-xl">
                Want to access our <br /> Premium Content?
              </h2>
              <p className="text-[12px] text-warning">
                Sometimes features require a sort description. This can be
                detailed description{" "}
              </p>
              <button
                onClick={() => navigate("/register")}
                className="btn rounded-full text-white register-btn"
              >
                Register Now
              </button>
              <button className="btn btn-outline  rounded-full text-warning ">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularArticle;