import { useState } from "react";
import { Link } from "react-router-dom";
import ReactionBar from "../components/ReactionBar";
import CommentBox from "../components/CommentBox";
import Pagination from "../components/Pagination";
import styles from "../css/PostPage.module.css";

const PostPage = () => {
  const dummyAuthorId = "123";

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

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
  <nav style={{ fontSize: "14px", marginBottom: "4px" }}>
    <Link to="/" style={{ color: "#007bff", textDecoration: "none", fontWeight: "bold" }}>
      Home
    </Link>
    <span style={{ margin: "0 6px", color: "#555" }}>›</span>
    <span style={{ fontWeight: "bold", color: "#333" }}>Post</span>
  </nav>
  <h1 style={{ margin: 0 }}>This is Post Page</h1>
</div>

      <h2>Why Blood Donation Matters</h2>
        <p style={{ marginBottom: "20px", maxWidth: "700px" }}>
          Blood donation is a noble act that saves lives. Donating just one pint of blood can help up to three people. Learn more about why regular donation is so important for the healthcare system.
        </p>

      <p>
        Author: <Link to={`/author/${dummyAuthorId}`}>John Doe</Link>
      </p>

      <ReactionBar />

      {/* ====== FULL COLORED BOX STARTS HERE ====== */}
      <div className={styles.commentsSection}>
        {/* Comments Summary and Input */}
        <h3>Number of Comments: {allComments.length}</h3>
        <div className={styles.commentInputRow}>
          <input
            type="text"
            placeholder="Write your comment..."
            className={styles.commentInput}
          />
          <button className={styles.commentSubmit}>→</button>
        </div>

        {/* Render paginated comments */}
        {currentComments.map((comment) => (
          <CommentBox
            key={comment.id}
            id={comment.id}
            author={comment.author}
            text={comment.text}
          />
        ))}

        {/* Pagination */}
        <Pagination
          totalItems={allComments.length}
          itemsPerPage={commentsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      {/* ====== FULL COLORED BOX ENDS HERE ====== */}
    </div>
  );
};

export default PostPage;
