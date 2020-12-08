import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-md";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="grid">
        <div className="content">
          <header>
            <h3>🐾</h3>
          </header>
          <h1>petsagram</h1>
          <article>
            <p>
              Petstagram is an online photo-sharing app that allows you to share
              your favorite photos of your pets to your followers. Petstagram
              will allow you to follow any of the users on our application by
              simply searching for their usernames. You'll be able to like and
              comment on anyone's post right on the picture of the pet.
            </p>
          </article>

          <div className="buttons">
            <div className="signupbutton">
              <Button theme="primary" themeType="contained">
                {<Link to="/register">Sign Up</Link>}
              </Button>
            </div>
            <div className="loginbutton">
              <Button theme="primary" themeType="contained">
                {<Link to="/login">Log In</Link>}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
