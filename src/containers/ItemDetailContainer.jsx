import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase.jsx";
import ItemDetail from "../components/ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const ref = doc(db, "productos", id);

    getDoc(ref).then((resp) => {
      setItem({ id: resp.id, ...resp.data() });
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!item) return <p>Producto no encontrado</p>;

  return <div>{item && <ItemDetail item={item} />}</div>;
}

export default ItemDetailContainer;
