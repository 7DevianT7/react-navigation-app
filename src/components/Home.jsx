import React from "react";
import "./Home.css";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <img src="profile.png" alt="Profile" className="profile-image" />
      <h1>
        Hi, I am <span>Bojan Vukojevic</span>
      </h1>
      <p>
        I am a frontend web developer. I can provide clean code and pixel perfect
        design. I also make website more & more interactive with web animations.
      </p>
      <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaGithub /></a>
      </div>
    </div>
  );
};

export default Home;
