//data format for the form
export const formObject = {
  status: "",
  name: {
    prefix: "",
    givenName: "",
    middleName: "",
    surname: "",
  },
  aliasame: "",
  gender: "",
  bloodType: "",
  patientImage: "",
  age: { years: "", dateOfBirth: "" },
  maritalStatus: "",
  identify: "",
  primaryContact: "",
  religion: "",
  nationality: "",
  occupation: "",
  knewUsThrough: "",
  location: {
    residence: "",
    county: "",
    constituency: "",
    ward: "",
  },
};

//function to watch out for chnage in the form and implement it
export function formUpdate(e, setFormData) {
  const { name, value } = e.target;
  switch (name) {
    case "prefix":
    case "givenName":
    case "middleName":
    case "surname":
      setFormData((prev) => ({
        ...prev,
        name: { ...prev.name, [name]: value },
      }));
      break;

    case "years":
    case "dateOfBirth":
      setFormData((prev) => ({
        ...prev,
        age: { ...prev.age, [name]: value },
      }));
      setFormData((prev) => ({
        ...prev,
        age: { ...prev.age, years: howOld(prev.age.dateOfBirth) },
      }));
      break;
    case "residence":
    case "constituency":
    case "county":
    case "ward":
      setFormData((prev) => ({
        ...prev,
        location: { ...prev.location, [name]: value },
      }));
      break;

    default:
      setFormData((prev) => ({ ...prev, [name]: value }));
  }
}


//My Reducerfunction

export function reducer(prev, dispatchedFunction) {
  const {type, payload} = dispatchedFunction
  switch (type) {
    case "clear": 
      return payload;
      break;
    case "prefix":
    case "givenName":
    case "middleName":
    case "surname":
      return {
        ...prev,
        name: { ...prev.name, [type]: payload },
      };
      break;
    case "years":
    case "dateOfBirth":
      return {
        ...prev,
        age: {...prev.age, [type]: payload ,  years: howOld(prev.age.dateOfBirth)},
      };
      break;
    case "residence":
    case "constituency":
    case "county":
    case "ward":
      return {
        ...prev,
        location: { ...prev.location, [type]: payload },
      };
      break;

    default:
      return { ...prev, [type]: payload };
  }
}


//function to calculate number of years
function howOld(dob) {
  const today = new Date();
  const dateOfBirth = new Date(dob);
  let age = today.getFullYear() - dateOfBirth.getFullYear();
  const monthDiff = today.getMonth() - dateOfBirth.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())
  ) {
    age--;
  }
  return age;
}
