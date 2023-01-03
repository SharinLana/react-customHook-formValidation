import React from "react";
import "./Name.css";

const LastName = ({ onChange, enteredLastName, value }) => {
  return (
    <div className="container">
      <label htmlFor="lastName">Last name:</label>
      <input
        className={`"nameInput" ${
          !enteredLastName && enteredLastName !== undefined
            ? "nameInput error"
            : "nameInput"
        }`}
        id="lastName"
        placeholder="Last name"
        onChange={onChange}
        value={value}
        required
      />
      {!enteredLastName && enteredLastName !== undefined && (
        <p className="warning">Incorrect last name!</p>
      )}
    </div>
  );
};

export default LastName;
