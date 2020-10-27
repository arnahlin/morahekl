import React from "react";
import "./Products.css"
import { Link } from "react-router-dom";

function Bears() {
  return (
    <div>
      <div className="grid-container">
        <div className="grid-item">
          <Link to="/Upplysingar" className="to-info">
            <img className="bear-pic" alt="" src="bangsi.JPG"></img>
          </Link>
        </div>
        <div className="grid-item">
          <img className="bear-pic" alt="" src="bangsi.JPG"></img>
        </div>
        <div className="grid-item">
          <img className="bear-pic" alt="" src="bangsi.JPG"></img>
        </div>
        <div className="grid-item">
          <img className="bear-pic" alt="" src="bangsi.JPG"></img>
        </div>
        <div className="grid-item">
          <img className="bear-pic" alt="" src="bangsi.JPG"></img>
        </div>
        <div className="grid-item">
          <img className="bear-pic" alt="" src="bangsi.JPG"></img>
        </div>
        <div className="grid-item">
          <img className="bear-pic" alt="" src="bangsi.JPG"></img>
        </div>
        <div className="grid-item">
          <img className="bear-pic" alt="" src="bangsi.JPG"></img>
        </div>
      </div>
    </div>
  );
}

export default Bears;
