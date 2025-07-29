import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import styles from "../css/PostCard.module.css";

const PostCard = ({ post }) => {
  const { id, title, author, authorId, date } = post;

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        <Link to={`/post/${id}`}>{title}</Link>
      </h2>
      <div className={styles.metaRow}>
        <Avatar sx={{ width: 32, height: 32, bgcolor: "#b689b8ff", fontSize: 14 }}>
          {getInitials(author)}
        </Avatar>
        <p className={styles.meta}>
          <strong style={{ marginLeft: "8px" }}>
            <Link to={`/author/${authorId}`} style={{ color: "#007bff", textDecoration: "none" }}>
              {author}
            </Link>
          </strong>{" "}
          on {date}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
