import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carrusel.css";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="c-carrusel__chevron" onClick={onClick}>
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
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="c-carrusel__chevron" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 600 960"
        width="24px"
        fill="#000"
      >
        <path d="M200-80 600-480 200-880l-71 71 329 329-329 329 71 71Z" />
      </svg>
    </div>
  );
}

export default function Carrusel(props) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="c-carrusel__content">
      <Slider {...settings}>
        {props.images.map((src, index) => (
          <div key={index} className="c-carrusel__images-wrapper">
            <img
              className="c-carrusel__img"
              alt={`Ramo de novia ${index + 1}`}
              src={src}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
