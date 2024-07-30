import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const sidebarLinksTop = [
    { to: "/", src: "Images/Icons/dashboard.png", label: "Dashboard" },
    {
      to: "/appointment-history",
      src: "Images/Icons/doctor.png",
      label: "Appointment History",
    },
    {
      to: "/medical-reports",
      src: "Images/Icons/medic-info.png",
      label: "Medical Reports",
    },
    {
      to: "/our-services",
      src: "Images/Icons/stethoscope.png",
      label: "Our Services",
    },
  ];

  const sidebarLinksBottom = [
    {
      to: "/rewatch-tutorial",
      src: "Images/Icons/rewind.png",
      label: "Rewatch Tutorial",
      className: "rewind-logo",
    },
    { to: "/logout", src: "Images/Icons/exit.png", label: "Logout" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="logo">
          <h1>JetSetMed</h1>
        </div>
        <div className="horizontal-line"></div>
        <ul className="sidebar-links">
          {sidebarLinksTop.map((link, index) => (
            <li key={index}>
              <Link to={link.to}>
                <img src={link.src} alt={link.label} />
                <p>{link.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul className="sidebar-links">
        <div className="horizontal-line"></div>
        {sidebarLinksBottom.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>
              <img src={link.src} alt={link.label} className={link.className} />
              <p>{link.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
