import "./Profile.css";
import { useState } from "react";
import Appointments from "../Appointments/Appointments";

export default function Profile() {
  const [data, setData] = useState(true);
  const [appointments, setAppointments] = useState(false);

  const handleProfile = () => {
    setData(!data);
    setAppointments(!appointments);
  };

  return (
    <div className="o-container c-profile">
      <aside className="c-profile__aside">
        <h2 className="">Mi perfil</h2>
        <span className="c-profile__aside-data" onClick={handleProfile}>
          Mis datos
        </span>
        <span className="c-profile__aside-data" onClick={handleProfile}>
          Mis citas
        </span>
        <span className="c-profile__aside-data--disconect">Desconectar</span>
      </aside>
      <section className="c-profile__section">
        {data && <div>Data</div>}
        {appointments && <Appointments />}
      </section>
    </div>
  );
}
