import React from "react";
import { cisco, microsoft, IBM, crowdstrike, paloalto } from "./imports";
import "./brand.css";

const Brand = () => {
  return (
    <div className="cdon__brand section__padding">
      <div>
        <img className="cdon__brand-image" src={cisco} alt="cisco" />
      </div>
      <div>
        <img className="cdon__brand-image" src={IBM} alt="IBM" />
      </div>
      <div>
        <img className="cdon__brand-image" src={microsoft} alt="microsoft" />
      </div>
      <div>
        <img
          className="cdon__brand-image"
          src={crowdstrike}
          alt="crowdstrike"
        />
      </div>
      <div>
        <img className="cdon__brand-image" src={paloalto} alt="paloalto" />
      </div>
    </div>
  );
};

export default Brand;
