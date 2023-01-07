import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../../components/navigation/navigation-comp";

const Header = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Header;
