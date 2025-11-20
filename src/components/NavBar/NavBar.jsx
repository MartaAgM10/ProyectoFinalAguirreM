import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Pablo Cerrajero Shop</NavLink>

      <ul>
        <li>
          <NavLink to="/categoria/cerrajeria">Cerrajería</NavLink>
        </li>
        <li>
          <NavLink to="/categoria/candados">Candados</NavLink>
        </li>
        <li>
          <NavLink to="/categoria/puertas">Puertas</NavLink>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
