import React from "react";
import "./QNALayout.css";
import QNASidebar from "../../Utilities/QNASidebar/QNASidebar";

const QNALayout = ({children}) => {
  return (
    <div className="dashboard-container">
      <div className="layout-left">
        <QNASidebar />
      </div>
      <div className="layout-right">{children}</div>
    </div>
  );
};

export default QNALayout;
