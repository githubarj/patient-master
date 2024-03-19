import { createContext } from "react";
import Body from "../../Components/Body/Body";
import DeleteConfirmation from "../../Components/DeleteConformation/DeleteConformation";
import Header from "../../Components/Header/Header";
import "./patientsTable.css";
import { useToggle } from "../../Components/Hooks/useToggle";

export const TableContext = createContext();

export default function PatientsTable() {
  
  const {deletePopup, togglePopup, setId} = useToggle()

  document.body.style.overflowY = deletePopup.open ? "hidden" : "auto";

  return (
    <TableContext.Provider value={{ togglePopup, setId }}>
      <div className="page-container ">
        <Header heading={"Patient Master Register"} />
        <Body />
        <DeleteConfirmation
          deletePopup={deletePopup}
          togglePopup={togglePopup}
        />
      </div>
      <div className={`overlay ${deletePopup.open && "show-element"} `}></div>
    </TableContext.Provider>
  );
}
