import { Link } from "react-router-dom";
import ReactionBar from "../components/ReactionBar";
import CommentBox from "../components/CommentBox";
import Pagination from "../components/Pagination";
import { useState } from "react";

const PostPage = () => {
  const dummyAuthorId = "123";

  // Dummy data
  const allComments = [
    { id: 1, author: "Alice", text: "This is the first comment." },
    { id: 2, author: "Bob", text: "This is the second comment." },
    { id: 3, author: "Charlie", text: "Third comment here!" },
    { id: 4, author: "David", text: "Another insightful comment." },
    { id: 5, author: "Eva", text: "Final comment on the post." },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 2;

  const indexOfLast = currentPage * commentsPerPage;
  const indexOfFirst = indexOfLast - commentsPerPage;
  const currentComments = allComments.slice(indexOfFirst, indexOfLast);

  return (
    <div>
      <h1>This is Post Page</h1>
      <p>
        Author: <Link to={`/author/${dummyAuthorId}`}>John Doe</Link>
      </p>

      <ReactionBar />


              {/* Comments Summary and Input */}
      <div style={{ marginTop: "30px", padding: "10px" }}>
        <h3>Number of Comments: {allComments.length}</h3>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <input
            type="text"
            placeholder="Write your comment..."
            style={{
              flex: 1,
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            →
          </button>
        </div>
      </div>


      {currentComments.map((comment) => (
        <CommentBox
          key={comment.id}
          id={comment.id}
          author={comment.author}
          text={comment.text}
        />
      ))}

      

      <Pagination
        totalItems={allComments.length}
        itemsPerPage={commentsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default PostPage;
