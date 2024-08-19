import "./CreateAppointmentModal.css";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { updateAppointment } from "../../../fetch/appointmentFetch";
import { Alert, Spinner, formatDateToYYYYMMDD } from "../../../utils/Utils";

Modal.setAppElement("#root");

export default function UpdateAppointmentModal(props) {
  const user = JSON.parse(localStorage.getItem("user"));

  const currentAppointment = props.currentAppointment;
  const appointmentId = currentAppointment._id;
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    date: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await updateAppointment(
      setIsLoading,
      appointmentId,
      user.token,
      user.refreshToken,
      appointmentData,
      setError
    );
    props.onRequestClose();
    if (!data || data.status !== 200) return;
    props.setSuccess(true);
    props.setOperationType("actualizada");
    props.getAppointmentData();
  };

  const handleCancel = () => {
    props.onRequestClose();
  };

  useEffect(() => {
    if (!currentAppointment) return;
    setAppointmentData({
      name: currentAppointment.appointment_name,
      date: formatDateToYYYYMMDD(currentAppointment.appointment_date),
      message: currentAppointment.appointment_message,
    });
  }, [currentAppointment]);

  return (
    <Modal
      className="c-modal"
      overlayClassName="c-modal-overlay"
      isOpen={props.isOpen}
      onRequestClose={handleCancel}
    >
      <svg
        className="c-modal__close"
        onClick={handleCancel}
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#000"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
      <h2>Editar una cita</h2>
      {error && (
        <Alert
          classes="o-alert--error"
          message="Ha ocurrido un error, inténtelo de nuevo."
          isError={error}
          setIsError={setError}
        />
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <form className="c-modal__form" onSubmit={handleSubmit}>
          <div className="c-modal__form">
            <input
              className="o-input"
              type="text"
              name="name"
              placeholder="Nombre de la cita"
              value={appointmentData.name}
              onChange={handleChange}
              required
            />
            <input
              className="o-input"
              type="date"
              name="date"
              value={appointmentData.date}
              onChange={handleChange}
              required
            />
            <textarea
              className="o-textarea"
              name="message"
              placeholder="Explique brevemente el motivo de la cita"
              rows={8}
              value={appointmentData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="c-modal__btn-wrapper">
            <button
              className="o-btn o-btn--secondary"
              type="button"
              onClick={handleCancel}
            >
              Cancelar
            </button>
            <button className="o-btn" type="submit">
              {isLoading ? <Spinner /> : "Guardar"}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}
