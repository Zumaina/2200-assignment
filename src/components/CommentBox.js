import React, { useState } from "react";
import styles from "../css/CommentBox.module.css";

const CommentBox = ({ id, author, text }) => {
  const [selectedReaction, setSelectedReaction] = useState("");
  const [likeCount, setLikeCount] = useState(4);
  const [dislikeCount, setDislikeCount] = useState(2);

  const handleReaction = (reaction) => {
    if (reaction === selectedReaction) {
      setSelectedReaction("");
    } else {
      setSelectedReaction(reaction);
      if (reaction === "like" && selectedReaction !== "like") {
        setLikeCount((prev) => prev + 1);
        if (selectedReaction === "dislike") setDislikeCount((prev) => prev - 1);
      } else if (reaction === "dislike" && selectedReaction !== "dislike") {
        setDislikeCount((prev) => prev + 1);
        if (selectedReaction === "like") setLikeCount((prev) => prev - 1);
      }
    }
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
        <button
          className={`${styles.reactionButton} ${selectedReaction === "report" ? styles.reportSelected : ""}`}
          onClick={() => handleReaction("report")}
        >
          <strong>Report</strong>
        </button>
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
          className={`${styles.reactionButton} ${selectedReaction === "like" ? styles.likeSelected : ""}`}
          onClick={() => handleReaction("like")}
        >
          <strong>Like</strong> <span className={styles.count}><strong>{likeCount}</strong></span>
        </button>

        <button
          className={`${styles.reactionButton} ${selectedReaction === "dislike" ? styles.dislikeSelected : ""}`}
          onClick={() => handleReaction("dislike")}
        >
          <strong>Dislike</strong> <span className={styles.count}><strong>{dislikeCount}</strong></span>
        </button>

        <button
          className={`${styles.reactionButton} ${selectedReaction === "reply" ? styles.replySelected : ""}`}
          onClick={() => handleReaction("reply")}
        >
          <strong>Reply</strong>
        </button>
      </div>
    </div>
  );
};

export default CommentBox;
