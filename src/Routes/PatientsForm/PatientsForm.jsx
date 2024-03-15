import Header from "../../Components/Header/Header";
import Form from "../../Components/Form/Form";
import { createContext , useCallback, useReducer} from "react"
import {  reducer, formObject } from "../../Components/Utility/utils"
import { useNavigate } from "react-router";

export const FormContext = createContext()

function PatientsForm() {

  //Doing it with useReducer
  const [formData, dispatch] = useReducer(reducer, formObject)

  //resetting the form
    function clearForm() {
      dispatch({ type: "clear", payload: formObject });
    }
  //Navigating back
  const navigate = useNavigate()
  const goBack = useCallback(() => {
      navigate("../")
  }, [])
  
  return (
  <FormContext.Provider value ={{formData, dispatch,  goBack}}>
    <div className="page-container ">
      <Header heading="Patient Master Register" clearForm={clearForm} goBack = {goBack} />
      <Form />
    </div>
  </FormContext.Provider >
  );
}

export default PatientsForm;
