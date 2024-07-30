import React from "react";
import "./Dashboard.css";
import Navbar from "../../Utilities/Navbar/Navbar";
import Sidebar from "../../Utilities/Sidebar/Sidebar";
import Greetings from "../../Components/Greetings/Greetings";
import BookAppointment from "../../Components/BookAppointment/BookAppointment";
import UserCard from "../../Components/UserCard/UserCard";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Navbar title={"Dashboard"} />
        <div className="dashboard-main">
          <div className="dash-left">
            <Greetings name="User " />
            <BookAppointment />
          </div>
          <div className="dash-right">
            <UserCard/>
            <ServiceCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
