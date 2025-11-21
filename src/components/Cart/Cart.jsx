import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return <h2>Carrito vacío</h2>;
  }

  return (
    <div>
      {cart.map((prod) => (
        <CartItem key={prod.id} prod={prod} />
      ))}

      <h3>Total: ${totalPrice()}</h3>

      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
}

export default Cart;
