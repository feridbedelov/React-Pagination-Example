import React from "react";

const Post = ({ post }) => {
  return (
    <div className='ui card'>
      <div className='content'>
        <div className='header'>{post.title}</div>
        <div className='description'>{post.body}</div>
      </div>
    </div>
  );
};

export default Post;
