import { createContext, useState } from "react";
import Body from "../../Components/Body/Body";
import DeleteConfirmation from "../../Components/DeleteConformation/DeleteConformation";
import Header from "../../Components/Header/Header";
import "./patientsTable.css";

export const TableContext = createContext();

export default function PatientsTable() {
  const [deletePopup, setOpen] = useState({
    open: false,
    id: "",
  });

  function togglePopup() {
    setOpen((prev) => ({ ...prev, open: !prev.open }));
  }

  document.body.style.overflowY = deletePopup.open ? "hidden" : "auto";

  return (
    <TableContext.Provider value={{ togglePopup, setOpen }}>
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
