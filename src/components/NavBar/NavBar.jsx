import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  const { totalItems } = useCart();

  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/categoria/cerrajeria">Cerrajería</Link>
      <Link to="/categoria/candados">Candados</Link>
      <Link to="/categoria/puertas">Puertas</Link>

      <Link to="/cart" className="cart-widget">
        <FaShoppingCart />
        <span>{totalItems}</span>
      </Link>
    </nav>
  );
}

export default NavBar;
