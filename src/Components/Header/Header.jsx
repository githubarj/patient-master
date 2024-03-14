import PropTypes from "prop-types";
import "./header.css";
import {  useLocation } from "react-router-dom"
import { formObject } from "../Utility/utils"
import { FormContext } from "../../Routes/PatientsForm/PatientsForm"
import { useContext } from "react"

export default function Header({ heading }) {

  const location = useLocation()


 
    const {dispatch}  = useContext(FormContext)
  

  function clearForm (){
    dispatch({ type: "clear" , payload: formObject })
  }

  return (
    <div className="header-container">
      <p>{heading}</p>
    {location.pathname == "/patient-form" &&   <button className ="clear-form-btn"  
    onClick={clearForm}
     >
        Clear Form
      </button>}
    </div>
  )
}

Header.propTypes = {
  heading: PropTypes.string,
};
