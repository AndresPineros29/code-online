import React from "react";
import ai from "../../assets/Cyber-security.png";
import "./header.css";

const Header = () => {
  return (
    <div className="cdon__header section__padding" id="home">
      <div className="cdon__header-content">
        <h1 className="gradient__text">
          Don't lose the oportunity to learn cyber security
        </h1>
        <p>
          Lorem ipsum dolor sit amet. Aut exercitationem libero eum
          necessitatibus ullam et galisum dolorem a numquam obcaecati sit
          provident recusandae eos nihil illo. Et excepturi iste eum quia animi
          ex rerum consequuntur.
        </p>
        <div className="cdon__header-content__input">
          <a href="#cta">
            <button type={"button"}>Let's start</button>
          </a>
        </div>
      </div>
      <div className="cdon__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
