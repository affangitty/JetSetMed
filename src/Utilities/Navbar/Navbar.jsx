import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return <div className="navbar">
    <h1>Dashboard</h1>
    <div className="navright">
      <img className="notif" src="../../public/Images/Icons/notification.png" />
      <div className="profile">
        <img className="pfp" src="../../public/Images/pfp.png" />
        <div className="pinfo">
          <h1>Gagan N Banganagiri</h1>
        <div className="profbutton"><p>Premium</p></div>
        </div>
      </div>
    </div>
  </div>;
};

export default Navbar;
