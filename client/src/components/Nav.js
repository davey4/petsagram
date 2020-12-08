import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
import { __GetUser } from "../services/UserService";

const Nav = ({ currentUser }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    getUser();
  });

  const getUser = async () => {
    const user = await __GetUser(currentUser);
    // console.log(user);
    setUser(user.user_name);
  };

  return (
    <header className="nav-header">
      <div className="icon">
        <nav>
          <NavLink className="nav-active" to="/explore">
            Explore
          </NavLink>
          <NavLink className="nav-active" to="/profile">
            {user}
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

export default Nav;
