import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-item">
        <Link to="/Hafasamband" className="footer-contact">
          Hafa Samband
      </Link>
      </div>
      <div className="footer-item">
        <Link to="/Um" className="footer-about">
          Um Móru hekl
      </Link>
      </div>
    </footer>
  );
}

export default Footer;
