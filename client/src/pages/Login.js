import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "react-md";
import "../styles/Login.css";
import { __LoginUser } from "../services/UserService";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(false);

  const handleChange = ({ target }) => {
    switch (true) {
      case target.name === "email":
        setEmail(target.value);
        break;
      case target.name === "password":
        setPassword(target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password,
      };
      const loginData = await __LoginUser(data);
      props.toggleAuthenticated(true, loginData.user.id);
      props.history.push("/feed");
    } catch (error) {
      setFormError(true);
    }
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Welcome Back!</h1>
        <TextField
          placeholder="EMAIL"
          title="EMAIL"
          name="email"
          type="email"
          value={email}
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
        <div className="login-button">
          <Button type="submit" theme="primary" themeType="contained">
            Login
          </Button>
        </div>
        {formError ? <p>Please enter a registered Email and Password</p> : null}
        <p>New to Petsagram? Please visit our{" "}
          {<Link to="/register"><strong>Sign Up</strong></Link>}{" "}page!
        </p>
      </form>
    </div>
  );
};

export default Login;
