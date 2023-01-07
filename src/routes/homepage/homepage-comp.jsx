import React, { useState, useEffect } from "react";
import { useElementSize } from "usehooks-ts";

import Logo from "../../components/logo/logo-comp";
import UrlForm from "../../components/url-form/url-form-comp";
import FaceImage from "../../components/face-image/face-image-comp";

import { clarifaiFetch } from "../../clarifai/clarifai-request";
import { calculateFaceBoxes } from "../../utils/face-boxes";

const HomePage = () => {
  const [inputField, setInputField] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [boxes, setBoxes] = useState([]);
  const [boxesResponse, setBoxesResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  const [imageRef, { width, height }] = useElementSize();
  const dimensions = { width, height };

  useEffect(() => {
    setBoxes(calculateFaceBoxes(boxesResponse, dimensions));
  }, [width, height]);

  const handleInput = (e) => {
    setInputField(e.target.value);
  };

  const handleSubmit = () => {
    setImgUrl(inputField);
    setBoxes([]);
    setLoading(true);

    clarifaiFetch(inputField)
      .then((data) => {
        const boxes = data.outputs[0].data.regions?.map((region) => {
          return region.region_info.bounding_box;
        });
        setBoxesResponse(boxes);
        setBoxes(calculateFaceBoxes(boxes, dimensions));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("error:", err);
      });
  };
  return (
    <div className="home-container">
      <Logo />
      <UrlForm handleInput={handleInput} handleSubmit={handleSubmit} />
      <FaceImage
        loading={loading}
        imgUrl={imgUrl}
        boxes={boxes}
        imgRef={imageRef}
      />
    </div>
  );
};

export default HomePage;
