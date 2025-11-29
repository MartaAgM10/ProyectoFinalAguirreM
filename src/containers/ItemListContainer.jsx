import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";
import { Link } from "react-router-dom";
function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams(); // filtrado por categoría

  useEffect(() => {
    const cargarProductos = async () => {
      setLoading(true);
      try {
        let productosRef = collection(db, "productos");

        if (categoriaId) {
          productosRef = query(
            productosRef,
            where("categoria", "==", categoriaId)
          );
        }

        const snapshot = await getDocs(productosRef);
        const lista = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(lista);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, [categoriaId]);

  if (loading) return <p>Cargando productos...</p>;
  if (productos.length === 0) return <p>No hay productos para mostrar.</p>;

  return (
    <div className="item-list">
      {productos.map((p) => (
        <div key={p.id} className="item-card">
          {p.imagen && <img src={p.imagen} alt={p.nombre} />}
          <h3>{p.nombre}</h3>
          <p>Categoría: {p.categoria}</p>
          <p>{p.descripcion || "Sin descripción"}</p>
          <p>Precio: ${p.precio || "N/A"}</p>
          <p>Stock: {p.existencias}</p>

          <Link to={`/detalle/${p.id}`} className="btn">
            Ver detalle
          </Link>
        </div>
      ))}
    </div>
  );
}
export default ItemListContainer;
