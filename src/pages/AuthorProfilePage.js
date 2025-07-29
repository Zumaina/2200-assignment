// src/pages/AuthorProfile.js
import { useParams, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Posts from "../data/Posts";
import Breadcrumb from "../components/BreadCrumb";
import styles from "../css/AuthorProfilePage.module.css";

const AuthorProfilePage = () => {
  const { authorId } = useParams();

  // Filter posts by this author
  const authorPosts = Posts.filter((post) => post.authorId === authorId);

  if (authorPosts.length === 0) {
    return <h2>Author not found</h2>;
  }

  // Get author info from first post
  const { author } = authorPosts[0];

  const authorInfo = {
  alice: {
    bio: "Frontend developer passionate about inclusive UI design and hackathons.",
    quote: "You don’t have to know everything—just start building.",
    location: "Berlin, Germany",
  },
  sophia: {
    bio: "Full-stack engineer and mentor, sharing what I learn one post at a time.",
    quote: "Every bug I fix makes me stronger.",
    location: "Toronto, Canada",
  },
};

  const { bio, quote, location } = authorInfo[authorId];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
      <Breadcrumb links={[{ name: "Home", to: "/" }, { name: "Author Profile" }]} />

      <div className={styles.header}>
        <Avatar
          sx={{
            bgcolor: "#6a1b9a",
            width: 80,
            height: 80,
            fontSize: 32,
            margin: "0 auto",
          }}
        >
          {author
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
        </Avatar>

        <h1 className={styles.name}>{author}</h1>
        <p className={styles.bio}>{bio}</p>
        <blockquote className={styles.quote}>"{quote}"</blockquote>
        <p className={styles.location}>{location}</p>
      </div>

      <h3>Posts by author :</h3>
      <ul className={styles.postList}>
        {authorPosts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <Link to={`/post/${post.id}`} className={styles.postLink}>
               {post.title}
            </Link>
            <div className={styles.postDate}>{post.date}</div>
          </li>
        ))}
      </ul>
    </div>
    </div>
    

  );
};

export default AuthorProfilePage;
