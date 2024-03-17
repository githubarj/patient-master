import "./deleteConfirmation.css";
import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";
import axios from "axios";

function DeleteConfirmation({ togglePopup, deletePopup }) {
  // toggle a rerender after the delete function runs sucessfully if on home page

  async function deleteItem() {
    try {
      let response = await axios.delete(
        `http://localhost:3000/patients/${deletePopup.id}`
      );
      if (!(response.status >= 200 && response.status < 300)) {
        throw new Error(response);
      } else {
        console.log(response);
        await alert(`Item deleted successfully`);
        togglePopup();
      }
    } catch (err) {
      console.error(err);
      alert(`Error deleting your item : ${err.message}`);
    }
  }

  return (
    <div
      className={`delete-warning-container ${
        deletePopup.open && "show-element"
      }`}
    >
      <div className="d-w-close-icon">
        <MdClose onClick={togglePopup} />
      </div>
      <div className="d-w-content">
        <div className="delete-icon">
          <MdDeleteForever />
        </div>
        <h3>Delete Product</h3>
        <p>
          Do you want to delete this product ? This action can&apos;t be undone
        </p>
      </div>
      <div className="d-w-buttons">
        <button className="d-w-cancel-btn" onClick={togglePopup}>
          Canclel
        </button>
        <button className="d-w-delete-btn" onClick={deleteItem}>
          Delete
        </button>
      </div>
    </div>
  );
}

DeleteConfirmation.propTypes = {
  togglePopup: PropTypes.object,
  deletePopup: PropTypes.func,
};

export default DeleteConfirmation;
