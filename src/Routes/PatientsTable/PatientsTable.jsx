import Body from "../../Components/Body/Body";
import Header from "../../Components/Header/Header";
import "./patientsTable.css";

export default function PatientsTable() {
  return (
    <div className="page-container ">
      <Header heading={"Patient Master Register"} />
      <Body />
    </div>
  );
}
