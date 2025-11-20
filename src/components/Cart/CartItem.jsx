import { useCart } from "../../context/CartContext";

function CartItem({ prod }) {
  const { removeItem } = useCart();

  return (
    <div className="cart-item">
      <h4>{prod.nombre}</h4>
      <p>Cantidad: {prod.quantity}</p>
      <p>Subtotal: ${prod.quantity * prod.precio}</p>

      <button onClick={() => removeItem(prod.id)}>Eliminar</button>
    </div>
  );
}

export default CartItem;
