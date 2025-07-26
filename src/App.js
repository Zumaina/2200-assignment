import './css/App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostPage from './pages/PostPage';
import AuthorProfile from './pages/AuthorProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/author/:id" element={<AuthorProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
