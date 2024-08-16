import "./Home.css";
import Carrusel from "../Carrusel/carrusel";

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
      <div className="c-home__info">
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
      </div>
      <section className="c-home__services-wrapper">
        <h2>Nuestros servicios</h2>
        <img alt="Dibujo flores" src="src/assets/images/left_flowers.png" />
        <div className="c-home__services">
          <div>Ramos de flores</div>
          <div>Coronitas y diademas</div>
          <div>Ramos de novia</div>
          <div>Exornos florales</div>
          <div>Flores preservadas</div>
        </div>
      </section>
      <section className="c-home__bride-flowers">
        <h2>Ramos de novia</h2>
        <Carrusel images={images} />
      </section>
      <section className="c-home__wedding">
        <img alt="Preparativos boda" src="src/assets/images/image18.png" />
        <div>
          <h2>Bodas y eventos</h2>
          <p>
            Consúltanos la disponibilidad del día y el horario y te
            concertaremos una cita en tienda de martes a jueves.
          </p>
          <p>
            ¡Volverás a casa con un <strong>presupuesto personalizado</strong>{" "}
            el mismo día!
          </p>
          <button>Consultar disponibilidad</button>
        </div>
      </section>
    </>
  );
}
