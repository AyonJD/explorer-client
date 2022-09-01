import {
  faEdit,
  faEllipsis,
  faLink,
  faShare,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
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
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";

const ArticleDetails = () => {
  const { articleId } = useParams();
  const [upsertCount, setUpsertCount] = useState(false);
  const valueObj = useContext(articleDataContext);
  const { signedInUser } = valueObj;
  const authUser = useAuthState(auth);
  const navigate = useNavigate();
  const user = authUser[0]?.email;
  const articles = valueObj.articles;
  const dark = valueObj.dark;
  const url = window.location.href;
  const [isCopied, setIsCopied] = useState(false);
  
  


  // copy text to clipboard on click of copy button
  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  // fetch article details
  const [article, setArticle] = useState({});
  // console.log(article);
  const author = article?.signedInUser?.userInfo?.name;

  useEffect(() => {
    fetch(`https://floating-ocean-13139.herokuapp.com/blogs/${articleId}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [articleId, article]);

  const relatedArticle = articles.filter((item) => {
    if (item?.blogs?.category === article?.blogs?.category) {
      return item;
    }
  });
  // console.log(relatedArticle);
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
          console.log(data);
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
          likes: article?.likes?.filter((like) => like !== signedInUser._id),
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
      navigate("/login");
      return;
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

  
  // article delete by id from server
  // const handleDelete = (articleId) => {
  //   fetch(`https://floating-ocean-13139.herokuapp.com/blogs/${articleId}`, {
  //     method: "DELETE",
  //   })

  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.deletedCount) {
  //         navigate("/");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };






  
  
  

  return (
    <div className="mid-container">
      <div className="lg:flex md:flex">
        <div className="lg:w-[70%] md:w-[70%] lg:mb-0 md:mb-0 sm:mb-5 mb-5 lg:border-r-[1px] md:border-r-[1px] lg:pr-8 md:pr-5">
          <section>
            <div className="flex justify-between ">
              <div className="flex items-center">
                <div className="avatar ">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src={article?.signedInUser?.userInfo?.photoURL}
                      alt=""
                    />
                  </div>
                </div>
                <div className="ml-6">
                  <p className="antialiased  text-lg  font-normal flex">
                    {author}{" "}
                    <span className=" sm:block hidden">
                      <div className="badge badge-xs badge-primary  ml-3 p-2">
                        {" "}
                        Author{" "}
                      </div>
                    </span>
                  </p>
                  <p className="text-xs mt-1 font-medium ">
                    Published: {article?.blogs?.date}
                  </p>
                </div>
              </div>
              <div className=" details-menu">
                <ul>
                  {/* <li>
                    <span><FontAwesomeIcon className="icon text-secondary ml-4 " title="Share" icon={faShareNodes} /> </span>
                  </li> */}
                  <li className="dropdown dropdown-end">
                    <label tabindex="0">
                      <FontAwesomeIcon
                        className=" text-[10px] text-secondary  btn btn-xs btn-ghost"
                        title="Share"
                        icon={faShareNodes}
                      />
                    </label>
                    <ul
                      tabindex="0"
                      class="dropdown-content menu p-2 drop-shadow-xl  rounded-box  bg-base-200"
                    >
                      
                      <li>
                      <a>
                      <FacebookShareButton url={url}>
                        <FacebookIcon round={true} size={25}></FacebookIcon>
                      </FacebookShareButton>
                      </a>
                  </li>
                  <li>
                      <a>
                      <TwitterShareButton url={url}>
                        <TwitterIcon round={true} size={25}></TwitterIcon>
                      </TwitterShareButton>
                      </a>
                  </li>
                  <li>
                      <a>
                      <LinkedinShareButton url={url}>
                        <LinkedinIcon round={true} size={25}></LinkedinIcon>
                      </LinkedinShareButton>
                      </a>
                  </li>
                  <li>
                      <a>
                      <WhatsappShareButton url={url}>
                        <WhatsappIcon round={true} size={25}></WhatsappIcon>
                      </WhatsappShareButton>
                      </a>
                  </li>
                      
                    </ul>
                  </li>
                  
                  <li className="dropdown dropdown-end">
                    <label tabindex="0">
                      <CopyToClipboard text={url} onCopy={handleCopy}>
                        <button>
                          <FontAwesomeIcon
                            className="icon text-secondary  btn btn-ghost btn-xs"
                            title="Copy"
                            icon={faLink}
                          />
                        </button>
                      </CopyToClipboard>{" "}
                    </label>
                    <div
                      tabindex="0"
                      class="card compact dropdown-content shadow bg-base-100 rounded-box"
                    >
                      {isCopied ? (
                        
                        <div class="alert alert-success shadow-lg text-white">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="stroke-current flex-shrink-0 h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span >Copied</span>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    {/* <span className={`copy-feedback text-sm ${isCopied ? "active" : ""}`} style={{ color: "green" }}>
                      Copied
                    </span> */}
                  </li>
                  {/* edit and  delete option  */}
                  <li className="dropdown dropdown-end">
                    <label tabindex="0">
                      <FontAwesomeIcon
                        className="icon text-secondary  btn btn-xs btn-ghost"
                        title="More"
                        icon={faEllipsis}
                      />
                    </label>
                    <ul
                      tabindex="0"
                      class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
                    >
                      
                      <li>
                        <a>Edit Article</a>
                      </li>
                      {
                        
                        
                          // signedInUser inside if admin is true ? he can see delete button : else he can't see delete button
                          signedInUser?.admin === true ? (
                            <li>
                              <a >Delete Article</a>
                            </li>
                          ) : (
                            ""
                          )
                          
                        
                        

                      }
                      
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-2xl font-bold text-left my-8">
              {" "}
              {article?.blogs?.Title}
            </p>
            <div className="lg:h-[440px] md:h-[360px] sm:h[50vh] w-full text-center overflow-hidden">
              <img
                className="w-full  mx-auto"
                src={article?.blogs?.img}
                alt=""
              />
            </div>
            <div className="flex items-center  mt-5">
              <p className="text-primary mr-4">
                {article?.likes?.length} likes
              </p>
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
          <h1 className="mb-2 text-xl"> Recent comments</h1>{" "}
          <hr className="mb-7" />
          <section>
            {article?.comments
              ?.slice(-3)
              .reverse()
              .map((comment) => (
                <Comment comment={comment}></Comment>
              ))}
            {/* <button >Show more</button> */}
          </section>
          <section>
            <form
              onSubmit={handleComment}
              className={
                dark
                  ? "lg:space-y-6 md:space-y-5 sm:space-y-6 space-y-4 lg:py-8 md:py-8 sm:py-5 py-5 lg:px-6 md:px-6 px-4 rounded-md "
                  : "lg:space-y-6 md:space-y-5 sm:space-y-6 space-y-4 lg:py-8 md:py-8 sm:py-5 py-5 lg:px-6 md:px-6 px-4 rounded-md bg-neutral"
              }
            >
              <h6 className="font-semibold">LEAVE A REPLAY</h6>
              <textarea
                className="textarea input-bordered focus:outline-none w-full lg:h-36 md:h-28 sm:h-36 h-24 mt-0"
                placeholder="Your Comment"
                name="comment"
                required
              ></textarea>
              <button className="btn btn-primary btn-md" type="submit">
                {" "}
                Post Comment
              </button>
            </form>
          </section>
        </div>

        <div className="lg:w-[30%] md:w-[30%] lg:pl-8 md:pl-5">
          <div>
            <h1 className="font-bold text-xl  pb-2">
              Top Articles
              <hr className="mt-1" />
            </h1>

            <div className="grid">
              {articles.slice(0, 4).map((article) => (
                <AllArticleItemsRight
                  key={article._id}
                  article={article}
                ></AllArticleItemsRight>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <SocialLinked />
          </div>

          <div>
            <h1 className="font-bold text-xl pb-5 mt-10">
              Don't Miss
              <hr className="mt-1" />
            </h1>
            <ArticleItemsRight />
          </div>

          <div className="mt-8">
            <RegisterCard />
          </div>
        </div>
      </div>

      <div className="relative-article mt-10">
        <h1 className="text-3xl font-bold">Related Article</h1>
        <hr className="mb-10 mt-3" />
        <div className=" grid md:grid-cols-3 sm:grid-cols-2 gap-5 mb-3">
          {relatedArticle.slice(0, 3).map((article) => (
            <RelativeArticle article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;