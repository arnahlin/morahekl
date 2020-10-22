import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="header-logo">
        <img src="morahekl_logo.png"></img>
      </Link>
    </header>
  );
}

export default Header;
