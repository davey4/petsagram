import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BadgedButton } from "@react-md/badge";
import "../styles/Nav.css";
import { __GetUserName } from "../services/UserService";

const Nav = ({ currentUser }) => {
  const [user, setUser] = useState("");
  const [avatar, setAvatar] = useState("");
  const [notifications, setNotifications] = useState("");

  useEffect(() => {
    getUser();
  });

  const getUser = async () => {
    const user = await __GetUserName(currentUser);
    setNotifications(user.Notifications.length);
    setUser(user.user_name);
    setAvatar(user.avatar);
  };

  return (
    <header className="nav-header">
      <nav>
        <NavLink className="nav-active" to="/messaging">
          Messages
        </NavLink>
        <NavLink className="nav-active" to="/notifications">
          <BadgedButton>{notifications ? notifications : null}</BadgedButton>
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
          <img className="avatar-icon" src={avatar} alt={user} />
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
