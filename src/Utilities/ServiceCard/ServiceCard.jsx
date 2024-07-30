import React from 'react'
import "./ServiceCard.css"

const ServiceCard = (props) => {
  return (
    <div className="scard">
      <img src={props.icon}/>
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
      <div className="reddot"></div>
    </div>
  )
}

export default ServiceCard
