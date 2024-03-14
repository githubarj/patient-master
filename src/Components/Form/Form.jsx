import { useRef, useState, useContext } from "react";
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


function Form() {
  //get reference of the form
  const formRef = useRef(null);

  //Doing it with state 
  //state to store the data from the form
  // const [formData, setFormData] = useState(formObject);
    // function handleChange(e) {
  //   formUpdate(e,setFormData);
  // }
  const { dispatch, formData } = useContext(FormContext)
  function handleChange (e){
    let {name , value} = e.target
    dispatch({type: name, payload: value})
  }


  return (
    <div className="form-container">
      <form ref={formRef} className="form-itself">
        <section className="form-active-select">
          <label htmlFor="">
            Status:
            <select
              onChange={handleChange}
              name="status"
              id="status"
              value={formData.status}
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
            <div className="form-row-1-inputs">
              <label htmlFor="givenName" className="given-name-label" >Patient Name:
              <div className="fr1-row fr1-row-nolabel ">
                
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
                  />
                </div>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={formData.name.middleName}
                  onChange={handleChange}
                  placeholder="Middle name"
                />
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.name.surname}
                  onChange={handleChange}
                  placeholder="Surname"
                />
              </div>
              </label>
              <div className="fr1-row fr1-row-labled ">
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

                <label htmlFor="gender">
                  Gender:
                  <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
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
            </div>
            
               <label htmlFor= "patientImage" className= "patient-image-label" > 
              <p> patientImage  </p>   
            <input
              className="form-row-1-image"
              type="text"
              id="patientImage"
              name="patientImage"
              placeholder="Patient Image"

            />
            </label>
          </div>

          <div className="form-row-2">
            <div className="fr2-row">
              <label htmlFor="years">
                Age:
                <input
                  onChange={handleChange}
                  type="number"
                  disabled
                  value={formData.age.years}
                  name="years"
                  id="years"
                />
              </label>
              <label htmlFor="dateOfBirth">
                Date of Birth:
                <input
                  onChange={handleChange}
                  type="date"
                  value={formData.age.dateOfBirth}
                  name="dateOfBirth"
                  id="dateOfBirth"
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
            </div>
            <div className="fr2-row">
              <label htmlFor="primaryContact">
                Primary Contact:
                <input
                  onChange={handleChange}
                  type="number"
                  placeholder="Contact"
                  value={formData.primaryContact}
                  name="primaryContact"
                  id="primaryContact"
                />
              </label>
              <label htmlFor="dateOfBirth">
                Residence:
                <input
                  onChange={handleChange}
                  type="text"
                  value={formData.location.residence}
                  name="residence"
                  id="residence"
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

              <label htmlFor="nationality">
                Nationality:
                <input
                  onChange={handleChange}
                  type="text"
                  name="nationality"
                  id="nationality"
                  value={formData.nationality}
                />
              </label>
            </div>
          </div>

          <div className="form-row-3">
            <div className="fr3-row">
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
            </div>
            <div className="fr3-row">
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
          </div>
        </section>
      </form>
    </div>
  );
}

export default Form;
