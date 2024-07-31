import React from 'react';
import downarrow from "../../../public/Images/Icons/downarrow.png";
import "./PeopleInput.css"; // Create this CSS file for PeopleInput specific styles

const PeopleInput = () => {
  return (
    <div className="ppl">
      <input type="text" placeholder="People" />
      <img src={downarrow} alt="down arrow" />
    </div>
  );
};

export default PeopleInput;
