import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-home">
        <Link to="/">THE SENTINEL</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/business" className="navbar-link">
          Business
        </Link>
        <Link to="/technology" className="navbar-link">
          Technology
        </Link>
        <Link to="/health" className="navbar-link">
          Health
        </Link>
        <Link to="/sport" className="navbar-link">
          Sport
        </Link>
        <Link to="/saved" className="navbar-link">
          Saved
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
