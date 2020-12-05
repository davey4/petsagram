import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <section>
      <header className="home-header">
        <h1>Petsagram</h1>
        <img
          src="https://cdn.pixabay.com/photo/2014/04/03/11/50/paw-312322__340.png"
          alt="logo"
        />
      </header>
      <div className="grid-home">
        <div>
          <h3>Getting Started</h3>
          <div className="hero buttons">
            <div>
              <div className="hero-action left spacing">
                {<Link to="/login">Login</Link>}
              </div>
            </div>
            <div>
              <div className="hero-action spacing">
                {<Link to="/register">SignUp</Link>}
              </div>
            </div>
          </div>
        </div>
        <div className="overview-wrapper spacing">
          Petstagram is an online photo-sharing app that allows you to share
          your favorite photos of your pets to your followers. Petstagram will
          allow you to follow any of the users on our application by simply
          searching for their usernames. You'll be able to like and comment on
          anyone's post right on the picture of the pet.
        </div>
      </div>
    </section>
  );
};

export default Home;
