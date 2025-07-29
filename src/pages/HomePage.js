import React from "react";
import Posts from "../data/Posts";
import PostCard from "../components/PostCard";

const HomePage = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>All Posts</h1>
      {Posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomePage;
