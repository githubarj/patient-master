import { useNavigate } from "react-router";
import PropTypes from "prop-types";

function Actions({ id }) {
  const navigate = useNavigate();

  function setAction(e) {
    const { value } = e.target;
    value == "edit" && navigate(`patient-form/${id}`);
  }

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
