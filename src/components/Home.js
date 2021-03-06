import React from "react";
import "./styles/Home.css";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <nav>
      <div className="home-nav">
        <Link to="/Bangsar" className="home-link">
          <img className="home-pic-1" alt="" src="bangsi.JPG"></img>
          <div className="text-container">
            <div className="pic-text-1">Bangsar</div>
          </div>
        </Link>
      </div>
      <div className="home-nav">
        <Link to="/Kanínur" className="home-link">
          <img className="home-pic-2" alt="" src="bunny.JPG"></img>
          <div className="text-container">
            <div className="pic-text-2">Kanínur</div>
          </div>
        </Link>
      </div>
      <div className="home-nav">
        <Link to="/Lyklakippur" className="home-link">
          <img className="home-pic-3" alt="" src="whale.JPG"></img>
          <div className="text-container">
            <div className="pic-text-3">Lyklakippur</div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Home;
