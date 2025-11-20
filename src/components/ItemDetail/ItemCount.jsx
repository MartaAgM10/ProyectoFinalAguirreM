import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const inc = () => count < stock && setCount(count + 1);
  const dec = () => count > 1 && setCount(count - 1);

  return (
    <div className="item-count">
      <button onClick={dec}>-</button>
      <span>{count}</span>
      <button onClick={inc}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
