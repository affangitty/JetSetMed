import React from "react";
import "./UploadButton.css";
import download from "../../../public/Images/Icons/download2.png";

const UploadButton = ({ onClick }) => {
  return (
    <div className="upload-btn" onClick={onClick}>
      <img src={download} alt="" className="dwnld-icon"/>
      Upload
    </div>
  );
};

export default UploadButton;
