import React from "react";

import "./button-styles.scss";

const Button = ({ children, submitHandler }) => {
  return (
    <button type="submit" onClick={submitHandler} className="bg button">
      {children}
    </button>
  );
};

export default Button;
