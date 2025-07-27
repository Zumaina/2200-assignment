import React, { useState } from "react";
import styles from "../css/CommentBox.module.css";

const CommentBox = ({ id, author, text }) => {
  const [selectedReaction, setSelectedReaction] = useState(null);

  const handleReaction = (reaction) => {
    setSelectedReaction(reaction);
  };

  return (
    <div className={styles.commentBox}>
      <p><strong>{author}</strong></p>
      <p>{text}</p>
      <div className={styles.buttonRow}>
        <button
          className={`${styles.reactionButton} ${selectedReaction === "like" ? styles.selected : ""}`}
          onClick={() => handleReaction("like")}
        >
          <strong>Like</strong>
        </button>
        <button
          className={`${styles.reactionButton} ${selectedReaction === "dislike" ? styles.selected : ""}`}
          onClick={() => handleReaction("dislike")}
        >
          <strong>Dislike</strong>
        </button>
        <button className={styles.reactionButton}>
          <strong>Reply</strong>
        </button>
        <button className={styles.reactionButton}>
          <strong>Report</strong>
        </button>
      </div>
    </div>
  );
};

export default CommentBox;
