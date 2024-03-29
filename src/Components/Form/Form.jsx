import { useRef, useContext, useEffect, useMemo } from "react";
import {
  bloodTypes,
  gender,
  kenyanCounties,
  maritalStatuses,
  nairobiConstituencies,
  occupations,
  religions,
  socialMedia,
  status,
  suffix,
  westlandsWards,
} from "../../Data/data";
import "./form.css";
import { FormContext } from "../../Routes/PatientsForm/PatientsForm";
import axios from "axios";
import { useParams } from "react-router";
import { howOld } from "../Utility/utils";

function Form() {
  //get reference of the form
  const formRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { dispatch, formData, goBack } = useContext(FormContext);

  function handleChange(e) {
    let { name, value } = e.target;
    dispatch({ type: name, payload: value });
  }

  // update the age
  const age = useMemo(() => {
    return howOld(formData.age.dateOfBirth);
  }, [formData.age.dateOfBirth]);

  useEffect(() => {
    if (!isNaN(age)) {
      dispatch({ type: "years", payload: age });
    }
  }, [age]);

  //get params to determine if you are updating or adding
  const { id } = useParams();
  async function handleSubmit(e) {
    e.preventDefault();
    // Get today's date
    const today = new Date();
    // Format today's date as YYYY-MM-DD

    try {
      let response;
      let formattedDate = await today.toISOString().split("T")[0];
      id
        ? (response = await axios.put(
            `http://localhost:3000/patients/${id}`,
            formData
          ))
        : (response = await axios.post("http://localhost:3000/patients", {
            ...formData,
            registrationDate: formattedDate,
          }));

      if (!(response.status >= 200 && response.status <= 300)) {
        throw new Error(response);
      }
      console.log(response);
      alert("Patient Added SucessFully");
      goBack();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="form-container">
      <form ref={formRef} className="form-itself" onSubmit={handleSubmit}>
        <section className="form-active-select">
          <label htmlFor="status" className="required">
            Status:
            <select
              onChange={handleChange}
              name="status"
              id="status"
              value={formData.status}
              required
            >
              {status.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </section>
        <section className="form-body">
          <p className="form-body-heading">Basic Info</p>

          <div className="form-row-1">
            <div className="form-part-1">
              <label htmlFor="givenName">
                Patient Name:
                <div className="suffix-gname">
                  <select
                    onChange={handleChange}
                    name="prefix"
                    id="suffix"
                    value={formData.name.prefix}
                  >
                    {suffix.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <input
                    type="text"
                    name="givenName"
                    id="givenName"
                    value={formData.name.givenName}
                    onChange={handleChange}
                    placeholder="Given name"
                    required
                    ref={inputRef}
                  />
                </div>
              </label>

              <label htmlFor="middleName" className="not-visible">
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={formData.name.middleName}
                  onChange={handleChange}
                  placeholder="Middle name"
                />
              </label>

              <label htmlFor="middleName" className="not-visible">
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.name.surname}
                  onChange={handleChange}
                  placeholder="Surname"
                  required
                />
              </label>

              <label htmlFor="aliasName">
                Alias Name:
                <input
                  onChange={handleChange}
                  type="text"
                  name="aliasName"
                  value={formData.aliasName}
                  id="aliasName"
                  placeholder="Alias Name"
                />
              </label>

              <label htmlFor="gender" className="required">
                Gender:
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden></option>
                  {gender.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label htmlFor="bloodType">
                Blood Type:
                <select
                  name="bloodType"
                  id="bloodType"
                  value={formData.bloodType}
                  onChange={handleChange}
                >
                  <option value="" hidden>
                    Unknown
                  </option>
                  {bloodTypes.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label htmlFor="patientImage" className="patient-image-label">
              <p> patientImage </p>
              <input
                className="form-row-1-image"
                type="text"
                id="patientImage"
                name="patientImage"
                placeholder="Patient Image"
                disabled
              />
            </label>
          </div>

          <div className="form-part-2">
            <label htmlFor="years">
              Age:
              <input
                onChange={handleChange}
                type="number"
                disabled
                value={formData.age.years}
                name="years"
                id="years"
                className="age-years"
              />
            </label>
            <label htmlFor="dateOfBirth" className="required">
              Date of Birth:
              <input
                onChange={handleChange}
                type="date"
                value={formData.age.dateOfBirth}
                name="dateOfBirth"
                id="dateOfBirth"
                required
              />
            </label>
            <label htmlFor="maritalStatus">
              Marital Status:
              <select
                name="maritalStatus"
                id="maritalStatus"
                onChange={handleChange}
                value={formData.maritalStatus}
              >
                <option value="" disabled hidden></option>
                {maritalStatuses.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="identify">
              ID No. /Passport No:
              <input
                onChange={handleChange}
                type="text"
                name="identify"
                id="identify"
                value={formData.identify}
                placeholder="National/Millatry/Birth Cert"
              />
            </label>

            <label htmlFor="primaryContact" className="required">
              Primary Contact:
              <input
                onChange={handleChange}
                type="number"
                placeholder="Contact"
                value={formData.primaryContact}
                name="primaryContact"
                id="primaryContact"
                pattern="\d{10}"
                min="0"
                required
              />
            </label>
            <label htmlFor="dateOfBirth" className="required">
              Residence:
              <input
                onChange={handleChange}
                type="text"
                value={formData.location.residence}
                name="residence"
                id="residence"
                required
              />
            </label>
            <label htmlFor="religion">
              Religion:
              <select
                name="religion"
                id="religion"
                value={formData.religion}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Not Specified
                </option>
                {religions.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="nationality" className="required">
              Nationality:
              <input
                onChange={handleChange}
                type="text"
                name="nationality"
                id="nationality"
                value={formData.nationality}
                required
              />
            </label>

            <label htmlFor="occupation">
              Occupation:
              <select
                onChange={handleChange}
                name="occupation"
                id="occupation"
                value={formData.occupation}
              >
                <option value="" disabled hidden>
                  Select occupation
                </option>
                {occupations.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="knewUsThrough">
              Knew Us Through:
              <select
                onChange={handleChange}
                name="knewUsThrough"
                id="knewUsThrough"
                value={formData.knewUsThrough}
              >
                <option value="" disabled hidden>
                  Select Knew About Us Through
                </option>
                {socialMedia.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor=""></label>
            <label htmlFor=""></label>

            <label htmlFor="county">
              County:
              <select
                onChange={handleChange}
                name="county"
                id="county"
                value={formData.location.county}
              >
                <option value="" disabled hidden>
                  Select County:
                </option>
                {kenyanCounties.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="constituency">
              Constituency:
              <select
                onChange={handleChange}
                name="constituency"
                id="constituency"
                value={formData.location.constituency}
              >
                <option value="" disabled hidden>
                  Select constituency
                </option>
                {nairobiConstituencies.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="ward">
              Ward:
              <select
                name="ward"
                id="ward"
                value={formData.location.ward}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Select ward
                </option>
                {westlandsWards.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </section>
        <button type="submit" className="submit-button">
          {id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default Form;

//  <label htmlFor="givenName" className="given-name-label"></label>
