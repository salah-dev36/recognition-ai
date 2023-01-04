import React from "react";
import Tilt from "react-parallax-tilt";

import icon from "../../assets/ai-logo.png";
import "./logo-styles.scss";

const Logo = () => {
  return (
    <div>
      <Tilt className="logo bg">
        <img src={icon} alt="AI" />
      </Tilt>
    </div>
  );
};

export default Logo;
