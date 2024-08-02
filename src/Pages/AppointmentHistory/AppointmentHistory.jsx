import React from "react";
import "./AppointmentHistory.css";
import AppointmentCard from "../../Components/AppointmentCard/AppointmentCard";
import SearchInput from "../../Utilities/SearchInput/SearchInput";
import DateInput from "../../Utilities/DateInput/DateInput";
import PeopleInput from "../../Utilities/PeopleInput/PeopleInput";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";

const AppointmentHistory = () => {
  return (
    <>
    <DashboardLayout title="Appointment History">
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
    </DashboardLayout>
    </>
  );
};

export default AppointmentHistory;
