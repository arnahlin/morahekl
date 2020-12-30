import React from "react";
import "./styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className="header-item">
        <Link to="/" className="header-logo">
          <img className="header-img" src="morahekl_logo.png" alt="logo"></img>
        </Link>
      </div>
    </div>
  );
}

export default Header;