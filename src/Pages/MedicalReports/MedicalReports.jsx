import React, { useState } from "react";
import "./MedicalReports.css";
import Sidebar from "../../Utilities/Sidebar/Sidebar";
import Navbar from "../../Utilities/Navbar/Navbar";
import MedicalCard from "../../Components/MedicalCard/MedicalCard";
import SearchInput from "../../Utilities/SearchInput/SearchInput";
import DateInput from "../../Utilities/DateInput/DateInput";
import UploadButton from "../../Utilities/UploadButton/UploadButton";
import UploadWindow from "../../Components/UploadWindow/UploadWindow";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";

const MedicalReports = () => {
  const [isUploadWindowOpen, setIsUploadWindowOpen] = useState(false);

  const handleUploadClick = () => {
    setIsUploadWindowOpen(true);
  };

  const handleCloseUploadWindow = () => {
    setIsUploadWindowOpen(false);
  };

  return (
    <DashboardLayout title="Medical Reports">
    <div className="mr-top-bar">
    <SearchInput />
    <DateInput />
    <UploadButton onClick={handleUploadClick} />
  </div>
    <div className="mrcol">
      <div className="mrrow">
        <MedicalCard />
        <MedicalCard />
        <MedicalCard />
        <MedicalCard />
      </div>
      <div className="mrrow">
        <MedicalCard />
        <MedicalCard />
        <MedicalCard />
        <MedicalCard />
      </div>
      <div className="mrrow">
        <MedicalCard />
        <MedicalCard />
        <MedicalCard />
        <MedicalCard />
      </div>
    </div>
      {isUploadWindowOpen && <UploadWindow onClose={handleCloseUploadWindow} />}
    </DashboardLayout>
  );
};

export default MedicalReports;
