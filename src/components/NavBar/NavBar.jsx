import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
//import "../../App.css";

function NavBar() {
  const { totalItems } = useCart();
  return (
    <nav className="navbar">
      <h1> Marta A. </h1>

      <ul>
        <li>
          <Link className="navlink" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="navlink" to="/categoria/cerrajeria">
            Cerrajería
          </Link>
        </li>
        <li>
          <Link className="navlink" to="/categoria/candados">
            Candados
          </Link>
        </li>
        <li>
          <Link className="navlink" to="/categoria/puertas">
            Puertas
          </Link>
        </li>
      </ul>

      <Link to="/cart" className="navlink cart-widget">
        <FaShoppingCart />
        <span>{totalItems}</span>
      </Link>
    </nav>
  );
}

export default NavBar;
