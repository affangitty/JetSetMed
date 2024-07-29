import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return <div className="navbar">
    <h1>Dashboard</h1>
    <div className="navright">
      <div className="notif">
      </div>
      <div className="profile">
        <div className="pfp"></div>
        <div className="pinfo">
          <h3>Gagan N Banganagiri</h3>
        <div className="profbutton"><p>Premium</p></div>
        </div>
      </div>
    </div>
  </div>;
};

export default Navbar;
