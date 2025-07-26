import { Link } from "react-router-dom";
import ReactionBar from "../components/ReactionBar";
import CommentBox from "../components/CommentBox";

const PostPage = () => {
  const dummyAuthorId = "123";

  return (
    <div>
      <h1>This is Post Page</h1>
      <p>
        Author: <Link to={`/author/${dummyAuthorId}`}>John Doe</Link>
      </p>
      <ReactionBar />
      <CommentBox />
    </div>
  );
};

export default PostPage;
