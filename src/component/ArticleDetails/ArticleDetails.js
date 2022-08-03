import {
  faBookmark,
  faBurger,
  faDashboard,
  faEllipsis,
  faLink,
  faPlus,
  faSave,
  faShare,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import "./ArticleDetails.css";
import { articleDataContext } from "../../App";
import Comment from "./Comment/Comment";
import { data } from "autoprefixer";

const ArticleDetails = () => {
  const { articleId } = useParams();
  const [upsertCount, setUpsertCount] = useState(false);
  const valueObj = useContext(articleDataContext);
  const { signedInUser } = valueObj;
  // console.log(signedInUser);

  // fetch article details
  const [article, setArticle] = useState({});
  const { Title, category, img, desc, date, likes, comments } = article;
  // console.log(article);

  useEffect(() => {
    fetch(`https://floating-ocean-13139.herokuapp.com/blogs/${articleId}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [articleId, article]);
  // console.log(articleId);

  // console.log(likes)

  // today's date
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const todayDate = `${yyyy}-${mm}-${dd}`;

  //Handle Like button
  const handleLike = (id) => {
    if (
      likes.includes(signedInUser?._id) === false &&
      signedInUser?._id !== undefined
    ) {
      fetch(`https://floating-ocean-13139.herokuapp.com/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          likes: [...article.likes, signedInUser._id],
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          if (data.acknowledged && likes.includes(id)) {
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
    if (likes.includes(signedInUser._id)) {
      fetch(`https://floating-ocean-13139.herokuapp.com/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          likes: likes?.filter((like) => like !== signedInUser._id),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged && likes.includes(id)) {
            setUpsertCount(true);
          } else {
            setUpsertCount(false);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  // handle comment button
  const handleComment = (e) => {
    e.preventDefault();
    // input value
    const comment = e.target.comment.value;
    // console.log(comment);

    if (!signedInUser) {
      alert("Please login to comment");
    } else {
      // send comment to server with user info
      fetch(`https://floating-ocean-13139.herokuapp.com/blogs/${articleId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comments: [...article.comments, { comment, author: signedInUser }],
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.acknowledged) {
            setUpsertCount(true);
            // clear input value
            e.target.comment.value = "";
          } else {
            setUpsertCount(false);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="mid-container">
      <section>
        <div className="flex justify-between ">
          <div className="flex items-center">
            <div className="avatar ">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://placeimg.com/192/192/people?fbclid=IwAR3I707HDlKOYfnctNwHpvlQjBBW6yrRafMT-7gMxgjQOQH_urWgeQgWuK4"
                  alt=""
                />
              </div>
            </div>
            <div className="ml-6">
              <p className="antialiased  text-lg  font-normal">
                {"MD. Mozammel Hoq 🌚"}{" "}
                <span>
                  <div className="badge badge-xs  badge-primary  ml-3 p-2">
                    Author
                  </div>
                </span>
              </p>

              <p className="text-xs mt-2 font-medium ">Published: {date}</p>
            </div>
          </div>
          <div className=" breadcrumbs">
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="icon text-secondary ml-4 "
                    title="Share"
                    icon={faShareNodes}
                  />
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="icon text-secondary ml-4"
                    title="Copy"
                    icon={faLink}
                  />
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="icon text-secondary mx-4"
                    title="More"
                    icon={faEllipsis}
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-2xl font-bold text-left my-8"> {Title}</p>
        <img
          className="w-full lg:h-[70vh] md:h[50vh] sm:h[50vh] "
          src={img}
          alt=""
        />
        <div className="flex items-center  mt-5">
          <p className="text-primary mr-4">{likes?.length} likes</p>
          {likes?.includes(signedInUser?._id) || upsertCount ? (
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
        <blockquote>
          <p className="opacity-80">{desc}</p>
          <span className="block font-bold text-2xl mt-4 ">{category}</span>
        </blockquote>
      </section>
      comment show in ui
      <section>
        {comments?.slice(-3).map((comment) => (
          <Comment key={comments.index} comment={comment}></Comment>
        ))}
      </section>
      <section>
        <form
          onSubmit={handleComment}
          className="flex flex-col  items-center space-y-6"
        >
          <textarea
            className="textarea textarea-primary w-full max-w-md"
            placeholder="Drop Your Comment Here"
            name="comment"
            required
          ></textarea>
          <button
            className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            type="submit"
          >
            Post Comment
          </button>
        </form>
      </section>
    </div>
  );
};

export default ArticleDetails;
