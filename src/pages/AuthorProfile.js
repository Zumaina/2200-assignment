import { useParams } from "react-router-dom";

const AuthorProfile = () => {
  const { authorId } = useParams(); 

  return (
    <div>
      <h1>Author Profile Page</h1>
      <h2>ID: {authorId}</h2>
    </div>
  );
};

export default AuthorProfile;
