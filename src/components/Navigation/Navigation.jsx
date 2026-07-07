import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav__link nav__link_active" : "nav__link"
            }
          >
            Inicio
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/favoritos"
            className={({ isActive }) =>
              isActive ? "nav__link nav__link_active" : "nav__link"
            }
          >
            Favoritos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
