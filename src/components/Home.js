import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <nav>
      <div className="home-nav">
        <Link to="/Bangsar" className="home-bear">
          <img className="home-pic" src="bangsi.JPG"></img>
          <div className="pic-text">Bangsar</div>
        </Link>
      </div>
      <div className="home-nav">
        <Link to="/Kanínur" className="home-bun">
          <img className="home-pic" src="bangsi.JPG"></img>
          <div className="pic-text">Kanínur</div>
        </Link>
      </div>
      <div className="home-nav">
        <Link to="/Lyklakippur" className="home-key">
          <img className="home-pic" src="bangsi.JPG"></img>
          <div className="pic-text">Lyklakippur</div>
        </Link>
      </div>
    </nav>
  );
}

export default Home;
