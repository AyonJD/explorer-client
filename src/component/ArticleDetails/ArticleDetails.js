import { faBurger, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const { Title, Category, img, desc, author } = article;

  console.log(article);

  return (
    <section className="mid-container">
      <div className="flex items-center">
        <div class="avatar ">
          <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src="https://placeimg.com/192/192/people?fbclid=IwAR3I707HDlKOYfnctNwHpvlQjBBW6yrRafMT-7gMxgjQOQH_urWgeQgWuK4"
              alt=""
            />
          </div>
        </div>
        <p className=" text-xl mx-4 font-normal">{author}</p>
        <span className="text-xs">published on </span>
      </div>
      <p className="text-2xl font-bold text-left my-8"> {Title}</p>
      <img
        className="w-full h-[70vh]"
        src="https://placeimg.com/192/192/people?fbclid=IwAR3I707HDlKOYfnctNwHpvlQjBBW6yrRafMT-7gMxgjQOQH_urWgeQgWuK4"
        alt=""
      />
      <blockquote>
        <p className="opacity-80">{desc}</p>
        <span className="block font-bold text-2xl mt-4 ">{Category}</span>
      </blockquote>
    </section>
  );
};

export default ArticleDetails;
