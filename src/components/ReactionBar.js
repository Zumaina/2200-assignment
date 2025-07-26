// src/components/ReactionBar.js
import { useState } from "react";
import styles from "../css/ReactionBar.module.css";

const reactions = [
  { type: "Like", percentage: "20%" },
  { type: "Love", percentage: "60%" },
  { type: "Angry", percentage: "5%" },
  { type: "Sad", percentage: "5%" },
];

const ReactionBar = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.container}>
      {reactions.map((reaction, index) => (
        <div
          key={index}
          className={`${styles.reactionBox} ${
            selected === index ? styles.selected : ""
          }`}
          onClick={() => setSelected(index)}
        >
          <span className={styles.label}>{reaction.type}</span>
          <span className={styles.percent}>{reaction.percentage}</span>
        </div>
      ))}
    </div>
  );
};

export default ReactionBar;
