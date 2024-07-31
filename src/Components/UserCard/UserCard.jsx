import React from "react";
import "./UserCard.css";
import userData from "../../Data/user-data.js";
import email from "../../../public/Images/Icons/email.png"
import cake from "../../../public/Images/Icons/cake.png"
import blood from "../../../public/Images/Icons/blood.png"
import aeroplane from "../../../public/Images/Icons/aeroplane.png"
import phone from "../../../public/Images/Icons/phone.png"
import edit from "../../../public/Images/Icons/edit.png"

const UserCard = () => {
  return (
    <div className="user-card">
      <div className="user-header">
        <img className="user-avatar" src={userData.image} alt="User" />
        <div>
          <h2 className="user-name">{userData.name}</h2>
          <p className="user-tier">{userData.tier}</p>
        </div>
      </div>
      <div className="user-details">
        <p>
          <span role="img" aria-label="Email">
            <img src={email} />
          </span>
          {userData.email}
        </p>
        <p>
          <span role="img" aria-label="Birthday">
          <img src={cake} />
          </span>
          {userData.birthday}
        </p>
        <p>
          <span role="img" aria-label="Blood Type">
          <img src={blood} />
          </span>
          {userData.bloodType}
        </p>
        <p>
          <span role="img" aria-label="Travel">
          <img src= {aeroplane} />
          </span>
          {userData.travel}
        </p>
        <p>
          <span role="img" aria-label="Phone">
          <img src={phone} />
          </span>
          {userData.phone}
        </p>
      </div>
      <button className="user-editButton"><img src= {edit} /></button>
    </div>
  );
};

export default UserCard;
