import { Link } from "react-router-dom";
export default function Not_Found() {
  return (
    <div className="o-container o-not-found">
      <h2>Ops! Error 404. Página no encontrada</h2>
      <p>La página que buscas no existe o ha sido eliminada.</p>
      <Link to="/" className="o-btn">
        Volver al inicio
      </Link>
    </div>
  );
}
