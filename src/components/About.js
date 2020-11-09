import React from "react";
import "./About.css"
// import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <div className="heading">
        <h1>Um Móru hekl</h1>
      </div>
      <div className="content">
        <div className="about-text">
          <p>Handgerðir bangsar og kanínur, heklaðir úr 100% bómull. Hver og einn bangsi er einstakur. </p>
        </div>
        <div className="about-text">
          <p>Móra hekl er á facebook: www.facebook.com/morahekl
          og á Instagram: @morahekl eða instagram.com/morahekl
      </p>

        </div>
      </div>
    </div>
  );
}

export default About;
