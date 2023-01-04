import React from "react";
import "./url-form-styles.scss";

const UrlForm = () => {
  return (
    <div className="container">
      <span>Use latest AI feature to detect faces on any image</span>
      <div className="form">
        <input type="text" placeholder="Copy image link URL" />
        <button className="bg">Process</button>
      </div>
    </div>
  );
};

export default UrlForm;
