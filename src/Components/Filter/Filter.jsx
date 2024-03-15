import { status } from "../../Data/data";
import PropTypes from "prop-types";
function Filter({ setFilter }) {
  function setFilterOnchnage(e) {
    let { value } = e.target;
    setFilter(value == "clear" ? undefined : value);
  }

  return (
    <select name="" id="" onChange={setFilterOnchnage}>
      <option value="" hidden>
        Filter by status
      </option>
      {status.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
      <option value="clear" style={{ color: "var(--red-shade)" }}>
        Clear Filters
      </option>
    </select>
  );
}

Filter.propTypes = {
  setFilter: PropTypes.func,
};

export default Filter;
