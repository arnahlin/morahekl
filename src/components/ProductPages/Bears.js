import React, { Component } from "react";
import "./Products.css"
import bears from "../data/bearData"
import { Link } from "react-router-dom";

class Bears extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bears: bears
    };
  }
  render() {
    const { bears } = this.state;
    return (
      <div className="grid-container">
        {bears.map((bear) => (
          <div className="grid-item" key={bear.id}>
            <Link to={{ pathname: "/Upplysingar", productInfo: bear }} className="to-info">
              <img className="product-pic" alt="" src={bear.img}></img>
              <div className="product-about">
                <div>{bear.name}</div>
                {/* <div className="product-price">{bear.price}</div> */}
              </div>
            </Link>
          </div>

        ))}
      </div>
    )
  }
}

export default Bears;