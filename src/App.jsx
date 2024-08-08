import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AppointmentHistory from "./Pages/AppointmentHistory/AppointmentHistory";
import MedicalReports from "./Pages/MedicalReports/MedicalReports";
import OurServices from "./Pages/OurServices/OurServices";
import TravelRiskAssessment from "./Pages/TravelRiskAssessment/TravelRiskAssessment";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/appointment-history" element={<AppointmentHistory />} />
          <Route path="/medical-reports" element={<MedicalReports />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/travel-risk-assessment" element={<TravelRiskAssessment/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
