import React from "react";
import Posts from "../data/Posts";
import PostCard from "../components/PostCard";
import styles from "../css/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h1 className={styles.heading}> Blood Donation Stories</h1>
        <p className={styles.subheading}>
          Real experiences shared by amazing donors and recipients.
        </p>
        {Posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
