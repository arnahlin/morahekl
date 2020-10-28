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
    console.log(bears);
    return (
      <div className="grid-container">
        {bears.map((bear) => (
          <div className="grid-item" key={bear.id}>
            <Link to={{ pathname: "/Upplysingar", productInfo: bear }} className="to-info">
              <img className="bears-pic" alt="" src={bear.img}></img>
              <div>{bear.name}</div>
              <div>{bear.price}</div>
            </Link>
          </div>

        ))}
      </div>
    )
  }
}



// function Bears() {
//   console.log(bears);
//   return (
//     <div>
//       <div className="grid-container">
//         <div className="grid-item">
//           <Link to="/Upplysingar" className="to-info">
//             <img className="bear-pic" alt="" src="bangsi.JPG"></img>
//           </Link>
//         </div>
//         <div className="grid-item">
//           <img className="bear-pic" alt="" src="bangsi.JPG"></img>
//         </div>
//         <div className="grid-item">
//           <img className="bear-pic" alt="" src="bangsi.JPG"></img>
//         </div>
//         <div className="grid-item">
//           <img className="bear-pic" alt="" src="bangsi.JPG"></img>
//         </div>
//         <div className="grid-item">
//           <img className="bear-pic" alt="" src="bangsi.JPG"></img>
//         </div>
//         <div className="grid-item">
//           <img className="bear-pic" alt="" src="bangsi.JPG"></img>
//         </div>
//         <div className="grid-item">
//           <img className="bear-pic" alt="" src="bangsi.JPG"></img>
//         </div>
//         <div className="grid-item">
//           <img className="bear-pic" alt="" src="bangsi.JPG"></img>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Bears;
