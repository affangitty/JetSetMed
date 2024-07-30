import React from "react";
import "./AppointmentHistory.css";
import Sidebar from "../../Utilities/Sidebar/Sidebar";
import Navbar from "../../Utilities/Navbar/Navbar";

const AppointmentHistory = () => {
  return (
    <div className="history">
      <Sidebar />
      <div className="right-half">
        <Navbar title={"Appointment History"}/>
      </div>
    </div>
  );
};

export default AppointmentHistory;
