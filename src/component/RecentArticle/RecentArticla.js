import React, { useContext } from "react";
import { articleDataContext } from "../../App";
import ArticleItem from "./ArticleItem";
import RecentArticleItems from "./RecentArticleItems";
import RecentArticleRight from "./RecentArticleRight";
import SocialLinked from "./SocialLinked";

const RecentArticla = () => {
  const valueObj = useContext(articleDataContext);
  const { articles } = valueObj;
  const articleCopy = [...articles];

  return (
    <section className="mid-container">
      <div className="flex w-full items-center lg:mt-16 md:mt-36 sm:mt-44 mt-16">
        <h1 className="text-3xl font-bold lg:w-72 w-72 md:w-96 sm:w-96">
          Recent Article
        </h1>
        <span className="bg-primary h-[2px] w-full article-border"></span>
      </div>
      <p className="text-sm mt-2">
        Recent articles are selected based on update published
      </p>
      <div className="mt-10 lg:flex md:flex">
        <div className="lg:w-[70%] lg:pr-10 md:pr-5 lg:py-5 md:py-5 lg:border-r-[1px] md:border-r-[1px]">
          <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-7 lg:mb-0 md:mb-0 sm:mb-5 mb-5">
            {articleCopy
              .reverse()
              .slice(0, 2)
              .map((article) => (
                <ArticleItem key={article._id} article={article}></ArticleItem>
              ))}
          </div>

          <div className="mt-5 grid lg:grid-cols-2 md:grid-cols-2 gap-x-7 gap-y-4">
            {articles.slice(0, 6).map((article) => (
              <RecentArticleItems
                key={article._id}
                article={article}
              ></RecentArticleItems>
            ))}
          </div>
        </div>
        <div className="lg:w-[30%] grid  lg:ml-5 md:ml-5 mt-10 lg:mt-0 md:mt-0">
          <div>
            <h2 className="bg-black text-white py-2 pl-3 rounded">OUR PICKS</h2>
          </div>
          <div className=" grid">
            {articles.slice(0, 4).map((article) => (
              <RecentArticleRight
                key={article._id}
                article={article}
              ></RecentArticleRight>
            ))}
          </div>
          <div>
            <SocialLinked />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentArticla;
