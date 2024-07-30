import React from "react";
import "./Dashboard.css";
import Navbar from "../../Utilities/Navbar/Navbar";
import Sidebar from "../../Utilities/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="right-half">
        <Navbar title={"Dashboard"}/>
      </div>
    </div>
  );
};

export default Dashboard;
