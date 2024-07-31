import React from "react";
import "./AppointmentHistory.css";
import Search from "../../Utilities/Search/Search";
import AppointmentCard from "../../Components/AppointmentCard/AppointmentCard";
import Sidebar from "../../Utilities/Sidebar/Sidebar";
import Navbar from "../../Utilities/Navbar/Navbar";

const AppointmentHistory = () => {
  return (
    <div className="history">
      <Sidebar />
      <div className="rightt">
      <div className="right-half">
        <Navbar title={"Appointment History"}/>
      </div>
      <div className="aph">
        <Search/>
        <div className="AppointmentCards">
          <div className="Ac1">
          <AppointmentCard/>
          <AppointmentCard/>
          <AppointmentCard/>
          <AppointmentCard/>
          </div>
          <div className="Ac2">
          <AppointmentCard/>
          <AppointmentCard/>
          <AppointmentCard/>
          <AppointmentCard/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AppointmentHistory;
