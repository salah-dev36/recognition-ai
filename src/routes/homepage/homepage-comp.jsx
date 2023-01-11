import React, { useState, useEffect } from "react";
import { useElementSize } from "usehooks-ts";

import Logo from "../../components/logo/logo-comp";
import UrlForm from "../../components/url-form/url-form-comp";
import FaceImage from "../../components/face-image/face-image-comp";

import { calculateFaceBoxes } from "../../utils/face-boxes";
import { fetchRequest } from "../../utils/server-request";

import "./homepage-styles.scss";

const HomePage = ({ currentUser, setCurrentUser }) => {
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

    fetchRequest({ url: inputField }, "clarifai", "post")
      .then((data) => {
        if (data === "invalid-link") {
          setLoading(false);
          alert("please use a valid 'jpg' or 'png' image link");
        } else if (data === "failure") {
          setLoading(false);
          alert("there was an issue, please try again later");
        } else {
          fetchRequest({ id: currentUser.id }, "recognize", "put").then(
            (updatedUser) => {
              if (updatedUser.id) {
                setCurrentUser(updatedUser);
              }
            }
          );

          setBoxesResponse(data);
          setBoxes(calculateFaceBoxes(data, dimensions));
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("error");
      });
  };
  return (
    <div>
      <Logo />
      {currentUser ? (
        <p className="entries">
          {currentUser.name} you have made {currentUser.entries || 0}{" "}
          face-detections
        </p>
      ) : (
        ""
      )}
      <UrlForm
        loading={loading}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
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
