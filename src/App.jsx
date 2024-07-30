import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Utilities/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AppointmentHistory from "./Pages/AppointmentHistory/AppointmentHistory";
import MedicalReports from "./Pages/MedicalReports/MedicalReports";
import OurServices from "./Pages/OurServices/OurServices";
// import AppointmentHistory from "./Pages/AppointmentHistory/AppointmentHistory";
// import MedicalReports from "./Pages/MedicalReports/MedicalReports";
// import OurServices from "./Pages/OurServices/OurServices";
// import RewatchTutorial from "./Pages/RewatchTutorial/RewatchTutorial";
// import Logout from "./Pages/Logout/Logout";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/appointment-history" element={<AppointmentHistory/>} />
          <Route path="/medical-reports" element={<MedicalReports/>} />
          <Route path="/our-services" element={<OurServices/>} />
          
          {/* <Route path="/appointment-history" element={<AppointmentHistory />} />
          <Route path="/medical-reports" element={<MedicalReports />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/rewatch-tutorial" element={<RewatchTutorial />} />
          <Route path="/logout" element={<Logout />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
