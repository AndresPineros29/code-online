import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="cdon__blog section__padding" id="blog">
    <div className="cdon__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="cdon__blog-container">
      <div className="cdon__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Oct 29, 2022"
          text="Sniffer WiFi para Windows y visor de paquetes 802.11"
          url="https://www.tarlogic.com/es/blog/sniffer-wifi-windows/"
        />
      </div>
      <div className="cdon__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Mar 8, 2023"
          text="BlueTrust, adiós a la privacidad en Bluetooth"
          url="https://www.tarlogic.com/es/blog/bluetrust-vulnerabilidad-bluetooth/"
        />
        <Article
          imgUrl={blog03}
          date="Mar 13, 2023"
          text="CISA now warns critical infrastructure of ransomware-vulnerable devices"
          url="https://www.bleepingcomputer.com/news/security/cisa-now-warns-critical-infrastructure-of-ransomware-vulnerable-devices/?&web_view=true"
        />
        <Article
          imgUrl={blog04}
          date="Mar 14, 2023"
          text="DEV-1101 Offers Phishing Kit for High-Volume AiTM Campaigns"
          url="https://cyware.com/news/dev-1101-offers-phishing-kit-for-high-volume-aitm-campaigns-b4e4836c"
        />
        <Article
          imgUrl={blog05}
          date="Mar 13, 2023"
          text="Pro-Russian Hackers Blackmail Ukrainian Developer of S.T.A.L.K.E.R. 2 Game"
          url="https://www.theverge.com/2023/3/13/23638020/stalker-2-developers-gsc-game-world-hack-blackmail?&web_view=true"
        />
      </div>
    </div>
  </div>
);

export default Blog;
