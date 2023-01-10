import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { postRequestFetch } from "../../utils/server-requests";

import Button from "../../components/button/button-comp";
import FormInput from "../../components/form-input/form-input-comp";
import Logo from "../../components/logo/logo-comp";

import "./sign-up-styles.scss";

const defaultFieldsValue = {
  email: "",
  password: "",
  name: "",
};

const SignUp = ({ setCurrentUser }) => {
  const [formFields, setFormFields] = useState(defaultFieldsValue);
  const { email, password, name } = formFields;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = () => {
    const { email, password, name } = formFields;
    if (!email || !password || !name) {
      alert("please enter valid information");
    } else {
      postRequestFetch(formFields, "signup")
        .then((data) => {
          if (data.id) {
            navigate("/home");
            setCurrentUser(data);
          } else if (data === "existant-email") {
            alert("An account is already linked with this email");
          }
        })
        .catch((err) => alert("registration failure, please try again later"));
    }
  };

  const navigate = useNavigate();

  return (
    <div className="sign-up-container card">
      <Logo />
      <h3>create account</h3>
      <FormInput
        label="name"
        inputProps={{
          type: "text",
          name: "name",
          value: name,
          onChange: onChangeHandler,
        }}
      />
      <FormInput
        label="email"
        inputProps={{
          type: "email",
          name: "email",
          value: email,
          onChange: onChangeHandler,
        }}
      />
      <FormInput
        label="password"
        inputProps={{
          type: "password",
          name: "password",
          value: password,
          onChange: onChangeHandler,
        }}
      />
      <Button submitHandler={onSubmitHandler} children="sign up" />
      <p>
        Already signed up? <Link to="/">sign in</Link>
      </p>
    </div>
  );
};

export default SignUp;
