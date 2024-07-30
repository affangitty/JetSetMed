import React from "react";
import "./BookAppointment.css";

const BookAppointment = () => {
  return (
    <div className="appointments-container">
      <h2 className="appointment-h2">Appointments</h2>
      <div className="appointment-box">
        <div className="appointment-content">
          <span className="plus-icon">+</span>
          <p>Book an Appointment</p>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
