import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

export default ({ currentUser }) => {
  return (
    <header className="nav-header">
      <div className="icon">
        <nav>
          <NavLink className="nav-active" to="/profile">
            {currentUser}
          </NavLink>
          <NavLink
            className="nav-active"
            to="/"
            onClick={() => localStorage.clear}
          >
            Sign out
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
