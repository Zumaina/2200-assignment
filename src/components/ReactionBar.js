import React, { useState } from 'react';
import styles from '../css/ReactionBar.module.css';

const ReactionBar = () => {
  const [selected, setSelected] = useState(null);

  const reactions = ['👍', '❤️', '😂', '😮', '😢'];

  const handleClick = (emoji) => {
    setSelected(emoji);
  };

  return (
    <div className={styles.reactionBar}>
      {reactions.map((emoji, index) => (
        <button
          key={index}
          onClick={() => handleClick(emoji)}
          className={`${styles.reactionButton} ${selected === emoji ? styles.selected : ''}`}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

export default ReactionBar;
