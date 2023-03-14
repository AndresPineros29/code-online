import React from "react";
import { Feature } from "../../components";
import fishing from "../../assets/Artboard 2.png";
import malware from "../../assets/Artboard 1.png";
import "./whatcyber.css";

const WhatCyber = () => {
  return (
    <div className="cdon__whatcyber section__margin" id="whatcyber">
      <div className="cdon__whatcyber-feature">
        <Feature
          title="What is Cyber Security?"
          text="Cyber security focuses on protecting computer systems from unauthorised access or being otherwise damaged or made inaccessible."
        />
      </div>
      <div className="cdon__whatcyber-heading">
        <h1 className="gradient__text">The possibilities are behind a click</h1>
        <p>
          <a href="#cta">let's Start</a>
        </p>
      </div>
      <div className="cdon__whatcyber-container">
        <Feature
          title="What's in the course"
          text="
          Knowledge of network hardware and software, computer systems, computer skills, issues related to data protection."
        />
        <img src={fishing} alt="fishig" />

        <Feature
          title="Goals"
          text="Learn who to reduce the vulnerability of the digital environment by implementing combined cybersecurity and cyberdefense systems that neutralize advanced threats, thus contributing to improving security for all."
        />
        <img src={malware} alt="malware" />
      </div>
    </div>
  );
};

export default WhatCyber;
