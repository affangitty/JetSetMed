import React, { useState, useEffect } from "react";
import "./QNASidebar.css";
import logo from "../../../public/Images/Icons/LOGO.png";

const QNASidebar = () => {
  return (
      <div className="qnasidebar">
        <div className="qnasidebar-top">
          <div className="logo">
              <img src={logo} alt="Logo" />
            <h1>
              JetSetMed
            </h1>
          </div>
        </div>
        <div className="qnatitle">
          <h1>Let us take care of your health</h1>
          <p>Fill in this questionnaire to help us help you to the best of our ability!</p>
        </div>
      </div>
  );
};

export default QNASidebar;
