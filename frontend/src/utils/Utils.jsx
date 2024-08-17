import "./Utils.css";
import { useEffect } from "react";

const Spinner = () => {
  return <span className="o-spinner"></span>;
};

const Alert = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.setIsError(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    props.isError && (
      <div className={`o-alert ${props.classes}`}>{props.message}</div>
    )
  );
};

export { Alert, Spinner };
