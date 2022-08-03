import React from "react";
import { useNavigate } from "react-router-dom";
import "./ArticleItem.css";




const ArticleItem = ({ article }) => {


  // console.log(article)

  const goToDetails = useNavigate();
  const handleNavigate = () => {
    goToDetails(`/article/${article._id}`);
  };

  return (
    <div
      onClick={() => handleNavigate(article._id)}
      className=" rounded card-parent  ease-in-out duration-300 cursor-pointer"
    >
      <figure className="card-img w-full">
        <img
          className="w-full h-52 rounded-t card-image"
          src={article?.img}
          alt="author-img"
        />
      </figure>
      <div className="card-body p-0">
        <h2 className="lg:h-12 md:h-12 font-semibold hover:text-primary mt-2">
          {article?.Title?.slice(0, 50)}...
        </h2>
        <p className="text-xs">By <span className="text-primary">{article?.author}</span> - January 10, 2021</p>
        <p className="text-sm font-normal" title={article?.desc}>
          {article?.desc?.slice(0, 70)}...
        </p>
      </div>
    </div>
  );
};

export default ArticleItem;
