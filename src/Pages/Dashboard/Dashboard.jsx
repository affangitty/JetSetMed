    import React from "react";
    import "./Dashboard.css";
    import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
    import Greetings from "../../Components/Greetings/Greetings";
    import BookAppointment from "../../Components/BookAppointment/BookAppointment";
    import UserCard from "../../Components/UserCard/UserCard";
    import ServiceOffered from "../../Components/ServiceOffered/ServiceOffered";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout title={"Dashboard"}>
      <div className="dashboard-main">
          <div className="dash-left">
            <Greetings/>
            <BookAppointment />
          </div>
          <div className="dash-right">
            <UserCard/>
            <ServiceOffered/>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
