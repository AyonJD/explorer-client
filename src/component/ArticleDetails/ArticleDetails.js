import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

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
  const { Title, Category, img } = article;

  console.log(article);

  return (
    <section className="mid-container">
      <p className="text-2xl font-bold text-left"> {Title}</p>
      <img src={img} alt="" />
    </section>
  );
};

export default ArticleDetails;
