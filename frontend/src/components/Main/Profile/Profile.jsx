import "./Profile.css";
import { useState } from "react";
import Appointments from "../Appointments/Appointments";

export default function Profile() {
  const [asideData, setAsideData] = useState(true);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="o-container c-profile">
      <aside className="c-profile__aside">
        <h2 className="">Mi perfil</h2>
        <span
          className="c-profile__aside-data"
          onClick={() => setAsideData(true)}
        >
          Mis datos
        </span>
        <span
          className="c-profile__aside-data"
          onClick={() => setAsideData(false)}
        >
          Mis citas
        </span>
        <span
          className="c-profile__aside-data--disconect"
          onClick={handleLogOut}
        >
          Desconectar
        </span>
      </aside>
      <section className="c-profile__section">
        {asideData ? <div>Data</div> : <Appointments />}
      </section>
    </div>
  );
}
