import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
import { __GetUser } from "../services/UserService";
import Notifications from "../pages/Notifications";

const Nav = ({ currentUser }) => {
  const [user, setUser] = useState("");
  const [notifications, setNotifications] = useState("");

  useEffect(() => {
    getUser();
  });

  const getUser = async () => {
    const user = await __GetUser(currentUser);
    // console.log(user);
    setNotifications(user.Notifications.length);
    setUser(user.user_name);
  };

  return (
    <header className="nav-header">
      <nav>
        <NavLink className="nav-active" to="/notifications">
          Notifications {notifications ? notifications : null}
        </NavLink>
        <NavLink className="nav-active" to="/explore">
          Explore
        </NavLink>
        <div className="logo">
          <h2>🐾</h2>
        </div>
        <NavLink className="nav-active" to="/feed">
          Feed
        </NavLink>
        <NavLink className="nav-active" to="/profile">
          {user}
        </NavLink>
        <NavLink
          className="nav-active"
          to="/"
          onClick={() => localStorage.clear()}
        >
          Sign Out
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
