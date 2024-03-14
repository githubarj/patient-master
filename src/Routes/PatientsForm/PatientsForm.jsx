import Header from "../../Components/Header/Header";
import Form from "../../Components/Form/Form";
import { createContext , useReducer} from "react"
import {  reducer, formObject } from "../../Components/Utility/utils"

export const FormContext = createContext()

function PatientsForm() {

  //Doing it with useReducer
  const [formData, dispatch] = useReducer(reducer, formObject)

  return (
  <FormContext.Provider value ={{formData, dispatch}}>
    <div className="page-container ">
      <Header heading="Patient Master Register" />
      <Form />
    </div>
  </FormContext.Provider >
  );
}

export default PatientsForm;
