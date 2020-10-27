import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <Link to="/" className="header-logo">
        <img src="morahekl_logo.png" alt="logo"></img>
      </Link>
    </div>
  );
}

export default Header;
