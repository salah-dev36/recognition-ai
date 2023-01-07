import React from "react";

import "./url-form-styles.scss";

const UrlForm = ({ handleInput, handleSubmit }) => {
  return (
    <div className="container card">
      <span>Use latest AI feature to detect faces on any image</span>
      <div className="form">
        <input
          type="text"
          placeholder="Copy 'png'or 'jpg' image link URL"
          onChange={handleInput}
        />
        <button className="bg" onClick={handleSubmit}>
          Process
        </button>
      </div>
    </div>
  );
};

export default UrlForm;
