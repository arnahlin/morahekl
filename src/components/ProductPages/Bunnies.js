import React, { Component } from "react";
import "./Products.css"
import bunnies from "../data/bunnyData"
import { Link } from "react-router-dom";

class Bunnies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bunnies: bunnies
    };
  }
  render() {
    const { bunnies } = this.state;
    return (
      <div className="grid-container">
        {bunnies.map((bunny) => (
          <div className="grid-item" key={bunny.id}>
            <Link to={{ pathname: "/Upplysingar", productInfo: bunny }} className="to-info">
              <img className="product-pic" alt="" src={bunny.img}></img>
              <div className="product-about">
                <div>{bunny.name}</div>
                {/* <div>{bunny.price}</div> */}
              </div>
            </Link>
          </div>

        ))}
      </div>
    )
  }
}

export default Bunnies;