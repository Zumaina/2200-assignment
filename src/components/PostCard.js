import { Link } from "react-router-dom";
import styles from "../css/PostCard.module.css";

const PostCard = ({ post }) => {
  const { id, title, authorName, authorId, date } = post;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        <Link to={`/post/${id}`}>{title}</Link>
      </h2>
      <p className={styles.meta}>
        by <Link to={`/author/${authorId}`}>{authorName}</Link> on {date}
      </p>
    </div>
  );
};

export default PostCard;
