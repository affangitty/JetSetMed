import React from "react";
import "./OurServices.css";
import Sidebar from "../../Utilities/Sidebar/Sidebar";
import Navbar from "../../Utilities/Navbar/Navbar";

const OurServices = () => {
  return (
    <div className="services">
      <Sidebar />
      <div className="right-half">
        <Navbar title={"Our Services"}/>
      </div>
    </div>
  );
};

export default OurServices;
