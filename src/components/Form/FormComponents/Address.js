import React from "react";
import "./EmailAndAddress.css";

const Address = ({ onChange, address, value }) => {
  return (
    <div className="emailAndAddressContainer">
      {/* SHIPPING ADDRESS, Line 1 */}
      <label htmlFor="address">Your shipping address:</label>
      <input
        className={`"addressInput" ${
          !address && address !== undefined
            ? "addressInput error"
            : "addressInput"
        }`}
        id="address"
        placeholder="Your address"
        required
        onChange={onChange}
        value={value}
      />
      {!address && address !== undefined && (
        <p className="warning">Incorrect address!</p>
      )}
      {/* SHIPPING ADDRESS, Line 2*/}
      <input
        className="addressInput"
        id="address"
        placeholder="Apt, suite, unit, etc (optional)"
        onChange={onChange}
      />
    </div>
  );
};

export default Address;
