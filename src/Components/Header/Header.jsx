import PropTypes from "prop-types";
import "./header.css";
import { useLocation } from "react-router-dom";

export default function Header({ heading, clearForm, goBack }) {
  const location = useLocation();



  return (
    <div className="header-container">
      <p>{heading}</p>
      <div className="header-btns">
        {location.pathname.startsWith("/patient-form") && (
          <button className="clear-form-btn" onClick={clearForm}>
            Clear Form
          </button>
        )}
        {location.pathname != "/" && <button className="back-nav-btn" onClick={goBack} >Back</button> }
      </div>
    </div>
  );
}

Header.propTypes = {
  heading: PropTypes.string,
  clearForm: PropTypes.func,
  goBack: PropTypes.func
};
