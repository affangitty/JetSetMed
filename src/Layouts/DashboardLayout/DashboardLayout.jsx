import React from "react";
import "./DashboardLayout.css";
import Sidebar from "../../Utilities/Sidebar/Sidebar";
import Navbar from "../../Utilities/Navbar/Navbar";

const DashboardLayout = ({ title, children }) => {
  return (
    <div className="dashboard-container">
      <div className="layout-left">
        <Sidebar />
      </div>
      <div className="layout-right">
        <div className="layout-top">
          <Navbar title={title} />
        </div>
        <div className="layout-main">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
