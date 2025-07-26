import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
import AuthorProfile from "./pages/AuthorProfile";
import './css/App.module.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/author/:authorId" element={<AuthorProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
