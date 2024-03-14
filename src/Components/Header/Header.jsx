import PropTypes from "prop-types";
import "./header.css";
import { useLocation } from "react-router-dom";

export default function Header({ heading, clearForm }) {
  const location = useLocation();

  return (
    <div className="header-container">
      <p>{heading}</p>
      {location.pathname == "/patient-form" && (
        <button className="clear-form-btn" onClick={clearForm}>
          Clear Form
        </button>
      )}
    </div>
  );
}

Header.propTypes = {
  heading: PropTypes.string,
  clearForm: PropTypes.func,
};
