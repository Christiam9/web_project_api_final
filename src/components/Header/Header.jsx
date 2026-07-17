import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/" className="header__logo">
          AdoptaPet
        </Link>
      </h1>

      <Navigation />
    </header>
  );
}

export default Header;
