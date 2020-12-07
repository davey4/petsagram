import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput";
import { __CreateUser } from "../services/UserService";

const Signup = (props) => {
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
    if (name && email && userName && password) {
      try {
        const data = {
          name,
          email,
          userName,
          password,
        };
        // await __CreateUser(data);
        props.history.push("/login");
      } catch (error) {
        throw error;
      }
    } else {
      setFormError(true);
    }
  };
  return (
    <section className="signup">
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
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
        <button type="submit">Sign Up</button>
        {formError ? <p>Please fill in all Fields</p> : null}
        <p>
          If you already have an account please visit our{" "}
          {<Link to="/login">Login</Link>} page
        </p>
      </form>
    </section>
  );
};

export default Signup;
