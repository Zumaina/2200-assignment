import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import AuthorProfilePage from "./pages/AuthorProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/author/:authorId" element={<AuthorProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
