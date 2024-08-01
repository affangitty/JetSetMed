import React from "react";
import "./Dashboard.css";
import Navbar from "../../Utilities/Navbar/Navbar";
import Sidebar from "../../Utilities/Sidebar/Sidebar";
import Greetings from "../../Components/Greetings/Greetings";
import BookAppointment from "../../Components/BookAppointment/BookAppointment";
import UserCard from "../../Components/UserCard/UserCard";
import ServiceOffered from "../../Components/ServiceOffered/ServiceOffered";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Navbar title={"Dashboard"} />
        <div className="dashboard-main">
          <div className="dash-left">
            <Greetings/>
            <BookAppointment />
          </div>
          <div className="dash-right">
            <UserCard/>
            <ServiceOffered/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
