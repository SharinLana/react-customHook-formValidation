import React from "react";
import "./Location.css";

const Country = ({ onChange, country, countryValue, value }) => {
  return (
    <div>
      <label htmlFor="country">Choose country:</label>
      <select
        id="country"
        required
        onChange={onChange}
        className={`"select" ${
          !countryValue && countryValue !== undefined && !country
            ? "select error"
            : "select"
        }`}
        value={value}
      >
        <option>Select</option>
        <option>United States</option>
        <option>Mexico</option>
      </select>
      {!countryValue && countryValue !== undefined && !country && (
        <p className="warning">Please select country!</p>
      )}
    </div>
  );
};

export default Country;
