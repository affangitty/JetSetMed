import React from 'react'
import "./MedicalCard.css"
import pencil from "../../../public/Images/Icons/pencil.png"
import download from "../../../public/Images/Icons/download.png"

const MedicalCard = () => {
  return (
    <div className="Mcard">
      <div className="mctop">
        <h1>My MedicalReport</h1>
        <img src={pencil} />
      </div>
      <div className="mclow"></div>
    </div>
  )
}

export default MedicalCard
