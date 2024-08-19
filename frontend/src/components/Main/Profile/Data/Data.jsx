import "./Data.css";
import { useState } from "react";
import Password_eye from "../../Login/Password_eye";

export default function Data() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [login, setLogin] = useState({
    password: "",
    repeatedPassword: "",
    showPassword: false,
    showRepeatedPassword: false,
  });

  const handleResetPassword = () => {
    console.log("Reset password");
  };

  return (
    <div>
      <h2 className="c-appointment__title">Mis datos</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <div className="c-data__reset-password">
        <h5>Modificar contraseña</h5>
        <form
          className="c-data__form o-align-center-space-between"
          onSubmit={handleResetPassword}
        >
          <div className="o-align-center-space-between">
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
            <div className="o-input o-align-center-space-between">
              <input
                className="o-input--password"
                type={login.showRepeatedPassword ? "text" : "password"}
                placeholder="Repite la contraseña"
                onChange={(e) =>
                  setLogin({ ...login, repeatedPassword: e.target.value })
                }
                value={login.repeatedPassword}
              />
              <Password_eye
                showPassword={login.showRepeatedPassword}
                onClick={() =>
                  setLogin({
                    ...login,
                    showRepeatedPassword: !login.showRepeatedPassword,
                  })
                }
              />
            </div>
          </div>
          <button className="o-btn" type="submit">
            Modificar contraseña
          </button>
        </form>
      </div>
    </div>
  );
}
