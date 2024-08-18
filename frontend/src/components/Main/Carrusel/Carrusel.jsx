import "./carrusel.css";

export default function Carrusel(props) {
  return (
    <div className="c-carrusel__content">
      <div className="c-carrusel__chevron">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 600 960"
          width="24px"
          fill="#000"
        >
          <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
        </svg>
      </div>
      <div className="c-carrusel__images-wrapper">
        {props.images.map((src, index) => (
          <div key={index}>
            <img alt={`Ramo de novia ${index + 1}`} src={src} />
          </div>
        ))}
      </div>
      <div className="c-carrusel__chevron">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000"
        >
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
      </div>
    </div>
  );
}
