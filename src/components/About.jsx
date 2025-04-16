import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <h2 className="section-title">ABOUT ME</h2>
      <div className="about-content">
        <div className="about-left">
          <img src="profile.png" alt="About me" />
        </div>
        <div className="about-right">
          <h3>
            Hi, I am <span>Bojan Vukojevic</span>
          </h3>
          <ul>
            <li><span>First Name:</span> Bojan</li>
            <li><span>Last Name:</span> Vukojevic</li>
            <li><span>Age:</span> 27 years</li>
            <li><span>Nationality:</span> Serbos</li>
            <li><span>Languages:</span> English, Serbian, Bosnian, Croatian, Šatrovački</li>
            <li><span>Address:</span> 121 I.Andrića, Banja Luka, Bosnia</li>
            <li><span>Freelance:</span> Available</li>
          </ul>
          <button className="resume-btn">DOWNLOAD RESUME</button>
        </div>
      </div>
    </div>
  );
};

export default About;
