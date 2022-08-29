import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import "./ArticleItem.css";




const ArticleItem = ({ article }) => {
  const navigate = useNavigate();
  const goToDetails = useNavigate();
  const handleNavigate = () => {
    if (article.blogs.premium === "Premium") {
      toast.error("This is a premium articles");
      navigate(`/membership`);
      return;
    } else {
      goToDetails(`/article/${article._id}`);
    }


  };

  return (
    <div
      onClick={() => handleNavigate(article._id)}
      className=" rounded card-parent  ease-in-out duration-300 cursor-pointer"
    >
      <figure className="card-img w-full">
        <img
          className="w-full h-52 rounded-t card-image"
          src={article?.blogs?.img}
          alt="author-img"
        />
      </figure>
      <div className="card-body p-0">
        <h2 className="lg:h-10 md:h-10 font-semibold mt-2 hover:text-[#da334a]">
          {article?.blogs?.Title?.slice(0, 50)}...
        </h2>
        <p className="text-xs">By <span className="text-primary">{article?.signedInUser?.userInfo?.name}</span> - January 10, 2021</p>
        <p className="text-sm font-normal" title={article?.blogs?.desc}>
          {article?.blogs?.desc?.slice(0, 70)}...
        </p>
      </div>
    </div>
  );
};

export default ArticleItem;
