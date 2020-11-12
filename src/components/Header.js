import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    // this.props.history.goBack();
    console.log("back clicked!");
  }

  handleMenu() {
    console.log("menu clicked!");
  }

  render() {
    return (
      <div className="container">
        <div className="header-item">
          <button className="back-button" onClick={this.handleBack}>
            <img className="back-arrow" src="left-arrow.png" alt=""></img></button>
        </div>
        <div className="header-item">
          <Link to="/" className="header-logo">
            <img src="morahekl_logo.png" alt="logo"></img>
          </Link>
        </div>
        <div className="header-item">
          <button className="menu-button" onClick={this.handleMenu}>
            <img className="menu" src="menu.png" alt=""></img></button>
        </div>
      </div>
    );
  }


}

// function Header() {

//   return (
//     <div className="container">
//       <button><img src="goBavck.png" alt="back arrow" onClick={this.handleBack()}></img></button>
//       <Link to="/" className="header-logo">
//         <img src="morahekl_logo.png" alt="logo"></img>
//       </Link>
//     </div>
//   );
// }

export default Header;

// this.props.history.goBack()