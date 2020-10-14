import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="header-logo">
        Móra
      </Link>
    </header>
  );
}

export default Header;
