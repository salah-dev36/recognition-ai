import React from "react";

import "./form-input-styles.scss";

const FormInput = ({ label, inputProps }) => {
  return (
    <div className="input-container">
      <input required {...inputProps} />
      <label
        className={`${
          inputProps.value &&
          typeof inputProps.value === "string" &&
          inputProps.value
            ? "shrink"
            : ""
        }`}
        htmlFor={inputProps.name}
        required
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
