import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput";
import "../styles/Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className="login">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <TextInput
          placeholder="NAME"
          title="NAME"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
        />
        <TextInput
          placeholder="Email"
          title="EMAIL"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <TextInput
          placeholder="USERNAME"
          title="USERNAME"
          name="userName"
          type="text"
          value={userName}
          onChange={handleChange}
        />
        <TextInput
          placeholder="Password"
          title="PASSWORD"
          name="password"
          value={password}
          type="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        {formError ? (
          <p>
            Couldn't find a matching Email and/or Password please enter a
            registered email/password or
          </p>
        ) : null}
        <p>
          If you are a new user please visit our{" "}
          {<Link to="/register">SignUp</Link>} page
        </p>
      </form>
    </section>
  );
};

export default Login;
