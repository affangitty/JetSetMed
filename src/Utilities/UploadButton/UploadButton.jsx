import React from "react";
import "./UploadButton.css";
import download from "../../../public/Images/Icons/download2.png";

const UploadButton = () => {
  return (
    <div className="upload-btn">
      <img src={download} alt="" className="dwnld-icon" />
      Upload
    </div>
  );
};

export default UploadButton;
