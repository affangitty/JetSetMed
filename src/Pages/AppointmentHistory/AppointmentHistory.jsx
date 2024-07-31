import React from "react";
import "./AppointmentHistory.css";
import AppointmentCard from "../../Components/AppointmentCard/AppointmentCard";
import Sidebar from "../../Utilities/Sidebar/Sidebar";
import Navbar from "../../Utilities/Navbar/Navbar";
import SearchInput from "../../Utilities/SearchInput/SearchInput";
import DateInput from "../../Utilities/DateInput/DateInput";
import PeopleInput from "../../Utilities/PeopleInput/PeopleInput";

const AppointmentHistory = () => {
  return (
    <div className="history">
      <Sidebar />
      <div className="rightt">
        <div className="right-half">
          <Navbar title={"Appointment History"} />
        </div>
        <div className="aph">
          <div className="aph-top-bar">
            <SearchInput />
            <DateInput />
            <PeopleInput />
          </div>
          <div className="AppointmentCards">
            <div className="Ac1">
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
            </div>
            <div className="Ac2">
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHistory;
