import { Link } from "react-router-dom";

function Item({ id, nombre, precio, img }) {
  return (
    <div className="item-card">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <Link to={`/detalle/${id}`} className="btn">
        Ver detalle
      </Link>
    </div>
  );
}

export default Item;
