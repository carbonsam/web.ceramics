import { Link } from "react-router-dom";

const Header = () => (
  <div className="container">
    <nav>
      <ul>
        <li>
          <Link to="/">
            <strong>ReactJS Cocktails</strong>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
