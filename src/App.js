
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CommentPage from './comments/CommentPage';
import FetchedPosts from './components/fetchedPosts';
import Header from './components/header';
import PaginationPage from './components/PaginationPage';
import RegistrationPage from './pages/RegistrationPage';
import Post_page from './pages/Post_page';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<FetchedPosts />} />
        <Route path="pages/:postId" element={<Post_page />} />
        <Route path="comments/CommentPage/:postId" element={<CommentPage />} />
        <Route path="pages/RegistrationPage" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
