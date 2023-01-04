import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Logo from "./components/logo/logo-comp";
import Navigation from "./components/navigation/navigation-comp";
import UrlForm from "./components/url-form/url-form-comp";

import { particlesOptions } from "./utils/particlesjs-config";

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div>
      <Navigation />
      <Logo />
      <UrlForm />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
    </div>
  );
};

export default App;
