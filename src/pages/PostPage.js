import { useParams, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Posts from "../data/Posts";
import Breadcrumb from "../components/BreadCrumb";
import ReactionBar from "../components/ReactionBar";
import CommentBox from "../components/CommentBox";
import Pagination from "../components/Pagination";
import styles from "../css/PostPage.module.css";
import { useState } from "react";

const PostPage = () => {
  const { id } = useParams();
  const post = Posts.find((p) => String(p.id) === String(id)); // ✅ Fix: Type-safe match

  const allComments = [
    { id: 1, author: "Alice", text: "This is the first comment." },
    { id: 2, author: "Bob", text: "This is the second comment." },
    { id: 3, author: "Charlie", text: "Third comment here!" },
    { id: 4, author: "David", text: "Another insightful comment." },
    { id: 5, author: "Eva", text: "Final comment on the post." },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 2;
  const indexOfLast = currentPage * commentsPerPage;
  const indexOfFirst = indexOfLast - commentsPerPage;
  const currentComments = allComments.slice(indexOfFirst, indexOfLast);

  if (!post) return <h2>Post not found</h2>;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Breadcrumb links={[{ name: "Home", to: "/" }, { name: "Post" }]} />

      <h1>{post.title}</h1>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
  <Avatar sx={{ width: 36, height: 36, bgcolor: "#6a1b9a", fontSize: 16 }}>
    {post.author
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()}
  </Avatar>
  <span style={{ marginLeft: "10px", fontSize: "14px", color: "#666" }}>
    <strong>
      <Link to={`/author/${post.authorId}`} className={styles.authorLink}>
        {post.author}
      </Link>
    </strong>{" "}
    on {post.date}
  </span>
</div>


      <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>{post.description}</p>

      <ReactionBar />

      <div className={styles.commentsSection}>
        <h3>Number of Comments: {allComments.length}</h3>
        <div className={styles.commentInputRow}>
          <input
            type="text"
            placeholder="Write your comment..."
            className={styles.commentInput}
          />
          <button className={styles.commentSubmit}>→</button>
        </div>

        {currentComments.map((comment) => (
          <CommentBox
            key={comment.id}
            id={comment.id}
            author={comment.author}
            text={comment.text}
          />
        ))}

        <Pagination
          totalItems={allComments.length}
          itemsPerPage={commentsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default PostPage;
