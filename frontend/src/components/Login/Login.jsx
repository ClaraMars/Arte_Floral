import "./Login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Password_eye from "./Password_eye";
import { LoginFetch, RegisterFetch } from "../../fetch/userFetch";
import { Alert, Spinner } from "../../utils/utils";

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState({ login: false, register: false });
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
    showPassword: false,
    remember: false,
  });

  const [register, setRegister] = useState({
    email: "",
    password: "",
    repeated: "",
    showPassword: false,
    showRepeatedPassword: false,
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    handleRememberMe();
    const data = await LoginFetch(
      setIsLoading,
      login.email,
      login.password,
      setError
    );
    if (!data || data.status !== 200) return;
    setData(data.data);
    navigate("/");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = await RegisterFetch(
      setIsLoading,
      register.email,
      register.password,
      register.repeated,
      setError
    );
    data && data.status === 200 && setSuccess(true);
    resetFields();
  };

  const handleRememberMe = () => {
    if (login.remember) {
      localStorage.setItem(
        "Credentials",
        JSON.stringify({ email: login.email, password: login.password })
      );
      return;
    }
    localStorage.removeItem("Credentials");
  };

  const resetFields = () => {
    setLogin({
      email: "",
      password: "",
      showPassword: false,
      remember: false,
    });
    setRegister({
      email: "",
      password: "",
      repeated: "",
      showPassword: false,
      showRepeatedPassword: false,
    });
  };

  useEffect(() => {
    const credentials = JSON.parse(localStorage.getItem("Credentials"));
    if (credentials) {
      setLogin(() => ({
        ...login,
        email: credentials.email,
        password: credentials.password,
        remember: true,
      }));
    }
  }, []);

  return (
    <>
      <div className="c-login__wrapper">
        <div className=" o-container c-login__content">
          {error && (
            <Alert
              classes="o-alert--error"
              message="Email o constraseña incorrectos."
              isError={error}
              setIsError={setError}
            />
          )}
          {success && (
            <Alert
              classes="o-alert--success"
              message="Usuario registrado correctamente."
              isError={success}
              setIsError={setSuccess}
            />
          )}
          <div className="c-login__content-form-wrapper">
            <h3>Inicia sesión</h3>
            <form className="c-login__content-form" onSubmit={handleLogin}>
              <div>
                <input
                  className="o-input"
                  type="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setLogin({ ...login, email: e.target.value })
                  }
                  value={login.email}
                />
                <div className="o-input o-align-center-space-between">
                  <input
                    className="o-input--password"
                    type={login.showPassword ? "text" : "password"}
                    placeholder="Contraseña"
                    onChange={(e) =>
                      setLogin({ ...login, password: e.target.value })
                    }
                    value={login.password}
                  />
                  <Password_eye
                    showPassword={login.showPassword}
                    onClick={() =>
                      setLogin({ ...login, showPassword: !login.showPassword })
                    }
                  />
                </div>
                <label className="c-login__checkbox">
                  <input
                    type="checkbox"
                    checked={login.remember}
                    onChange={(e) =>
                      setLogin({ ...login, remember: e.target.checked })
                    }
                  />
                  <span>Recordar sesión</span>
                </label>
              </div>
              <div>
                <button
                  className={`o-btn ${isLoading.login && "o-btn--disabled"}`}
                  type="submit"
                >
                  {isLoading.login ? <Spinner /> : "Iniciar sesión"}
                </button>
                <p className="o-fs-details c-login__forgot-password">
                  ¿Has olvidado tu contraseña?
                </p>
              </div>
            </form>
          </div>
          <div className="c-login__content-form-wrapper">
            <h3>Regístrate</h3>
            <form className="c-login__content-form" onSubmit={handleRegister}>
              <div>
                <input
                  className="o-input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={(e) =>
                    setRegister({ ...register, email: e.target.value })
                  }
                  value={register.email}
                />
                <div className="o-input o-align-center-space-between">
                  <input
                    className="o-input--password"
                    type={register.showPassword ? "text" : "password"}
                    placeholder="Contraseña"
                    name="password"
                    onChange={(e) =>
                      setRegister({ ...register, password: e.target.value })
                    }
                    value={register.password}
                  />
                  <Password_eye
                    showPassword={register.showPassword}
                    onClick={() =>
                      setRegister({
                        ...register,
                        showPassword: !register.showPassword,
                      })
                    }
                  />
                </div>
                <div className="o-input o-align-center-space-between">
                  <input
                    className="o-input--password"
                    type={register.showRepeatedPassword ? "text" : "password"}
                    placeholder="Repite la contraseña"
                    name="repeated"
                    onChange={(e) =>
                      setRegister({ ...register, repeated: e.target.value })
                    }
                    value={register.repeated}
                  />
                  <Password_eye
                    showPassword={register.showRepeatedPassword}
                    onClick={() =>
                      setRegister({
                        ...register,
                        showRepeatedPassword: !register.showRepeatedPassword,
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <button
                  className={`o-btn ${isLoading.register && "o-btn--disabled"}`}
                  type="submit"
                >
                  {isLoading.register ? <Spinner /> : "Registrarse"}
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
