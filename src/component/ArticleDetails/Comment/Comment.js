import React from "react";

const Comment = ({ comment }) => {
  // console.log(comment?.author?.userInfo);
  return (
    <div className="flex items-center gap-3 mb-5">
      <img className="rounded-full w-16" src={comment?.author?.userInfo?.photoURL} alt="" />
      <div>
        <h6 className="font-bold">{comment?.author?.userInfo?.name}</h6>
        <h1>{comment?.comment}</h1>
      </div>
    </div>
  );
};

export default Comment;
