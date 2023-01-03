import React, { useState } from "react";
import useValidate from "../../hooks/useValid";
import "./Form.css";
import Address from "./FormComponents/Address";
import Email from "./FormComponents/Email";
import FirstName from "./FormComponents/FirstName";
import LastName from "./FormComponents/LastName";
import City from "./FormComponents/City";
import ZipCode from "./FormComponents/ZipCode";
import Country from "./FormComponents/Country";
import Modal from "../UI/Modal";

const Form = () => {
  const [modal, setModal] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [countryValue, setCountryValue] = useState();
  // TO CLEAR INPUT FIELDS AFTER SUCCESSFULLY SUBMITTING THE FORM
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userCountry, setUserCountry] = useState("Select");
  const [userZipCode, setUserZipCode] = useState("");

  const {
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
  } = useValidate();

  const getFirstNameHandler = (e) => {
    validateFirstName(e.target.value);
    setUserFirstName(e.target.value);
  };

  const getLastNameHandler = (e) => {
    validateLastName(e.target.value);
    setUserLastName(e.target.value);
  };

  const getEmailHandler = (e) => {
    validateEmail(e.target.value);
    setUserEmail(e.target.value);
  };

  const getAddressHandelr = (e) => {
    validateAddress(e.target.value);
    setUserAddress(e.target.value);
  };

  const getCityHandler = (e) => {
    validateCity(e.target.value);
    setUserCity(e.target.value);
  };

  const getCountryHandler = (e) => {
    validateCountry(e.target.value);
    setUserCountry(e.target.value);
  };

  const getZipCodeHandler = (e) => {
    validateZipCode(e.target.value);
    setUserZipCode(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!validForm) {
      setShowModal(true);
      setModal({
        message: "ERROR! The form is incomplete.",
        btnText: "OK",
      });
    } else {
      setShowModal(true);
      setModal({
        message: "Success!",
        btnText: "OK",
      });

      // CLEARING INPUT FIELDS
      setUserFirstName("");
      setUserLastName("");
      setUserEmail("");
      setUserAddress("");
      setUserCity("");
      setUserCountry("Select");
      setUserZipCode("");
    }

    // EXTRA CYCLE OF VALIDATION FOR THE <SELECT> TAG
    if (country.value === "") {
      setCountryValue(false);
    } else {
      setCountryValue(true);
    }
  };

  // CLOSING MODAL
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* DISPLAYING THE MODAL WINDOW CONDITIONALLY */}
      {showModal && <Modal modalObj={modal} onCloseModal={closeModal} />}
      <form className="formContainer" onSubmit={submitFormHandler}>
        <div className="nameContainer">
          <FirstName
            onChange={getFirstNameHandler}
            enteredFirstName={firstName.state}
            value={userFirstName}
          />
          <LastName
            onChange={getLastNameHandler}
            enteredLastName={lastName.state}
            value={userLastName}
          />
        </div>
        <Email
          onChange={getEmailHandler}
          userEmail={email.state}
          value={userEmail}
        />
        <Address
          onChange={getAddressHandelr}
          address={address.state}
          value={userAddress}
        />
        {/* CITY, COUNTRY, POSTAL CODE */}
        <div className="locationContainer">
          <City
            onChange={getCityHandler}
            enteredCity={city.state}
            value={userCity}
          />
          <Country
            onChange={getCountryHandler}
            country={country.state}
            countryValue={countryValue}
            value={userCountry}
          />
          <ZipCode
            onChange={getZipCodeHandler}
            userZipCode={postalCode.state}
            value={userZipCode}
          />
        </div>

        {/* BUTTON */}
        <button className="formBtn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
