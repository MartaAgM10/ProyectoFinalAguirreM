import { useState } from "react";

function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const inc = () => {
    if (count < stock) setCount(count + 1);
  };

  const dec = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    if (stock === 0) return;
    onAdd(count);
  };

  if (stock === 0) {
    return <p style={{ color: "red" }}>Producto sin stock</p>;
  }

  return (
    <div className="item-count">
      <button onClick={dec} disabled={count <= 1}>
        -
      </button>

      <span>{count}</span>

      <button onClick={inc} disabled={count >= stock}>
        +
      </button>

      <button onClick={handleAdd} disabled={stock === 0}>
        Agregar al carrito
      </button>

      <p style={{ fontSize: "0.9rem" }}>Stock disponible: {stock}</p>
    </div>
  );
}

export default ItemCount;
