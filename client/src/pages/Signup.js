import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "react-md";
import "../styles/Login.css";
import { __CreateUser } from "../services/UserService";
import SelectAvatar from "./SelectAvatar";

const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [formError, setFormError] = useState(false);
  const [notEqual, setNotEqual] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [next, setNext] = useState(false);

  const handleChange = ({ target }) => {
    switch (true) {
      case target.name === "name":
        setName(target.value);
        break;
      case target.name === "email":
        setEmail(target.value);
        break;
      case target.name === "userName":
        setUserName(target.value);
        break;
      case target.name === "password":
        setPassword(target.value);
        break;
      case target.name === "confirm":
        setConfirm(target.value);
        break;
      default:
        break;
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (password === confirm) {
      if (name && email && userName) {
        return setNext(true);
      }
      return setFormError(true);
    }
    setNotEqual(true);
  };

  const handleSelectAvatar = (avatar) => {
    setAvatar(avatar);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && userName && password && avatar) {
      try {
        const data = {
          name,
          email,
          userName,
          password,
          avatar,
        };

        await __CreateUser(data);

        props.history.push("/login");
      } catch (error) {
        setFormError(true);
      }
    } else {
      setFormError(true);
    }
  };

  return (
    <div className="signup">
      {next ? (
        <SelectAvatar
          handleSubmit={handleSubmit}
          setAvatar={handleSelectAvatar}
          onSubmit={handleSubmit}
        />
      ) : (
        <form className="signup-form" onSubmit={handleNext}>
          <h1>Sign Up</h1>
          <TextField
            placeholder="NAME"
            title="NAME"
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          />
          <TextField
            placeholder="EMAIL"
            title="EMAIL"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
          />
          <TextField
            placeholder="USERNAME"
            title="USERNAME"
            name="userName"
            type="text"
            value={userName}
            onChange={handleChange}
          />
          <TextField
            placeholder="PASSWORD"
            title="PASSWORD"
            name="password"
            value={password}
            type="password"
            onChange={handleChange}
          />
          <TextField
            placeholder="CONFIRM PASSWORD"
            title="CONFIRM PASSWORD"
            name="confirm"
            value={confirm}
            type="password"
            onChange={handleChange}
          />
          <div className="signup-button">
            <Button type="submit" theme="primary" themeType="contained">
              Sign Up
            </Button>
          </div>
          {formError ? (
            <p>
              Please fill in all fields and ensure your Email and User Name are
              unique
            </p>
          ) : null}
          {notEqual ? <p>Passwords do no match</p> : null}
          <p>
            Already have an account? Go to our{" "}
            {
              <Link to="/login">
                <strong>Log In</strong>
              </Link>
            }{" "}
            page!
          </p>
        </form>
      )}
    </div>
  );
};

export default Signup;
