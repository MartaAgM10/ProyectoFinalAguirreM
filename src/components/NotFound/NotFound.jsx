import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>La ruta que buscás no existe.</p>
      <Link to="/" className="btn">
        ← Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
