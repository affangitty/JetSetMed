import React from 'react';
import downarrow from "../../../public/Images/Icons/downarrow.png";
import "./DateInput.css"; // Create this CSS file for DateInput specific styles

const DateInput = () => {
  return (
    <div className="date">
      <input type="text" placeholder="Date" />
      <img src={downarrow} alt="down arrow" />
    </div>
  );
};

export default DateInput;
