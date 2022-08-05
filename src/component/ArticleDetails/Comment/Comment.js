import React from "react";

const Comment = ({ comment }) => {
  // console.log(comment?.author?.userInfo);
  return (
    <div className="flex gap-3 mb-5">
      <div>
        <img className="rounded-full w-10 mt-1" src={comment?.author?.userInfo?.photoURL} alt="" />
      </div>
      <div className="">
        <div className="bg-neutral py-2 px-3 rounded-2xl text-warning">
          <h6 className="font-bold text-sm cursor-pointer">{comment?.author?.userInfo?.name}</h6>
          <p className="text-sm">{comment?.comment}</p>
        </div>
        <div className="flex gap-4 text-sm font-semibold mt-1 ml-2">
          <h6 className="cursor-pointer">Like</h6>
          <h6 className="cursor-pointer">Reply</h6>
        </div>
      </div>
    </div>
  );
};

export default Comment;