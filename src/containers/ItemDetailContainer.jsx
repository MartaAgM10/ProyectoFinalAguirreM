import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "../components/ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const ref = doc(db, "productos", id);

    getDoc(ref).then((snap) => {
      setItem({ id: snap.id, ...snap.data() });
    });
  }, [id]);

  return item && <ItemDetail item={item} />;
}

export default ItemDetailContainer;
