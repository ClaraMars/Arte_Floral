import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="c-header">
      <Link className="c-header__link" to="/">
        <img src="src/assets/images/medium_logo.webp" />
        <span className="c-header__name">
          Cisneros <span className="c-header__subname">Arte Floral</span>
        </span>
      </Link>
      <nav>
        <ul className="c-header__navbar">
          <li>Sobre nosotros</li>
          <li>Nuestros servicios</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <button>Pide tu cita</button>
    </header>
  );
}
