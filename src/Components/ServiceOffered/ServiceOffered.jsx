import React from "react";
import "./ServiceOffered.css";
import medicalbox from "../../../public/Images/Icons/medical-box.png"
import stethoscope from "../../../public/Images/Icons/stethoscope.png"
import airplane from "../../../public/Images/Icons/airplane.png"

const ServiceOffered = () => {
  return (
    <div className="service-card">
      <h2>Our Services</h2>
      <ul>
        <li>
          <span className="icon"><img src={medicalbox} /></span>
          Worldwide Travel Kit Delivery
        </li>
        <li>
          <span className="icon"><img src={stethoscope} /></span>
          Doctor Consultation
        </li>
        <li>
          <span className="icon"><img src={airplane} /></span>
          Global Medical Assistance
        </li>
      </ul>
      <button>Explore Our Services →</button>
    </div>
  );
};

export default ServiceOffered;
