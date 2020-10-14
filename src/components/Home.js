import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/Bangsar" className="home-bear">
        Bangsar
      </Link>
      <Link to="/Kanínur" className="home-bun">
        Kanínur
      </Link>
      <Link to="/Lyklakippur" className="home-key">
        Lyklakippur
      </Link>
    </div>
  );
}

export default Home;
