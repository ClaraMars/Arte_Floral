import "./CreateAppointmentModal.css";
import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CreateAppointmentModal = (props) => {
  const [appointment, setAppointment] = useState({
    name: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(appointment);
    props.onRequestClose();
  };

  return (
    <Modal
      className="c-modal"
      overlayClassName="c-modal-overlay"
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
    >
      <svg
        className="c-modal__close"
        onClick={props.onRequestClose}
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#000"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
      <h2>Solicitar una cita</h2>
      <form className="c-modal__form" onSubmit={handleSubmit}>
        <div className="c-modal__form">
          <input
            className="o-input"
            type="text"
            name="name"
            placeholder="Nombre de la cita"
            value={appointment.name}
            onChange={handleChange}
            required
          />
          <input
            className="o-input"
            type="date"
            name="date"
            value={appointment.date}
            onChange={handleChange}
            required
          />
          <textarea
            className="o-textarea"
            name="message"
            placeholder="Explique brevemente el motivo de la cita"
            rows={8}
            value={appointment.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="c-modal__btn-wrapper">
          <button
            className="o-btn o-btn--secondary"
            type="button"
            onClick={props.onRequestClose}
          >
            Cancel
          </button>
          <button className="o-btn" type="submit">
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateAppointmentModal;
