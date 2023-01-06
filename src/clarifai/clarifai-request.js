const CLARIFAI_MODEL = "face-detection";

export const API_URL = `https://api.clarifai.com/v2/models/${CLARIFAI_MODEL}/outputs`;

export const requestOptions = (url) => {
  const raw = JSON.stringify({
    user_app_id: {
      user_id: process.env.REACT_APP_CLARIFAI_USER_ID,
      app_id: process.env.REACT_APP_CLARIFAI_APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url,
          },
        },
      },
    ],
  });

  return {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + process.env.REACT_APP_CLARIFAI_PAT,
    },
    body: raw,
  };
};

export const clarifaiFetch = async (input) => {
  const response = await fetch(API_URL, requestOptions(input));
  const data = await response.json();

  if (data.status.description === "Failure") {
    if (data.status.code === 10020) {
      alert("please use a valid 'jpg' or 'png' image link");
    } else {
      alert("API down please try again later");
    }
  }
  
  return data;
};
