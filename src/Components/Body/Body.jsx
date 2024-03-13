import "./body.css";
import { FaFingerprint } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineFileExcel } from "react-icons/ai";
import { AiOutlineFilePdf } from "react-icons/ai";
import { status } from "../../Data/data";
import Table from "../Table/Table";
import { useNavigate } from "react-router";

function Body() {
  //Navigate to next add patient page
  const navigate = useNavigate();

  return (
    <div className="body-container">
      <section className="action-area">
        {/* The search inputs and select */}
        <div className="search-inputs">
          <select name="" id=""  >
            <option value="">Filter by status</option>
            {status.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <label htmlFor="">
            <input type="text" />
          </label>
          <label htmlFor="" className="search-patient-elements">
            <input type="text" placeholder="Search Patient" />
            <div className="fingerprint-icon">
              <FaFingerprint />
            </div>
          </label>
        </div>

        {/* The add button and export buttons */}
        <div className="action-btns">
          <button
            className="add-patient"
            onClick={() => navigate("patient-form")}
          >
            <AiOutlineUserAdd /> New Patient
          </button>
          <div className="export-btns">
            <button className="export-btn-icons ebi-first">
              <AiOutlineFileExcel />
            </button>
            <button className="export-btn-icons">
              <AiOutlineFilePdf />
            </button>
          </div>
        </div>
      </section>
      <Table />
    </div>
  );
}

export default Body;
