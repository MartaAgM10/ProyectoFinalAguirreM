import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/config.js";

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
