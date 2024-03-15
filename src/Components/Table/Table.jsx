import { tableHeaders } from "../../Data/data";
import { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import PropTypes from "prop-types";
import axios from "axios";

import "./table.css";
import Loading from "../Loading/Loading";

export default function Table({ filter }) {
  //Making call to the API to fill in my data in the table
  const [tableData, setTableData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/patients")
      .then((response) => {
        filter
          ? setTableData(response.data.filter((item) => item.status === filter))
          : setTableData(response.data);
      })
      .catch((err) => console.error(err));
  }, [filter]);

  return (
    <div className="table-container">
      {!tableData ? (
        <Loading />
      ) : (
        <table className="patient-records">
          <thead className="patient-headers">
            <tr className="table-headers-row">
              <th></th>
              {tableHeaders.map((item, index) => (
                <th key={index}> {item} </th>
              ))}
            </tr>
          </thead>
          <tbody className="patient-table-body">
            {tableData.map((item, index) => (
              <tr className="patient-table-body-rows" key={index}>
                <td className="tbody-user-icon">
                  <div className="ai-outline-icon">
                    <AiOutlineUser />
                  </div>
                </td>
                <td>{`P${item.id}`} </td>
                <td>{item.name.givenName + " " + " " + item.name.surname}</td>
                <td>{item.registrationDate}</td>
                <td>{item.primaryContact}</td>
                <td>{item.location.residence}</td>

                <td>
                  <div
                    className={`tbody-status-cell status-cell-${item.status.toLowerCase()}`}
                  >
                    {item.status}
                  </div>
                </td>

                <td className="tbody-dropdown">
                  <select name="" id="" className="tbody-actions-select">
                    <option value="">Actions</option>
                    <option value="view">View</option>
                    <option value="edit">Edit</option>
                    <option value="delete">Delete</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

Table.propTypes = {
  filter: PropTypes.string,
};
