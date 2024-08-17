import "./Home.css";
import Carrusel from "../Carrusel/Carrusel";
import Contact from "../Contact/Contact";

export default function Home() {
  const images = [
    "src/assets/images/image12.png",
    "src/assets/images/image17.png",
    "src/assets/images/image14.png",
  ];

  return (
    <>
      <section className="c-home">
        <div className="c-home__img">
          <img src="src/assets/images/banner.jpg" />
        </div>
        <div className="c-home__text">
          <h1>
            Cisneros <br />
            Arte Floral
          </h1>
          <h3>Hemos venido a ponerle un poco de color a tu día a día</h3>
        </div>
      </section>
      <div className="c-home__delivery">
        <p>
          <strong>Flores a domicilio.</strong> Solicítanos tus plantas naturales
          y te las llevamos a casa
        </p>
        <span>Más información</span>
      </div>
      <section className="c-home__info o-container">
        <p>
          Nos encargamos de escuchar todas tus ideas y llevarlas a cabo en el
          formato que tú nos indiques. Trabajamos con{" "}
          <strong>flores fresca y preservadas</strong> creando elaboraciones
          únicas para cada uno de nuestros clientes.{" "}
        </p>
        <p>
          Cada ramo de <strong>flor fresca</strong> lleva un poco de nosotros
          pero mucho de la persona que lo quiere para si o para alegrar a
          alguien en un día especial. Para ello utilizamos flores de primera
          calidad y que tratamos con mucho cariño.
        </p>
        <p>
          Otra de las creaciones que más nos gustan las que realizamos con{" "}
          <strong>flor preservada</strong>, ya sea en ramos, centros, coronitas,
          diademas etc. Ya que con su duración el disfrute está asegurado.
        </p>
        <img alt="Dibujo flores" src="src/assets/images/right_flowers.png" />
      </section>
      <section className="c-home__services-wrapper o-container">
        <h2>Nuestros servicios</h2>
        <img alt="Dibujo flores" src="src/assets/images/left_flowers.png" />
        <div className="c-home__services">
          <div className="c-home__services-rows">
            <div>Ramos de flores</div>
            <div>Coronitas y diademas</div>
          </div>
          <div className="c-home__services-rows">
            <div>Ramos de novia</div>
            <div>Exornos florales</div>
            <div>Flores preservadas</div>
          </div>
        </div>
      </section>
      <section className="o-container">
        <h2>Ramos de novia</h2>
        <Carrusel images={images} />
      </section>
      <section className="c-home__wedding">
        <img
          className="c-home__wedding-img"
          alt="Preparativos boda"
          src="src/assets/images/image18.png"
        />
        <div className="c-home__wedding-content">
          <h2>Bodas y eventos</h2>
          <p className="c-home__wedding-text">
            Consúltanos la disponibilidad del día y el horario y te
            concertaremos una cita en tienda de martes a jueves.
          </p>
          <p className="c-home__wedding-text">
            ¡Volverás a casa con un <strong>presupuesto personalizado</strong>{" "}
            el mismo día!
          </p>
          <button className="o-btn">Consultar disponibilidad</button>
        </div>
      </section>
      <section class="o-container">
        <h2>Contacto</h2>
        <div className="c-home__contact-content">
          <div className="c-home__contact-data-wrapper">
            <h4>Cisneros, Flores & Eventos</h4>
            <div>
              <div className="c-home__contact-data">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#000"
                >
                  <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                </svg>
                <span>
                  C. Charles Dickens, 24, Puerto de la Torre, 29006 Málaga
                </span>
              </div>
              <div className="c-home__contact-data">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000"
                >
                  <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
                </svg>
                <span>
                  Martes - Viernes: <br />
                  09:30 a 13:00 y 17:00 a 20:00
                </span>
              </div>
              <Contact className="c-home__contact-data" />
            </div>
          </div>
          <div className="c-home__contact-form">
            <h4>Envíanos un mensaje</h4>
            <form>
              <div className="c-home__contact-form--data">
                <input className="o-input" type="text" placeholder="Nombre" />
                <input
                  className="o-input"
                  type="email"
                  placeholder="Correo electrónico"
                />
              </div>
              <textarea
                className="c-home__contact-form--message o-textarea"
                rows="10"
                placeholder="Mensaje (opcional)"
              />
              <button className="c-home__contact-form--btn o-btn" type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
