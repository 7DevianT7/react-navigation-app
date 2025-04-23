import React from "react";
import "./About.css";
import profileImg from "../assets/profile.png";

const About = () => {
  return (
    <div className="about-section">
      <h2 className="section-title">ABOUT ME</h2>
      <div className="about-content">
        <div className="about-left">
          <img src={profileImg} alt="About me" />
        </div>
        <div className="about-right">
          <h3>
            Hi, I am <span>Bojan Vukojevic</span>
          </h3>
          <ul>
            <li>
              <span>First Name:</span> Bojan
            </li>
            <li>
              <span>Last Name:</span> Vukojevic
            </li>
            <li>
              <span>Age:</span> 27 years
            </li>
            <li>
              <span>Nationality:</span> Serbos
            </li>
            <li>
              <span>Languages:</span> English, Serbian, Bosnian, Croatian,
              Šatrovački
            </li>
            <li>
              <span>Address:</span> 121 I.Andrića, Banja Luka, Bosnia
            </li>
            <li>
              <span>Freelance:</span> Available
            </li>
          </ul>
          <a href="/react-navigation-app/cv.pdf" download>
            <button className="resume-btn">DOWNLOAD RESUME</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
