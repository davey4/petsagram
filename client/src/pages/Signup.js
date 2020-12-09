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
  const [formError, setFormError] = useState(false);
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
      default:
        break;
    }
  };

  const handleNext = () => {
    if (name && email && userName && password) {
      return setNext(true);
    }
    setFormError(true);
  };

  const handleSelectAvatar = (avatar) => {
    setAvatar(avatar);
    handleSubmit();
  };

  const handleSubmit = async () => {
    // e.preventDefault();
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
