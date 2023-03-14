import React from "react";
import rocket from "../../assets/Untitled-1.png";
import "./cta.css";

const CTA = () => {
  return (
    <div className="cdon__cta section__margin" id="cta">
      <div className="cdon__cta-image">
        <img src={rocket} alt="rocket" />
      </div>
      <div className="cdon__cta-content">
        <h1 className="gradient__text">
          Let us send you more information obout this course
        </h1>
        <div className="cdon__cta-content__input">
          <div className="cdon__cta-content__input-info">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="LastName" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone No." />
          </div>
          <div className="cdon__cta-content__input-button">
            <button>Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
