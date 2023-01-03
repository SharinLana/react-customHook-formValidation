import React from "react";
import "./Name.css";

const FirstName = ({ onChange, enteredFirstName, value }) => {
  return (
    <div className="container">
      <label htmlFor="firstName">First name:</label>
      <input
        className={`"nameInput" ${
          !enteredFirstName && enteredFirstName !== undefined
            ? "nameInput error"
            : "nameInput"
        }`}
        id="firstName"
        placeholder="First name"
        onChange={onChange}
        value={value}
        required
      />
      {!enteredFirstName && enteredFirstName !== undefined && (
        <p className="warning">Incorrect first name!</p>
      )}
    </div>
  );
};

export default FirstName;
