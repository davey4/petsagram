import React from "react";
import Nav from "../components/Nav";
import "../styles/Layout.css";

export default ({ children, currentUser }) => {
  return (
    <div className="layout-grid">
      <div className="border"></div>
      <div>
        <Nav currentUser={currentUser} />
        {children}
      </div>
      <div className="border"></div>
    </div>
  );
};
