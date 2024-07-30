import React from 'react'
import "./MedicalReports.css";
import Sidebar from "../../Utilities/Sidebar/Sidebar";
import Navbar from "../../Utilities/Navbar/Navbar";

const MedicalReports = () => {
  return (
    <div className="medical">
      <Sidebar />
      <div className="right-half">
        <Navbar title={"Medical Reports"}/>
      </div>
    </div>
  )
}

export default MedicalReports

