import React from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../components/logo/logo-comp";
import FormInput from "../../components/form-input/form-input-comp";
import Button from "../../components/button/button-comp";

import "./sign-in-styles.scss";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="sign-in-container card">
      <Logo />
      <h3>sign in here</h3>
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
      <Button children="sign in" />
      <p>
        Don't have an account?{" "}
        <span onClick={() => navigate("/sign-up")}>sign up</span>
      </p>
    </div>
  );
};

export default SignIn;
