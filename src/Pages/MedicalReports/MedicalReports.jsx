import React from "react";
import "./MedicalReports.css";
import Sidebar from "../../Utilities/Sidebar/Sidebar";
import Navbar from "../../Utilities/Navbar/Navbar";
import SearchInput from "../../Utilities/SearchInput/SearchInput";
import DateInput from "../../Utilities/DateInput/DateInput";
import UploadButton from "../../Utilities/UploadButton/UploadButton";

const MedicalReports = () => {
  return (
    <div className="medical">
      <Sidebar />
      <div className="right-half">
        <div className="navbar-container">
          <Navbar title={"Medical Reports"} />
        </div>
        <div className="mr-top-bar">
          <SearchInput />
          <DateInput />
          <UploadButton/>
        </div>
      </div>
    </div>
  );
};

export default MedicalReports;
