import React from "react";
import { useNavigate } from "react-router-dom";
import "./PopularArticle.css";

const PopularArticleItem = ({ article }) => {
  const { Title, Category, img, desc, author, _id } = article;
  // console.log(" popular article : ", article);
  const goToDetails = useNavigate();
  const handleClick = () => {
    goToDetails(`/article/${article._id}`);
  };
 const authorImg = article?.signedInUser?.userInfo?.photoURL

  return (
    <div
      onClick={() => handleClick(_id)}
      className="hero border-b-[1px] pb-5 popular-card "
    >
      <div className="hero-content grid lg:grid-cols-2 md:grid-cols-1 p-0 ">
        <div className="h-52 w-full cursor-pointer">
          <img
            src={article?.blogs?.img}
            className=" h-52 lg:max-w-sm md:max-w-lg w-full  rounded-lg shadow-2xl "
            alt=""
          />
        </div>
        <div className="p-3 flex items-center cursor-pointer">
          <div>
            <p className="text-sm">{article?.blogs?.date}</p>
            <h2 className="font-bold my-2 hover:text-[#da334a] cursor-pointer">
              {article?.blogs?.Title?.slice(0, 70)}
            </h2>
            <p className="text-sm">
              {article?.blogs?.desc?.slice(0, 100)}...
            </p>
            <div className="flex gap-3 items-center mt-3">
              <div className="avatar">
                <div className="lg:w-12 md:w-14 sm:w-16 w-14 rounded-full">
                  <img src={authorImg} alt="" />
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-sm cursor-pointer">
                  {article?.signedInUser?.userInfo?.name}
                </h2>
                <p className="text-sm font-medium">
                  <small>Backend Developer</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularArticleItem;