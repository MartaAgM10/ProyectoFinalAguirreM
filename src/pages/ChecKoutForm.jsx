import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      buyer: { name, email },
      items: cart,
      total: totalPrice(),
      createdAt: serverTimestamp(),
    };
    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (err) {
      console.error(err);
      alert("Error al generar la orden");
    }
  };

  if (orderId)
    return (
      <div>
        Compra confirmada. Tu orden: <strong>{orderId}</strong>
      </div>
    );

  if (cart.length === 0) return <div>El carrito está vacío.</div>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        required
      />
      <button type="submit">Confirmar compra</button>
    </form>
  );
}
