import React from "react";

import "./form-input-styles.scss";

const FormInput = ({ label, inputProps }) => {
  return (
    <div className="input-container">
      <input required {...inputProps} />
      <label required>{label}</label>
    </div>
  );
};

export default FormInput;
