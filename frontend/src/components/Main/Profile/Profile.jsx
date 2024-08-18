import "./Profile.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Appointments from "../Appointments/Appointments";
// import { getAppointments } from "../../../fetch/appointmentFetch";

export default function Profile() {
  const [data, setData] = useState(true);
  const [appointments, setAppointments] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const { userId } = useParams();

  const handleProfile = () => {
    setData(!data);
    setAppointments(!appointments);
  };

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (!user) return;
  //   const isToken = user.token;
  //   const isRefreshToken = user.refreshToken;
  //   const appointments =
  //     (isToken || isRefreshToken) &&
  //     getAppointments(setIsLoading, userId, isToken, isRefreshToken, setError);
  // }, []);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
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
        <span
          className="c-profile__aside-data--disconect"
          onClick={handleLogOut}
        >
          Desconectar
        </span>
      </aside>
      <section className="c-profile__section">
        {data && <div>Data</div>}
        {appointments && <Appointments />}
      </section>
    </div>
  );
}
