import { Link } from "react-router-dom";
import ReactionBar from "../components/ReactionBar";

const PostPage = () => {
  const dummyAuthorId = "123"; // Example ID

  return (
    <div>
      <h1>This is Post Page</h1>

      <p>
        Author:{" "}
        <Link to={`/author/${dummyAuthorId}`}>
          John Doe
        </Link>
      </p>

      <ReactionBar />
    </div>
  );
};

export default PostPage;
