import React from "react";
import "./UserCard.css";
import userData from "../../Data/user-data.js";

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
            ✉️
          </span>
          {userData.email}
        </p>
        <p>
          <span role="img" aria-label="Birthday">
            🎂
          </span>
          {userData.birthday}
        </p>
        <p>
          <span role="img" aria-label="Blood Type">
            🩸
          </span>
          {userData.bloodType}
        </p>
        <p>
          <span role="img" aria-label="Travel">
            ✈️
          </span>
          {userData.travel}
        </p>
        <p>
          <span role="img" aria-label="Phone">
            📞
          </span>
          {userData.phone}
        </p>
      </div>
      <button className="user-editButton">✏️</button>
    </div>
  );
};

export default UserCard;
