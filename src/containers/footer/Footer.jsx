import React from "react";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="cdon__footer">
      <div className="cdon__footer-container">
        <h3>
          Made whit love by{" "}
          <a
            className="gradient__text"
            href="https://github.com/AndresPineros29/code-online"
            target="_blank"
          >
            AndresPineros29 <FaGithub color="#f49867" />
          </a>
        </h3>

        <p>©2023 CyberSecurityCourseLandingPage</p>
      </div>
    </div>
  );
};

export default Footer;
