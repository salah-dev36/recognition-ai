import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/button/button-comp";
import FormInput from "../../components/form-input/form-input-comp";
import Logo from "../../components/logo/logo-comp";

import "./sign-up-styles.scss";

const SignUp = () => {
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
        }}
      />
      <FormInput
        label="email"
        inputProps={{
          type: "email",
          name: "email",
        }}
      />
      <FormInput
        label="password"
        inputProps={{
          type: "password",
          name: "password",
        }}
      />
      <Button children="sign up" />
      <p>
        Already signed up? <span onClick={() => navigate("/")}>sign in</span>
      </p>
    </div>
  );
};

export default SignUp;
