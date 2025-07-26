import React, { useState } from "react";
import styles from "../css/CommentBox.module.css";

const CommentBox = () => {
  const [selectedReactions, setSelectedReactions] = useState({});

  const comments = [
    {
      id: 1,
      author: "Alice",
      text: "This is the first comment.",
    },
    {
      id: 2,
      author: "Bob",
      text: "This is the second comment.",
    },
  ];

  const handleReaction = (commentId, reaction) => {
    setSelectedReactions((prev) => ({
      ...prev,
      [commentId]: reaction,
    }));
  };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.commentBox}>
          <p><strong>{comment.author}</strong></p>
          <p>{comment.text}</p>
          <div className={styles.buttonRow}>
            <button
              className={`${styles.reactionButton} ${selectedReactions[comment.id] === "like" ? styles.selected : ""}`}
              onClick={() => handleReaction(comment.id, "like")}
            >
              <strong>Like</strong>
            </button>
            <button
              className={`${styles.reactionButton} ${selectedReactions[comment.id] === "dislike" ? styles.selected : ""}`}
              onClick={() => handleReaction(comment.id, "dislike")}
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
      ))}
    </div>
  );
};

export default CommentBox;
