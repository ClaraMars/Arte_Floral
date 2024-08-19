import "./Appointments.css";
import { useEffect, useState } from "react";
import CreateAppointmentModal from "./CreateAppointmentModal";
import UpdateAppointmentModal from "./UpdateAppointmentModal";
import { getAppointments, deleteAppointment } from "@/fetch/appointmentFetch";
import { Alert, Spinner, formatDate } from "@/utils/Utils";

export default function Appointments() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState([]);
  const [currentAppointment, setCurrentAppointment] = useState({});
  const [operationType, setOperationType] = useState("");

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getAppointmentData = async () => {
    const data = await getAppointments(
      setIsLoading,
      user._id,
      user.token,
      user.refreshToken,
      setError
    );
    setData(data.data);
  };

  const handleEditAppointment = (index) => {
    setCurrentAppointment(data[index]);
    setIsUpdateModalOpen(true);
  };

  const handleDelete = async (e, appointment_id) => {
    e.preventDefault();
    const data = await deleteAppointment(
      setIsLoading,
      appointment_id,
      user.token,
      user.refreshToken,
      setError
    );
    if (!data || data.status !== 200) return;
    setSuccess(true);
    setOperationType("eliminada");
    getAppointmentData();
  };

  useEffect(() => {
    getAppointmentData();
  }, []);

  return (
    <div>
      <h2 className="c-appointment__title">Mis citas</h2>
      <div className="o-align-center-space-between">
        {data !== null && data !== undefined && data.length !== 0 ? (
          <p>
            Tienes {data.length}{" "}
            {data.length === 1 ? "cita programada" : "citas programadas"}
          </p>
        ) : (
          <p>No tienes todavía ninguna cita programada.</p>
        )}

        <button
          className="o-btn o-btn--secondary"
          onClick={() => setIsModalOpen(true)}
        >
          Solicitar nueva cita
        </button>
      </div>
      <CreateAppointmentModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onBlur={handleCloseModal}
        getAppointmentData={getAppointmentData}
        setSuccess={setSuccess}
        setOperationType={setOperationType}
      />
      <UpdateAppointmentModal
        isOpen={isUpdateModalOpen}
        onRequestClose={() => setIsUpdateModalOpen(false)}
        onBlur={() => setIsUpdateModalOpen(false)}
        getAppointmentData={getAppointmentData}
        currentAppointment={currentAppointment}
        setSuccess={setSuccess}
        setOperationType={setOperationType}
      />
      <div>
        {error && (
          <Alert
            classes="o-alert--error"
            message="Ha habido un error, inténtelo de nuevo más tarde."
            isError={error}
            setIsError={setError}
          />
        )}
        {success && (
          <Alert
            classes="o-alert--success"
            message={`La cita ha sido ${operationType} correctamente.`}
            isError={success}
            setIsError={setSuccess}
          />
        )}

        {isLoading ? (
          <Spinner />
        ) : (
          data !== null &&
          data !== undefined &&
          data.length !== 0 && (
            <ul>
              {data.map((appointment, index) => (
                <li
                  className="c-appointment__content"
                  key={appointment._id || index}
                >
                  <div className="o-align-center-space-between">
                    <h5 className="c-appointment__name">
                      {appointment.appointment_name}
                    </h5>
                    <div className="c-appointment__btn-wrapper">
                      <button
                        className="c-appointment__btn c-appointment__btn--edit"
                        onClick={handleEditAppointment.bind(this, index)}
                        title="Editar cita"
                      >
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
                      <button
                        className="c-appointment__btn c-appointment__btn--delete"
                        onClick={(e) => handleDelete(e, appointment._id)}
                        title="Eliminar cita"
                      >
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
                  <p className="c-appointment__message">
                    {appointment.appointment_message}
                  </p>
                  {appointment.createdAt !== appointment.updatedAt && (
                    <p className="o-fs-details c-appointment__edited">
                      Fecha actualizada el {formatDate(appointment.updatedAt)}
                    </p>
                  )}
                  <p className="c-appointment__selected-date">
                    <strong>Fecha seleccionada:</strong>{" "}
                    {formatDate(appointment.appointment_date)}
                  </p>
                </li>
              ))}
            </ul>
          )
        )}
      </div>
    </div>
  );
}
