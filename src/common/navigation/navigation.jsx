import { Link } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <nav className="header-navigation">
      <Link to="/" className="logo">
        MyShop
      </Link>
      <ul className="nav-container">
        <li>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
