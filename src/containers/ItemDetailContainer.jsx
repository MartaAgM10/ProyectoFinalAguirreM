import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import ItemDetail from "../components/ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const ref = doc(db, "productos", id);

    getDoc(ref).then((snap) => {
      setItem({ id: snap.id, ...snap.data() });
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!item) return <p>Producto no encontrado</p>;

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
