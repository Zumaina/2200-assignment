import { Link } from "react-router-dom";

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
    </div>
  );
};

export default PostPage;
