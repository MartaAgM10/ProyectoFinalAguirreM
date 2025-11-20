import Item from "./Item";

function ItemList({ productos }) {
  return (
    <div className="item-list">
      {productos.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
}

export default ItemList;
