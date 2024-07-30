import React from 'react'
import "./AppointmentCard.css"
import doctor from "../../../public/Images/Icons/doctor.png"
import rightarrow from "../../../public/Images/Icons/rightarrow.png"

const AppointmentCard = () => {
  return (
    <div className="AC">
      <div className="acup">
        <div className="aculeft">
            <img src={doctor} />
            <div className="doctext">
                <h1>Ophthalmologist</h1>
                <p>Dr. Sasi Sharma</p>
            </div>
        </div>
        <div className="acuright">
            <p>Wednesday, 13 March</p>
            <p>3:48 PM</p>
        </div>
      </div>
      <div className="acdown">
        <p>Session #1</p>
        <div className="acdright">
            <p>Report</p>
            <img src={rightarrow} />
        </div>
      </div>
    </div>
  )
}

export default AppointmentCard
