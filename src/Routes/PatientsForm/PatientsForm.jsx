import { Form } from "react-router-dom";
import Header from "../../Components/Header/Header";

function PatientsForm() {
  return (
    <div className="page-container ">
      <Header heading="Patient Master Register" />
      <Form />
    </div>
  );
}

export default PatientsForm;
