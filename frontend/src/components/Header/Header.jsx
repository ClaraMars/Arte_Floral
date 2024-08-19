import "./Header.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/medium_logo.webp";

export default function Header() {
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const hasLogged = JSON.parse(localStorage.getItem("user"));
    if (hasLogged && hasLogged.token) {
      setIsLogged(true);
      setUserId(hasLogged._id);
      return;
    }
    setIsLogged(false);
    setUserId(null);
  }, [isLogged]);

  return (
    <header className="c-header">
      <Link className="c-header__link" to="/">
        <img src={logo} />
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
      <div className="c-header__buttons">
        <Link
          className="c-header__link o-btn o-btn--secondary"
          to={isLogged ? `/profile/${userId}` : "/login"}
        >
          {isLogged ? "Mi perfil" : "Iniciar sesión"}
        </Link>
        <Link className="c-header__link o-btn" to="/">
          Pide tu cita
        </Link>
      </div>
    </header>
  );
}
