import React from "react";
import "./ServiceOffered.css";

const ServiceOffered = () => {
  return (
    <div className="service-card">
      <h2>Our Services</h2>
      <ul>
        <li>
          <span className="icon">🧳</span>
          Worldwide Travel Kit Delivery
        </li>
        <li>
          <span className="icon">🩺</span>
          Doctor Consultation
        </li>
        <li>
          <span className="icon">🌎</span>
          Global Medical Assistance
        </li>
      </ul>
      <button>Explore Our Services →</button>
    </div>
  );
};

export default ServiceOffered;
