import "./CreateAppointmentModal.css";
import React, { useState } from "react";
import Modal from "react-modal";
import { createAppointment } from "../../../fetch/appointmentFetch";
// import { Alert, Spinner } from "../../../utils/Utils";
import Modal from "../Modal/Modal";

Modal.setAppElement("#root");

const CreateAppointmentModal = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [appointment, setAppointment] = useState({
    name: "",
    date: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAppointment(
      setIsLoading,
      user._id,
      user.token,
      user.refreshToken,
      appointment,
      setError
    );
    console.log(appointment);
    props.onRequestClose();
    handleResetForm();
    props.getAppointmentData();
  };

  const handleCancel = () => {
    props.onRequestClose();
    handleResetForm();
  };

  const handleResetForm = () => {
    setAppointment({
      name: "",
      date: "",
      message: "",
    });
  };

  return (
    <Modal
      title="Solicitar una cita"
      text="Solicitar"
      error={error}
      setError={setError}
      isLoading={isLoading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      appointment={appointment}
      isOpen={props.isOpen}
    />
    // <Modal
    //   className="c-modal"
    //   overlayClassName="c-modal-overlay"
    //   isOpen={props.isOpen}
    //   onRequestClose={handleCancel}
    // >
    //   <svg
    //     className="c-modal__close"
    //     onClick={handleCancel}
    //     xmlns="http://www.w3.org/2000/svg"
    //     height="24px"
    //     viewBox="0 -960 960 960"
    //     width="24px"
    //     fill="#000"
    //   >
    //     <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    //   </svg>
    //   {error && (
    //     <Alert
    //       classes="o-alert--error"
    //       message="No se ha podido crear la cita, inténtelo de nuevo más tarde."
    //       isError={error}
    //       setIsError={setError}
    //     />
    //   )}
    //   <h2>Solicitar una cita</h2>
    //   <form className="c-modal__form" onSubmit={handleSubmit}>
    //     <div className="c-modal__form">
    //       <input
    //         className="o-input"
    //         type="text"
    //         name="name"
    //         placeholder="Nombre de la cita"
    //         value={appointment.name}
    //         onChange={handleChange}
    //         required
    //       />
    //       <input
    //         className="o-input"
    //         type="date"
    //         name="date"
    //         value={appointment.date}
    //         onChange={handleChange}
    //         required
    //       />
    //       <textarea
    //         className="o-textarea"
    //         name="message"
    //         placeholder="Explique brevemente el motivo de la cita"
    //         rows={8}
    //         value={appointment.message}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div className="c-modal__btn-wrapper">
    //       <button
    //         className="o-btn o-btn--secondary"
    //         type="button"
    //         onClick={handleCancel}
    //       >
    //         Cancelar
    //       </button>
    //       <button className="o-btn" type="submit">
    //         {isLoading ? <Spinner /> : "Solicitar"}
    //       </button>
    //     </div>
    //   </form>
    // </Modal>
  );
};

export default CreateAppointmentModal;
