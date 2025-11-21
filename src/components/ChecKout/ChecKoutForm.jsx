import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useCart } from "../../context/CartContext";

function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();

  const [buyer, setBuyer] = useState({ nombre: "", email: "" });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orden = {
      comprador: buyer,
      items: cart,
      total: totalPrice(),
      fecha: Timestamp.fromDate(new Date()),
    };

    const ordenesRef = collection(db, "ordenes");
    const docRef = await addDoc(ordenesRef, orden);

    setOrderId(docRef.id);
    clearCart();
  };

  if (orderId) {
    return (
      <h2>
        ¡Compra realizada! ID de orden: <strong>{orderId}</strong>
      </h2>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nombre"
        placeholder="Nombre"
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />

      <button type="submit">Confirmar compra</button>
    </form>
  );
}

export default CheckoutForm;
