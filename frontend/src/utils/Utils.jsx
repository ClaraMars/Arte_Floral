import "./Utils.css";
import { useEffect } from "react";

const Spinner = () => {
  return <span className="o-spinner"></span>;
};

const Alert = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.setIsError(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    props.isError && (
      <div className={`o-alert ${props.classes}`}>{props.message}</div>
    )
  );
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const formatDateToYYYYMMDD = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "";
  }
  return date.toISOString().split("T")[0];
};

export { Alert, Spinner, formatDate, formatDateToYYYYMMDD };
