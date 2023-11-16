import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div className="navbar-container">
      <nav className="navbar">
        BugBlog
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/create-post">Create Post</Link>
          </li>
        </ul>
      </nav>
    </div>


    );
  }

  export default Navbar;