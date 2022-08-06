import React, { useState } from "react";

const Comment = ({ comment }) => {
  const [hover, setHover] = useState(false)
  // console.log(comment);
  return (
<<<<<<< HEAD
    <div className="flex items-center gap-3 mb-5">
      <img
        className="rounded-full w-16"
        src={comment?.author?.userInfo?.photoURL}
        alt=""
      />
=======
    <div className="flex gap-3 mb-5 w-full">
>>>>>>> 45af8e99dab647f12ede1d3b3e3c51ca857f8851
      <div>
        <img className="rounded-full w-10 mt-1" src={comment?.author?.userInfo?.photoURL} alt="" />
      </div>
      <div >
        <div onMouseLeave={() => setHover(false)} className="flex items-center gap-2 w-[100%]">
          <div onMouseEnter={() => setHover(true)} className="bg-neutral py-2 px-3 rounded-2xl text-warning">
            <h6 className="font-bold text-sm cursor-pointer">{comment?.author?.userInfo?.name}</h6>
            <p className="text-sm">{comment?.comment}</p>
          </div>
          {
            hover && <div onMouseLeave={() => setHover(false)} className="cursor-pointer text-xl font-semibold">
              ...
            </div>
          }
        </div>
        <div className="flex gap-4 text-sm font-semibold mt-1 pl-3">
          <h6 className="cursor-pointer">Like</h6>
          <h6 className="cursor-pointer">Reply</h6>
        </div>
      </div>
    </div>
  );
};

export default Comment;