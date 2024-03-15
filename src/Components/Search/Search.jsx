import { FaFingerprint } from "react-icons/fa";
import PropTypes from "prop-types"

function Search({ setSearch}) {

  function searchingFunc(e){
    const{value} = e.target
    setSearch(value)
  }

  return (
    <label htmlFor="" className="search-patient-elements">
      <input type="text" placeholder="Search Patient"  onChange={searchingFunc} />
      <div className="fingerprint-icon">
        <FaFingerprint />
      </div>
    </label>
  );
}

Search.propTypes = {
    setSearch : PropTypes.func,
    search : PropTypes.string
}

export default Search;
