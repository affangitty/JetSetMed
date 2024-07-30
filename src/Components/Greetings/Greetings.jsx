import React from "react";
import "./Greetings.css";
import userData from "../../Data/user-data.js";

const Greetings = () => {
  const getCurrentGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return "Good Morning";
    else if (currentHour < 18) return "Good Afternoon";
    else if (currentHour < 21) return "Good Evening";
    else return "Good Night";
  };

  return (
    <div className="greetings">
      <p>{`${getCurrentGreeting()} ${userData.name}!`}</p>
      <p>We hope you are doing well</p>
    </div>
  );
};

export default Greetings;
