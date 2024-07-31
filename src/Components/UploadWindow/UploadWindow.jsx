import React from "react";
import "./UploadWindow.css";
import cross from "../../../public/Images/Icons/cross.png";
const UploadWindow = ({ onClose }) => {
  return (
    <div className="upload-window-overlay">
      <div className="upload-window">
        <div className="upload-window-header">
          <h2>Upload Files</h2>
          <img src={cross} alt="" className="close-button" onClick={onClose} />
        </div>
        <p>You can upload your medical reports here</p>
        <div className="upload-area">
          <p>Drag & drop your files here or</p>
          <button className="choose-files-button">Choose Files</button>
        </div>
        <p className="file-type-info">Only .png files</p>
        <h3>Uploaded Files</h3>
      </div>
    </div>
  );
};

export default UploadWindow;
