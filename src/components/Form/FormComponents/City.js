import React from "react";
import "./Location.css";

const City = ({ onChange, enteredCity, value }) => {
  return (
    <div>
      <label htmlFor="city">Your city:</label>
      <input
        className={`"cityInput" ${
          !enteredCity && enteredCity !== undefined
            ? "cityInput error"
            : "cityInput"
        }`}
        id="city"
        placeholder="City"
        onChange={onChange}
        value={value}
        required
      />
      {!enteredCity && enteredCity !== undefined && (
        <p className="warning">Incorrect city!</p>
      )}
    </div>
  );
};

export default City;
