import { faEllipsis, faLink, faShareNodes, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import "./ArticleDetails.css";
import { articleDataContext } from "../../App";
import Comment from "./Comment/Comment";
import AllArticleItemsRight from "../Article/AllArticle/AllArticleItemsRight";
import ArticleItemsRight from "../Article/AllArticle/ArticleItemsRight";
import SocialLinked from "../RecentArticle/SocialLinked";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import RegisterCard from "../PopularArticle/RegisterCard";
import RelativeArticle from "./RelativeArticle";

const ArticleDetails = () => {
  const { articleId } = useParams();
  const [upsertCount, setUpsertCount] = useState(false);
  const valueObj = useContext(articleDataContext);
  const { signedInUser } = valueObj;
  const authUser = useAuthState(auth)
  const navigate = useNavigate()
  const user = authUser[0]?.email
  const articles = valueObj.articles
  const dark = valueObj.dark
  // fetch article details
  const [article, setArticle] = useState({});
  const author = article?.signedInUser?.userInfo?.name;

  useEffect(() => {
    fetch(`https://floating-ocean-13139.herokuapp.com/blogs/${articleId}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [articleId, article]);

  // today's date
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const todayDate = `${yyyy}-${mm}-${dd}`;

  //Handle Like button
  const handleLike = (id) => {
    if (
      article?.likes.includes(signedInUser?._id) === false &&
      signedInUser?._id !== undefined
    ) {
      // console.log([...article.blogs.likes, signedInUser._id])
      fetch(`https://floating-ocean-13139.herokuapp.com/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          likes: [...article?.likes, signedInUser._id],
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.acknowledged && article?.likes.includes(id)) {
            setUpsertCount(true);
          } else {
            setUpsertCount(false);
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please login to like this article");
    }
  };

  //Handle Unlike button
  const handleUnlike = (id) => {
    if (article?.likes.includes(signedInUser._id)) {
      fetch(`https://floating-ocean-13139.herokuapp.com/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          likes: article?.likes?.filter(like => like !== signedInUser._id),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged && article?.likes.includes(id)) {
            setUpsertCount(true);
          } else {
            setUpsertCount(false);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  // console.log(article?.likes)

  // handle comment button
  const handleComment = (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/login')
      return
    }
    // input value
    const comment = e.target.comment.value;
    // console.log(comment);
    // clear input value
    e.target.comment.value = "";
    // send comment to server with user info
    fetch(`https://floating-ocean-13139.herokuapp.com/blogs/${articleId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comments: [...article?.comments, { comment, author: signedInUser }],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setUpsertCount(true);
        } else {
          setUpsertCount(false);
        }
      })
      .catch((err) => console.log(err));
  };

  // console.log(article?.signedInUser?.userInfo?.photoURL)

  return (
    <div className="mid-container">
      <div className="lg:flex md:flex">
        <div className="lg:w-[70%] md:w-[70%] lg:mb-0 md:mb-0 sm:mb-5 mb-5 lg:border-r-[1px] md:border-r-[1px] lg:pr-8 md:pr-5">
          <section>
            <div className="flex justify-between ">
              <div className="flex items-center">
                <div className="avatar ">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={article?.signedInUser?.userInfo?.photoURL} alt="" />
                  </div>
                </div>
                <div className="ml-6">
                  <p className="antialiased  text-lg  font-normal">
                    {author ? author : "MD. Mozammel Hoq 🌚"}{" "}
                    <span>
                      <div className="badge badge-xs  badge-primary  ml-3 p-2"> Author  </div>
                    </span>
                  </p>
                  <p className="text-xs mt-1 font-medium ">
                    Published: {article?.blogs?.date}
                  </p>
                </div>
              </div>
              <div className=" breadcrumbs">
                <ul>
                  <li>
                    <span><FontAwesomeIcon className="icon text-secondary ml-4 " title="Share" icon={faShareNodes} /> </span>
                  </li>

                  <li>
                    <span><FontAwesomeIcon className="icon text-secondary ml-4" title="Copy" icon={faLink} /> </span>
                  </li>

                  <li>
                    <span><FontAwesomeIcon className="icon text-secondary mx-4" title="More" icon={faEllipsis} /></span>
                  </li>

                </ul>
              </div>
            </div>
            <p className="text-2xl font-bold text-left my-8"> {article?.blogs?.Title}</p>
            <div className="lg:h-[440px] md:h-[360px] sm:h[50vh] w-full text-center overflow-hidden">
              <img className="w-full  mx-auto" src={article?.blogs?.img} alt="" />
            </div>
            <div className="flex items-center  mt-5">
              <p className="text-primary mr-4">{article?.likes?.length} likes</p>
              {article?.likes?.includes(signedInUser?._id) || upsertCount ? (
                <IoMdThumbsDown
                  className="thumbs_down h-8 w-8 cursor-pointer"
                  onClick={() => handleUnlike(articleId)}
                />
              ) : (
                <IoMdThumbsUp
                  className="thumbs_up mr-2 h-8 w-8 cursor-pointer"
                  onClick={() => handleLike(articleId)}
                />
              )}
            </div>
            <blockquote className="mb-5">
              <p className="opacity-70 text-normal ">{article?.blogs?.desc}</p>
              {/* <span className="block font-bold text-2xl mt-4 ">{article?.blogs?.Category}</span> */}
            </blockquote>
          </section>
          <h1 className="mb-2 text-xl"> Recent comments</h1> <hr className="mb-7" />
          <section>
            {article?.comments?.slice(-3).reverse().map((comment) => (
              <Comment comment={comment} ></Comment>
            ))}
            {/* <button >Show more</button> */}
          </section>
          <section>
            <form onSubmit={handleComment} className={dark ? "lg:space-y-6 md:space-y-5 sm:space-y-6 space-y-4 lg:py-8 md:py-8 sm:py-5 py-5 lg:px-6 md:px-6 px-4 rounded-md " : "lg:space-y-6 md:space-y-5 sm:space-y-6 space-y-4 lg:py-8 md:py-8 sm:py-5 py-5 lg:px-6 md:px-6 px-4 rounded-md bg-neutral"}>
              <h6 className="font-semibold">LEAVE A REPLAY</h6>
              <textarea
                className="textarea input-bordered focus:outline-none w-full lg:h-36 md:h-28 sm:h-36 h-24 mt-0"
                placeholder="Your Comment"
                name="comment"
                required>
              </textarea>
              <button className="btn btn-primary btn-md" type="submit" > Post Comment
              </button>
            </form>
          </section>
        </div>


        <div className="lg:w-[30%] md:w-[30%] lg:pl-8 md:pl-5">
          <div>
            <h1 className="font-bold text-xl  pb-2">
              Top Articles
              <hr className='mt-1' />
            </h1>

            <div className='grid'>
              {articles.slice(0, 4).map((article) => (
                <AllArticleItemsRight
                  key={article._id}
                  article={article}
                ></AllArticleItemsRight>
              ))}
            </div>
          </div>

          <div className='mt-5'>
            <SocialLinked />
          </div>

          <div>
            <h1 className="font-bold text-xl pb-5 mt-10">
              Don't Miss
              <hr className='mt-1' />
            </h1>
            <ArticleItemsRight />
          </div>

          <div className="mt-8">
            <RegisterCard />
          </div>
        </div>


      </div>

      <div className="relative-article mt-10">
        <h1 className="text-3xl font-bold">Related Article</h1><hr className="mb-10 mt-3" />
        <div className=" grid grid-cols-3 gap-5 ">
          {
            articles.slice(0, 3).map((article) => <RelativeArticle
              article={article}
            />)
          }
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
