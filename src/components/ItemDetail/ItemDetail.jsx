import { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../../context/CartContext";

function ItemDetail({ item }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (quantity) => {
    addItem({ ...item, quantity });
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <img src={item.img} alt={item.nombre} />
      <h2>{item.nombre}</h2>
      <p>${item.price}</p>
      {!added ? (
        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <p>✔ Producto agregado al carrito</p>
      )}
    </div>
  );
}

export default ItemDetail;
