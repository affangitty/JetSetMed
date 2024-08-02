import React from "react";
import "./Navbar.css";
import userData from "../../Data/user-data.js";

const Navbar = ({ title }) => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">{title}</h1>
      <div className="navright">
        <img
          className="notif"
          src="../../public/Images/Icons/notification.png"
        />
        <div className="profile">
          <img className="pfp" src={userData.image} />
          <div className="pinfo">
            <h1>{userData.name}</h1>
            <div className="profbutton">
              <p>Premium</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
