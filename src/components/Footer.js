import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="/Um" className="footer-about">
        Um Móru hekl
      </Link>
      <Link to="/Hafasamband" className="footer-contact">
        Hafa Samband
      </Link>
    </footer>
  );
}

export default Footer;
