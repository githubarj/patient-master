import Header from "../../Components/Header/Header";
import Form from "../../Components/Form/Form";
import { createContext, useCallback, useEffect, useReducer } from "react";
import { reducer, formObject } from "../../Components/Utility/utils";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

export const FormContext = createContext();

function PatientsForm() {
  //Doing it with useReducer
  const [formData, dispatch] = useReducer(reducer, formObject);

  //prefill the form
  const { id } = useParams();

  useEffect(() => {
    id &&
      axios
        .get(`http://localhost:3000/patients/${id}`)
        .then((response) => {
          return dispatch({ type: "edit", payload: response.data });
        })
        .catch((err) => console.error(err));
  }, []);

  //resetting the form
  function clearForm() {
    dispatch({ type: "clear", payload: formObject });
  }
  //Navigating back
  const navigate = useNavigate();
  const goBack = useCallback(() => {
    navigate("../");
  }, []);

  return (
    <FormContext.Provider value={{ formData, dispatch, goBack }}>
      <div className="page-container ">
        <Header heading="ADD PATIENT" clearForm={clearForm} goBack={goBack} />
        <Form />
      </div>
    </FormContext.Provider>
  );
}

export default PatientsForm;
