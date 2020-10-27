import React from "react";
import "./Info.css";
import { Link } from "react-router-dom";


function Info() {
    return (
        <div className="info-container">
            {/* <h1>Upplýsingar</h1> */}
            <div className="info-pic">
                <img className="bear-pic" src="bangsi.JPG"></img>
            </div>
            <div className="info-content">
                <div className="info-text">

                    <h2>Nafn vöru</h2>
                    <p>Hér kemur texti um vöruna</p>
                    <p>Litur vöru</p>
                    <p>Almennar upplýsingar: efni, stærð, osfrv</p>
                    <p>Verð</p>
                </div>
                <Link to="/Panta" className="to-info">
                    <button>Panta</button>
                </Link>
            </div>
        </div>
    );
}

export default Info;
