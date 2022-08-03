import React from "react";

const Comment = ({ comment }) => {
  // console.log(comment);
  return (
    <div>
      <h1>{comment.comment}</h1>
    </div>
  );
};

export default Comment;
