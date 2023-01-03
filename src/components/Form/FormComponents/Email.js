import React from "react";
import "./EmailAndAddress.css";

const Email = ({ onChange, userEmail, value }) => {
  return (
    <div className="emailAndAddressContainer">
      <label htmlFor="email">Your email:</label>
      <input
        className={`"emailInput" ${
          !userEmail && userEmail !== undefined
            ? "emailInput error"
            : "emailInput"
        }`}
        id="email"
        placeholder="Your email"
        onChange={onChange}
        value={value}
        required
      />
      {!userEmail && userEmail !== undefined && (
        <p className="warning">Incorrect email!</p>
      )}
    </div>
  );
};

export default Email;
