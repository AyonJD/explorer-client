import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import "./ArticleDetails.css";

const ArticleDetails = () => {
  const user = useAuthState(auth);
  // load article details by useParams
  const { articleId } = useParams();
  // fetch article details
  const [article, setArticle] = useState({});
  useEffect(() => {
    fetch(`https://floating-ocean-13139.herokuapp.com/blogs/${articleId}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [articleId]);
  // distructuring article details
  const { Title, Category, img, desc } = article;

  console.log(article);

  return (
    <section className="mid-container">
      <p className="text-2xl font-bold lg:text-left md:text-center mb-8">
        {" "}
        {Title}
      </p>
      <img
        className="w-full h-[70vh]"
        src="https://placeimg.com/192/192/people?fbclid=IwAR3I707HDlKOYfnctNwHpvlQjBBW6yrRafMT-7gMxgjQOQH_urWgeQgWuK4"
        alt=""
      />
      <blockquote className="text-secondary opacity-60">
        {desc}
        <span className="text-accent">{Category}</span>
      </blockquote>
    </section>
  );
};

export default ArticleDetails;
