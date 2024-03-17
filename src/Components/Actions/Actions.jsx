import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { TableContext } from "../../Routes/PatientsTable/PatientsTable";
import { useContext } from "react";

function Actions({ id }) {
  const navigate = useNavigate();

  function setAction(e) {
    const { value } = e.target;
    if (value == "edit") {
      navigate(`patient-form/${id}`);
    } else if (value == "delete") {
      togglePopup();
      setOpen((prev) => ({ ...prev, id: id }));
    }
  }

  const { togglePopup, setOpen } = useContext(TableContext);

  return (
    <select name="" id="" className="tbody-actions-select" onChange={setAction}>
      <option value="">Actions</option>
      <option value="view">View</option>
      <option value="edit">Edit</option>
      <option value="delete">Delete</option>
    </select>
  );
}

Actions.propTypes = {
  id: PropTypes.string,
};

export default Actions;
