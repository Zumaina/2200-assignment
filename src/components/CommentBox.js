import React, { useState } from "react";
import styles from "../css/CommentBox.module.css";

const CommentBox = ({ id, author, text }) => {
  const [selectedReaction, setSelectedReaction] = useState("");

  const handleReaction = (reaction) => {
    setSelectedReaction(reaction === selectedReaction ? "" : reaction);
  };

  // Format today's date as "28 July 2025"
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={styles.commentBox}>
      {/* Report button at top-right */}
      <div className={styles.reportWrapper}>
        <button className={styles.reportButton}><strong>Report</strong></button>
      </div>

      {/* Avatar + Author Name + Date */}
      <div className={styles.authorRow}>
        <div className={styles.avatar}>{author.charAt(0)}</div>
        <div className={styles.authorInfo}>
          <strong>{author}</strong> <span className={styles.date}>{formattedDate}</span>
        </div>
      </div>

      {/* Comment Text */}
      <p>{text}</p>

      {/* Reaction Buttons */}
      <div className={styles.buttonRow}>
        <button
          className={`${styles.reactionButton} ${styles.like} ${
            selectedReaction === "like" ? styles.selected : ""
          }`}
          onClick={() => handleReaction("like")}
        >
          <strong>Like</strong> <span className={styles.count}><strong>4</strong></span>
        </button>

        <button
          className={`${styles.reactionButton} ${styles.dislike} ${
            selectedReaction === "dislike" ? styles.selected : ""
          }`}
          onClick={() => handleReaction("dislike")}
        >
          <strong>Dislike</strong> <span className={styles.count}><strong>2</strong></span>
        </button>

        <button className={`${styles.reactionButton} ${styles.reply}`}>
          <strong>Reply</strong>
        </button>
      </div>
    </div>
  );
};

export default CommentBox;
