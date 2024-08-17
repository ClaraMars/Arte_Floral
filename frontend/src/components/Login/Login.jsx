import "./Login.css";
import { useState } from "react";
import Password_eye from "./Password_eye";

export default function Login() {
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);

  return (
    <>
      <div className="c-login__wrapper">
        <div className=" o-container c-login__content">
          <div className="c-login__content-form-wrapper">
            <h3>Inicia sesión</h3>
            <form className="c-login__content-form">
              <div>
                <input className="o-input" type="text" placeholder="Email" />
                <div className="o-input o-align-center-space-between">
                  <input
                    className="o-input--password"
                    type={showLoginPassword ? "text" : "password"}
                    placeholder="Contraseña"
                  />
                  <Password_eye
                    showPassword={showLoginPassword}
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                  />
                </div>
                <label className="c-login__checkbox">
                  <input type="checkbox" />
                  <span>Recordar sesión</span>
                </label>
              </div>
              <div>
                <button className="o-btn" type="submit">
                  Iniciar sesión
                </button>
                <p className="o-fs-details c-login__forgot-password">
                  ¿Has olvidado tu contraseña?
                </p>
              </div>
            </form>
          </div>
          <div className="c-login__content-form-wrapper">
            <h3>Regístrate</h3>
            <form className="c-login__content-form">
              <div>
                <input className="o-input" type="text" placeholder="Email" />
                <div className="o-input o-align-center-space-between">
                  <input
                    className="o-input--password"
                    type={showRegisterPassword ? "text" : "password"}
                    placeholder="Contraseña"
                  />
                  <Password_eye
                    showPassword={showRegisterPassword}
                    onClick={() =>
                      setShowRegisterPassword(!showRegisterPassword)
                    }
                  />
                </div>
                <div className="o-input o-align-center-space-between">
                  <input
                    className="o-input--password"
                    type={showRepeatedPassword ? "text" : "password"}
                    placeholder="Repite la contraseña"
                  />
                  <Password_eye
                    showPassword={showRepeatedPassword}
                    onClick={() =>
                      setShowRepeatedPassword(!showRepeatedPassword)
                    }
                  />
                </div>
              </div>
              <div>
                <button className="o-btn" type="submit">
                  Registrarse
                </button>
                <p className="o-fs-details">
                  Al registrarte aceptas las Condiciones de uso y la Política de
                  privacidad de Arte Floral.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
