import React from "react";
import Post from "./Post";

const PostList = ({ posts }) =>
  posts && posts.map((post) => <Post post={post} key={post.id} />);

export default PostList;
