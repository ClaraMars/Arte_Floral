import "./Login.css";
import { useState } from "react";
import video from "../../assets/videos/arte_floral.mp4";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="c-login__wrapper">
        <iframe
          className="c-login__video"
          playsinline
          preload="none"
          autoplay
          loop
          muted
          src={video}
        ></iframe>
        {/* <video
          playsinline=""
          class="c-login__video"
          autoplay=""
          loop=""
          muted=""
          src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
        ></video> */}
        <div className="c-login__content">
          <div className="c-login__content-form-wrapper">
            <h3>Inicia sesión</h3>
            <form className="c-login__content-form">
              <input
                className="c-login__input"
                type="text"
                placeholder="Email"
              />
              <div className="c-login__input">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                />
                {showPassword ? (
                  <svg
                    className="c-login__eye"
                    onClick={handleShowPassword}
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 20 26"
                    fill="currentColor"
                  >
                    <path
                      d="M12,16c1.2,0,2.3-0.4,3.2-1.3s1.3-1.9,1.3-3.2s-0.4-2.3-1.3-3.2S13.2,7,12,7S9.7,7.4,8.8,8.3s-1.3,1.9-1.3,3.2
        s0.4,2.3,1.3,3.2S10.8,16,12,16z M12,14.2c-0.8,0-1.4-0.3-1.9-0.8c-0.5-0.5-0.8-1.2-0.8-1.9s0.3-1.4,0.8-1.9
        c0.5-0.5,1.2-0.8,1.9-0.8s1.4,0.3,1.9,0.8c0.5,0.5,0.8,1.2,0.8,1.9s-0.3,1.4-0.8,1.9C13.4,13.9,12.8,14.2,12,14.2z M12,19
        c-2.4,0-4.7-0.7-6.7-2S1.9,13.8,1,11.5C1.9,9.2,3.4,7.4,5.3,6S9.6,4,12,4s4.6,0.7,6.6,2s3.5,3.2,4.4,5.5c-0.9,2.3-2.4,4.1-4.4,5.5
        S14.4,19,12,19z M12,17c1.9,0,3.6-0.5,5.2-1.5s2.8-2.3,3.6-4c-0.8-1.7-2-3-3.6-4S13.9,6,12,6S8.4,6.5,6.8,7.5s-2.8,2.3-3.6,4
        c0.8,1.7,2,3,3.6,4S10.1,17,12,17z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="c-login__eye"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 20 26"
                    fill="currentColor"
                    onClick={handleShowPassword}
                  >
                    <path
                      d="M16.1,13.3l-1.4-1.4c0.1-0.8-0.1-1.5-0.7-2.2c-0.6-0.7-1.4-1-2.3-0.8l-1.5-1.5c0.3-0.1,0.6-0.2,0.9-0.3C11.4,7,11.7,7,12,7
        c1.2,0,2.3,0.4,3.2,1.3s1.3,1.9,1.3,3.2c0,0.3,0,0.6-0.1,0.9C16.3,12.7,16.2,13,16.1,13.3z M19.3,16.4L17.9,15
        c0.6-0.5,1.2-1,1.7-1.6c0.5-0.6,0.9-1.2,1.3-2c-0.8-1.7-2-3-3.6-4C15.7,6.5,13.9,6,12,6c-0.5,0-1,0-1.4,0.1
        c-0.5,0.1-0.9,0.2-1.4,0.3L7.7,4.8C8.3,4.6,9,4.4,9.8,4.2C10.5,4.1,11.2,4,12,4c2.5,0,4.8,0.7,6.7,2.1s3.4,3.2,4.3,5.4
        c-0.4,1-0.9,1.9-1.5,2.7S20.1,15.8,19.3,16.4z M19.8,22.6l-4.2-4.2c-0.6,0.2-1.2,0.3-1.8,0.4S12.6,19,12,19c-2.5,0-4.8-0.7-6.7-2.1
        c-2-1.4-3.4-3.2-4.3-5.4C1.4,10.6,1.8,9.8,2.3,9c0.5-0.8,1.1-1.4,1.8-2L1.4,4.2l1.4-1.4l18.4,18.4L19.8,22.6z M5.6,8.4
        C5.1,8.8,4.6,9.3,4.2,9.8c-0.4,0.5-0.7,1.1-1,1.7c0.8,1.7,2,3,3.6,4S10.1,17,12,17c0.3,0,0.7,0,1-0.1c0.3,0,0.6-0.1,1-0.1l-0.9-0.9
        c-0.2,0.1-0.4,0.1-0.5,0.1c-0.2,0-0.3,0-0.5,0c-1.2,0-2.3-0.4-3.2-1.3s-1.3-1.9-1.3-3.2c0-0.2,0-0.4,0-0.5c0-0.2,0.1-0.3,0.1-0.5
        L5.6,8.4z"
                    />
                  </svg>
                )}
              </div>
              <label>
                <input type="checkbox" />
                <span>Permanecer conectado</span>
              </label>
              <button type="submit">Iniciar sesión</button>
              <p className="c-login__forgot-password">
                ¿Has olvidado tu contraseña?
              </p>
            </form>
          </div>
          <div className="c-login__content-form-wrapper">
            <h3>Regístrate</h3>
            <form className="c-login__content-form">
              <input
                className="c-login__input"
                type="text"
                placeholder="Email"
              />
              <div className="c-login__input">
                <input type="password" placeholder="Contraseña" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 20 26"
                  fill="currentColor"
                >
                  <path
                    d="M16.1,13.3l-1.4-1.4c0.1-0.8-0.1-1.5-0.7-2.2c-0.6-0.7-1.4-1-2.3-0.8l-1.5-1.5c0.3-0.1,0.6-0.2,0.9-0.3C11.4,7,11.7,7,12,7
        c1.2,0,2.3,0.4,3.2,1.3s1.3,1.9,1.3,3.2c0,0.3,0,0.6-0.1,0.9C16.3,12.7,16.2,13,16.1,13.3z M19.3,16.4L17.9,15
        c0.6-0.5,1.2-1,1.7-1.6c0.5-0.6,0.9-1.2,1.3-2c-0.8-1.7-2-3-3.6-4C15.7,6.5,13.9,6,12,6c-0.5,0-1,0-1.4,0.1
        c-0.5,0.1-0.9,0.2-1.4,0.3L7.7,4.8C8.3,4.6,9,4.4,9.8,4.2C10.5,4.1,11.2,4,12,4c2.5,0,4.8,0.7,6.7,2.1s3.4,3.2,4.3,5.4
        c-0.4,1-0.9,1.9-1.5,2.7S20.1,15.8,19.3,16.4z M19.8,22.6l-4.2-4.2c-0.6,0.2-1.2,0.3-1.8,0.4S12.6,19,12,19c-2.5,0-4.8-0.7-6.7-2.1
        c-2-1.4-3.4-3.2-4.3-5.4C1.4,10.6,1.8,9.8,2.3,9c0.5-0.8,1.1-1.4,1.8-2L1.4,4.2l1.4-1.4l18.4,18.4L19.8,22.6z M5.6,8.4
        C5.1,8.8,4.6,9.3,4.2,9.8c-0.4,0.5-0.7,1.1-1,1.7c0.8,1.7,2,3,3.6,4S10.1,17,12,17c0.3,0,0.7,0,1-0.1c0.3,0,0.6-0.1,1-0.1l-0.9-0.9
        c-0.2,0.1-0.4,0.1-0.5,0.1c-0.2,0-0.3,0-0.5,0c-1.2,0-2.3-0.4-3.2-1.3s-1.3-1.9-1.3-3.2c0-0.2,0-0.4,0-0.5c0-0.2,0.1-0.3,0.1-0.5
        L5.6,8.4z"
                  />
                </svg>
              </div>
              <div className="c-login__input">
                <input type="password" placeholder="Repite la contraseña" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 20 26"
                  fill="currentColor"
                >
                  <path
                    d="M16.1,13.3l-1.4-1.4c0.1-0.8-0.1-1.5-0.7-2.2c-0.6-0.7-1.4-1-2.3-0.8l-1.5-1.5c0.3-0.1,0.6-0.2,0.9-0.3C11.4,7,11.7,7,12,7
        c1.2,0,2.3,0.4,3.2,1.3s1.3,1.9,1.3,3.2c0,0.3,0,0.6-0.1,0.9C16.3,12.7,16.2,13,16.1,13.3z M19.3,16.4L17.9,15
        c0.6-0.5,1.2-1,1.7-1.6c0.5-0.6,0.9-1.2,1.3-2c-0.8-1.7-2-3-3.6-4C15.7,6.5,13.9,6,12,6c-0.5,0-1,0-1.4,0.1
        c-0.5,0.1-0.9,0.2-1.4,0.3L7.7,4.8C8.3,4.6,9,4.4,9.8,4.2C10.5,4.1,11.2,4,12,4c2.5,0,4.8,0.7,6.7,2.1s3.4,3.2,4.3,5.4
        c-0.4,1-0.9,1.9-1.5,2.7S20.1,15.8,19.3,16.4z M19.8,22.6l-4.2-4.2c-0.6,0.2-1.2,0.3-1.8,0.4S12.6,19,12,19c-2.5,0-4.8-0.7-6.7-2.1
        c-2-1.4-3.4-3.2-4.3-5.4C1.4,10.6,1.8,9.8,2.3,9c0.5-0.8,1.1-1.4,1.8-2L1.4,4.2l1.4-1.4l18.4,18.4L19.8,22.6z M5.6,8.4
        C5.1,8.8,4.6,9.3,4.2,9.8c-0.4,0.5-0.7,1.1-1,1.7c0.8,1.7,2,3,3.6,4S10.1,17,12,17c0.3,0,0.7,0,1-0.1c0.3,0,0.6-0.1,1-0.1l-0.9-0.9
        c-0.2,0.1-0.4,0.1-0.5,0.1c-0.2,0-0.3,0-0.5,0c-1.2,0-2.3-0.4-3.2-1.3s-1.3-1.9-1.3-3.2c0-0.2,0-0.4,0-0.5c0-0.2,0.1-0.3,0.1-0.5
        L5.6,8.4z"
                  />
                </svg>
              </div>
              <button type="submit">Registrarse</button>
            </form>
          </div>
        </div>
      </div>
      <p>
        Al iniciar sesión, aceptas las Condiciones de uso y la Política de
        privacidad de Arte Floral.
      </p>
    </>
  );
}
