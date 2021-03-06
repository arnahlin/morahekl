import React, { Component } from "react";
import "./Products.css"
import keychains from "../data/keychainData"
import { Link } from "react-router-dom";

class Keychains extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keychains: keychains
    };
  }
  render() {
    const { keychains } = this.state;
    return (
      <div className="grid-container">
        {keychains.map((keychain) => (
          <div className="grid-item" key={keychain.id}>
            <Link to={{ pathname: "/Upplysingar", productInfo: keychain }} className="to-info">
              <img className="product-pic" alt="" src={keychain.img}></img>
              <div className="product-about">
                <div>{keychain.name}</div>
                {/* <div>{keychain.price}</div> */}
              </div>
            </Link>
          </div>

        ))}
      </div>
    )
  }
}

export default Keychains;
