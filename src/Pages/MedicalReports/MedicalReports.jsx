import React from 'react'
import "./MedicalReports.css";
import Sidebar from "../../Utilities/Sidebar/Sidebar";
import Navbar from "../../Utilities/Navbar/Navbar";
import MedicalCard from '../../Components/MedicalCard/MedicalCard';

const MedicalReports = () => {
  return (
    <div className="medical">
      <Sidebar />
      <div className="right-half">
        <Navbar title={"Medical Reports"}/>
        <div className="mrcol">
        <div className="mrrow">
        <MedicalCard/>
        <MedicalCard/>
        <MedicalCard/>
        <MedicalCard/>
        </div>
        <div className="mrrow">
        <MedicalCard/>
        <MedicalCard/>
        <MedicalCard/>
        <MedicalCard/>
        </div>
        <div className="mrrow">
        <MedicalCard/>
        <MedicalCard/>
        <MedicalCard/>
        <MedicalCard/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MedicalReports

