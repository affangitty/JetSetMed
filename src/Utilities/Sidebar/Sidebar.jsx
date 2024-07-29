import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top">
          <div className="logo">
            <h1>JetSetMed</h1>
          </div>
          <div className="horizontal-line"></div>
          <ul className="sidebar-links">
            <li>
              <div>
                <img src="../../public/Images/Icons/dashboard.png" alt="" />{" "}
                Dashboard
              </div>
            </li>
            <li>
              <div>
                <img src="../../public/Images/Icons/doctor.png" alt="" />
                Appointment History
              </div>
            </li>
            <li>
              <div>
                <img src="../../public/Images/Icons/medic-info.png" alt="" />
                Medical Reports
              </div>
            </li>
            <li>
              <div>
                <img src="../../public/Images/Icons/stethoscope.png" alt="" />
                Our Services
              </div>
            </li>
          </ul>
        </div>
        <ul className="sidebar-links">
          <div className="horizontal-line"></div>
          <li>
            <div>
              <img src="../../public/Images/Icons/rewind.png" alt="" />
              Rewatch Tutorial
            </div>
          </li>
          <li>
            <div>
              <img src="../../public/Images/Icons/exit.png" alt="" />
              Logout
            </div>
          </li>
        </ul>
      </div>
      ;
    </>
  );
};

export default Sidebar;
