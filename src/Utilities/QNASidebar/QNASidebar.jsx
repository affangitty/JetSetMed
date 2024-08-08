import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./QNASidebar.css";
import logo from "../../../public/Images/Icons/LOGO.png";
import hamburgerIcon from "../../../public/Images/Icons/hamburger.png";

const QNASidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleqnaSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const qnasidebarLinksTop = [
    { to: "/", src: "Images/Icons/dashboard.png", label: "Dashboard" },
    {
      to: "/appointment-history",
      src: "Images/Icons/docwhite.png",
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
    {
      to: "/travel-risk-assessment",
      src: "Images/Icons/stethoscope.png",
      label: "Travel Risk Assessment",
    },
  ];

  const qnasidebarLinksBottom = [
    {
      to: "/rewatch-tutorial",
      src: "Images/Icons/rewind.png",
      label: "Rewatch Tutorial",
      className: "rewind-logo",
    },
    { to: "/logout", src: "Images/Icons/exit.png", label: "Logout" },
  ];

  return (
    <div>
      {isMobile && (
        <button className="hamburger-menu" onClick={toggleqnaSidebar}>
          <img src={hamburgerIcon} alt="Menu" />
        </button>
      )}
      <div
        className={`qnasidebar ${isOpen ? "open" : ""} ${
          isMobile ? "mobile" : ""
        }`}
      >
        <div className="qnasidebar-top">
          <div className="logo">
            <h1>
              <img src={logo} alt="Logo" />
              JetSetMed
            </h1>
          </div>
          <div className="horizontal-line"></div>
          <ul className="qnasidebar-links">
            {qnasidebarLinksTop.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `present-link ${isActive ? "active-link" : ""}`
                  }
                >
                  <img src={link.src} alt={link.label} />
                  <p>{link.label}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <ul className="qnasidebar-links">
          <div className="horizontal-line"></div>
          {qnasidebarLinksBottom.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `present-link ${isActive ? "active-link" : ""}`
                }
              >
                <img
                  src={link.src}
                  alt={link.label}
                  className={link.className}
                />
                <p>{link.label}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QNASidebar;
