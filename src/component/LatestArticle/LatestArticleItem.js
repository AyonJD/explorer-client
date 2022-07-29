import React from "react";
import { useNavigate } from "react-router-dom";

const LatestArticleItem = ({ article }) => {
  // article distructuring
  const { Title, Category, img, desc, author, date, _id } = article;
  const goToDetails = useNavigate();
  const handleClick = () => {
    goToDetails(`/article/${article._id}`);
  };

  return (
    <div onClick={() => handleClick(_id)} class="card shadow-xl bg-neutral">
      <figure>
        <img
          className="w-full"
          src={img}
          alt="blog"
        />
      </figure>
      <div class="card-body text-warning px-5 py-8">
        <div className="flex justify-between items-center">
          <div class="badge bg-primary ">Lifestyle</div>
          <div className="text-sm">Jan 24, 2022</div>
        </div>
        <h1 className="text-xl font-bold">{article.Title}</h1>
        <p className="text-sm">{article?.desc?.slice(0, 100)}...</p>
      </div>
    </div>
  );
};

export default LatestArticleItem;
