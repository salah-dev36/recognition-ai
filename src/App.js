import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";

import ParticlesTs from "./components/particles/particles-comp";
import Header from "./routes/header/header-comp";
import HomePage from "./routes/homepage/homepage-comp";
import SignIn from "./routes/sign-in/sign-in-comp";
import SignUp from "./routes/sign-up/sign-up-comp";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (user !== null) {
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(currentUser));
    if (currentUser) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [currentUser]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header setCurrentUser={setCurrentUser} />}>
          <Route index element={<SignIn setCurrentUser={setCurrentUser} />} />
          <Route
            path="/sign-up"
            element={<SignUp setCurrentUser={setCurrentUser} />}
          />
          <Route
            path="/home"
            element={
              <HomePage
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
        </Route>
      </Routes>
      <ParticlesTs />
    </>
  );
};

export default App;
