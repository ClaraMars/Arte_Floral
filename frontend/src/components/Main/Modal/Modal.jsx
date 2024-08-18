import "./Modal.css";
import { Alert, Spinner } from "../../../utils/Utils";

export default function Modal(props) {
  const appointment = props.appointment;
  return (
    <Modal
      className="c-modal"
      overlayClassName="c-modal-overlay"
      isOpen={props.isOpen}
      onRequestClose={props.handleCancel}
    >
      <svg
        className="c-modal__close"
        onClick={props.handleCancel}
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#000"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
      {props.error && (
        <Alert
          classes="o-alert--error"
          message="No se ha podido crear la cita, inténtelo de nuevo más tarde."
          isError={props.error}
          setIsError={props.setError}
        />
      )}
      <h2>{props.title}</h2>
      <form className="c-modal__form" onSubmit={props.handleSubmit}>
        <div className="c-modal__form">
          <input
            className="o-input"
            type="text"
            name="name"
            placeholder="Nombre de la cita"
            value={props.appointmentName}
            onChange={props.handleChange}
            required
          />
          <input
            className="o-input"
            type="date"
            name="date"
            value={props.appointmentDate}
            onChange={props.handleChange}
            required
          />
          <textarea
            className="o-textarea"
            name="message"
            placeholder="Explique brevemente el motivo de la cita"
            rows={8}
            value={props.appointmentMessage}
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="c-modal__btn-wrapper">
          <button
            className="o-btn o-btn--secondary"
            type="button"
            onClick={props.handleCancel}
          >
            Cancelar
          </button>
          <button className="o-btn" type="submit">
            {props.isLoading ? <Spinner /> : props.text}
          </button>
        </div>
      </form>
    </Modal>
  );
}
