import React from "react";
import "./Location.css";

const ZipCode = ({ onChange, userZipCode, value }) => {
  return (
    <div>
      <label htmlFor="postal">ZIP Code:</label>
      <input
        className={`"zipInput" ${
          !userZipCode && userZipCode !== undefined
            ? "zipInput error"
            : "zipInput"
        }`}
        id="postal"
        placeholder="12345"
        onChange={onChange}
        value={value}
        required
      />
      {!userZipCode && userZipCode !== undefined && (
        <p className="warning">Incorrect postal code!</p>
      )}
    </div>
  );
};

export default ZipCode;
