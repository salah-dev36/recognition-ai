import React from "react";

import "./button-styles.scss";

const Button = ({ children }) => {
  return <button className="bg button">{children}</button>;
};

export default Button;
