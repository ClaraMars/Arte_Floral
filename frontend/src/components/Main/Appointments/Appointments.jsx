import "./Appointments.css";

export default function Appointments() {
  return (
    <div className="">
      <h2 className="c-appointment__title">Mis citas</h2>
      <button className="o-btn o-btn--secondary">Solicitar nueva cita</button>
      <div>
        <div className="c-appointment__content">
          <div className="o-align-center-space-between">
            <h5>Boda Pepa</h5>
            <div className="c-appointment__btn-wrapper">
              <button className="c-appointment__btn c-appointment__btn--edit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#928027"
                >
                  <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                </svg>
              </button>
              <button className="c-appointment__btn c-appointment__btn--delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#6b2e2e"
                >
                  <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
              </button>
            </div>
          </div>
          <p>Cita para la boda de Pepa.</p>
          <p>Fecha seleccionada: 30/08/2024</p>
        </div>
      </div>
    </div>
  );
}
