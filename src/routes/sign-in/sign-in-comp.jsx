import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { fetchRequest } from "../../utils/server-request";

import Logo from "../../components/logo/logo-comp";
import FormInput from "../../components/form-input/form-input-comp";
import Button from "../../components/button/button-comp";

import "./sign-in-styles.scss";

const defaultFieldsValue = {
  email: "",
  password: "",
};

const SignIn = ({ setCurrentUser }) => {
  const [formFields, setFormFields] = useState(defaultFieldsValue);
  const { email, password } = formFields;

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = () => {
    const { email, password } = formFields;
    if (!email || !password) {
      alert("please enter valid information");
    } else {
      fetchRequest(formFields, "signin", "post")
        .then((data) => {
          if (data.id) {
            navigate("/home");
            setCurrentUser(data);
          } else if (data === "wrong-credentials") {
            alert("Wrong email and password combination");
          } else if (data === "inexistant-user") {
            alert("There is no user registred with this email address");
          }
        })
        .catch((err) => alert("authentication error, please try again later"));
    }
  };

  return (
    <div className="sign-in-container card">
      <Logo />
      <h3>sign in here</h3>
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
      <Button submitHandler={onSubmitHandler} children="sign in" />
      <p>
        Don't have an account? <Link to="/sign-up">sign up</Link>
      </p>
    </div>
  );
};

export default SignIn;
