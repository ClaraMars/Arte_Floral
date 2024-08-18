import "./Footer.css";
import Contact from "../Main/Contact/Contact";
import footerLogo from "../../assets/images/footer_logo.png";
import fb from "../../assets/images/fb.png";
import ig from "../../assets/images/ig.png";

export default function Footer() {
  return (
    <footer className="c-footer">
      <div className="o-container">
        <div className="c-footer__content">
          <div className="c-footer__content-data">
            <img src={footerLogo} alt="Logo" />
            <Contact
              fill="#fff"
              className="c-home__contact-data c-footer__contact"
            />
          </div>
          <div className="c-footer__content-info-wrapper">
            <div className="c-footer__content-info">
              <h5>Conócenos</h5>
              <ul>
                <li>Sobre nosotros</li>
                <li>Contacto</li>
                <li>Solicitar cita</li>
              </ul>
            </div>
            <div className="c-footer__content-info">
              <h5>Información</h5>
              <ul>
                <li>Ramos de flores</li>
                <li>Ramos de novia</li>
                <li>Coronitas y diademas</li>
                <li>Exornos florales</li>
                <li>Flores preservadas</li>
              </ul>
            </div>
            <div className="c-footer__content-info">
              <h5>Síguenos</h5>
              <div className="c-footer__content-rrss">
                <div className="c-footer__content-icon">
                  <img src={ig} alt="Instagram" />
                </div>
                <div className="c-footer__content-icon">
                  <img src={fb} alt="Facebook" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-footer__rights">
          <p>
            © 2024 Derechos de autor de Cisneros, Flores & Eventos. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
