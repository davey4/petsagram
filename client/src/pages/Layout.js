import React from "react";
import Nav from "../components/Nav";
import "../styles/Layout.css";

const Layout = ({ children, currentUser }) => {
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

export default Layout;
