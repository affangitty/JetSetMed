import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return <div className="navbar">
    <h1>Dashboard</h1>
    <div className="navright">
      <div className="notif">
      </div>
      <div className="profile"></div>
    </div>
  </div>;
};

export default Navbar;
