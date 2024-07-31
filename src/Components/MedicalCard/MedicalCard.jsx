import React from 'react'
import "./MedicalCard.css"
import pencil from "../../../public/Images/Icons/pencil.png"
import download from "../../../public/Images/Icons/download.png";

const MedicalCard = () => {
  return (
    <div className="Mcard">
      <div className="mctop">
        <h1>My Medical Report</h1>
        <img src={pencil} />
      </div>
      <div className="mclow">
        <div className="mcleft"><div className="mclu"><p>December 21, 2023</p></div>
        <p>Do amet velit eu fugiat dolore proident consectetur cillum mollit.</p>
        </div>
        <div className="mccircle"><img src={download} /></div>
      </div>
    </div>
  )
}

export default MedicalCard
