import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import ParticlesTs from "./components/particles/particles-comp";
import Header from "./routes/header/header-comp";
import HomePage from "./routes/homepage/homepage-comp";
import SignIn from "./routes/sign-in/sign-in-comp";
import SignUp from "./routes/sign-up/sign-up-comp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
      <ParticlesTs />
    </>
  );
};

export default App;
