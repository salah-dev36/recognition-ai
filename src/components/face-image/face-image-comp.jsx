import React from "react";

import Spinner from "../spinner/spinner-comp";

import "./face-image-styles.scss";

const FaceImage = ({ imgUrl, boxes, imgRef, loading }) => {
  return (
    <div ref={imgRef} className="img-container">
      <img src={imgUrl} alt=""/>
      {loading ? (
        <Spinner />
      ) : (
        boxes.map((boxStyles, i) => (
          <div key={i} className="bounding-box" style={boxStyles} />
        ))
      )}
    </div>
  );
};

export default FaceImage;
