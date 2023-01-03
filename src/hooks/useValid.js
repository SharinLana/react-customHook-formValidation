import { useState } from "react";

const useValidate = () => {
  const [firstName, setFirstName] = useState({
    state: undefined,
    value: "",
  });
  const [lastName, setLastName] = useState({
    state: undefined,
    value: "",
  });
  const [email, setEmail] = useState({ state: undefined, value: "" });
  const [address, setAddress] = useState({ state: undefined, value: "" });
  const [city, setCity] = useState({
    state: undefined,
    value: "",
  });
  const [country, setCountry] = useState({ state: undefined, value: "" });
  const [postalCode, setPostalCode] = useState({
    state: undefined,
    value: "",
  });

  const validateFirstName = (value) => {
    if (!isNaN(value) || value.match(/[0-9]/g) || value.trim().length < 2) {
      setFirstName({ state: false, value: "" });
      return;
    } else setFirstName({ state: true, value: value.toUpperCase() });
  };

  const validateLastName = (value) => {
    if (!isNaN(value) || value.match(/[0-9]/g) || value.trim().length < 2) {
      setLastName({ state: false, value: "" });
      return;
    } else {
      setLastName({ state: true, value: value.toUpperCase() });
    }
  };

  const validateEmail = (value) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-]{2,3})$/;
    if (!value.match(emailRegex)) {
      setEmail({ state: false, value: "" });
      return;
    } else {
      setEmail({ state: true, value: value });
    }
  };

  const validateAddress = (value) => {
    if (!isNaN(value) || value.trim() === "") {
      setAddress({ state: false, value: "" });
      return;
    } else {
      setAddress({ state: true, value: value });
    }
  };

  const validateCity = (value) => {
    if (!isNaN(value) || value.match(/[0-9]/g) || value.trim().length < 2) {
      setCity({ state: false, value: "" });
      return;
    } else {
      setCity({ state: true, value: value.toUpperCase() });
    }
  };

  const validateCountry = (value) => {
    if (value === "Select") {
      setCountry({ state: false, value: "" });
      return;
    } else {
      setCountry({ state: true, value: value });
    }
  };

  const validateZipCode = (value) => {
    if (isNaN(value) || value.trim().length !== 5) {
      setPostalCode({ state: false, value: "" });
      return;
    } else {
      setPostalCode({ state: true, value: value });
    }
  };

  // THE ENTIRE FORM VALIDATION
  let validForm;

  firstName.state &&
  lastName.state &&
  email.state &&
  address.state &&
  city.state &&
  country.state &&
  postalCode.state
    ? (validForm = true)
    : (validForm = false);

  return {
    firstName,
    lastName,
    email,
    address,
    city,
    country,
    postalCode,
    validateFirstName,
    validateLastName,
    validateEmail,
    validateAddress,
    validateCity,
    validateCountry,
    validateZipCode,
    validForm,
  };
};

export default useValidate;
