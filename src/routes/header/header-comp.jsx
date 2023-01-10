import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import "./header-styles.scss";

const Header = ({ setCurrentUser }) => {
  const { pathname } = useLocation();

  const renderNavigation = (location) => {
    switch (location) {
      case "/home":
        return (
          <Link onClick={() => setCurrentUser(null)} to="/">
            sign out
          </Link>
        );
      case "/":
        return <Link to="/sign-up">sign up</Link>;
      default:
        return <Link to="/">sign in</Link>;
    }
  };

  return (
    <>
      <div className="navbar">{renderNavigation(pathname)}</div>
      <Outlet />
    </>
  );
};

export default Header;
