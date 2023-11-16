import { Routes , Route } from 'react-router-dom';
// import{ Navbar, Home, CreatePost, PostDetail} from './';
import Navbar from "./Navbar";
import Home from "./Home";
import PostDetail from "./PostDetail";
import CreatePost from "./CreatePost";

function App() {
  return (
    <div className="container">
      <Navbar/>
      <div className="container-two">
      <Routes>
      <Route path = "/" element= {<Home/>} />
        <Route path = "/post/:postId" element={<PostDetail/>} />
        <Route path = "/create-post" element={<CreatePost/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
