import PropTypes from "prop-types";
import "./header.css";
export default function Header({ heading }) {
  return (
    <div className="header-container">
      <p>{heading}</p>
    </div>
  )
}

Header.propTypes = {
  heading: PropTypes.string,
};
