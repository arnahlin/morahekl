import React from "react";
import "./Info.css";
import { Link } from "react-router-dom";


function Info(props) {
    // console.log(props.location.productInfo);
    // console.log(props.location.productInfo.np0´ðame);

    // var product = props.location.productInfo;
    // console.log(product);

    if (props.location.productInfo) {
        console.log("yay");
        var product = props.location.productInfo;
    } else {
        console.log("nayy");
        var product = { id: null, name: "Vinsamlegast opnið forsíðu", price: null, img: null, inventory: null };
    }

    return (
        <div className="info-container">
            <div className="pic-container"> {/* TODO: samræma nöfn á div utan um myndir? */}
                <img className="info-pic" alt="" src={product.img}></img>
            </div>
            <div className="info-content">
                <div className="info-text">
                    <h2>{product.name}</h2>
                    {/*TODO: almennar upplýsingar */}
                    <p>Almennar upplýsingar: efni, stærð, osfrv (harðkóðað atm)</p>
                    <p>Lagerstaða: {product.inventory}</p>
                    <p>Verð: {product.price}</p>
                </div>
                <Link to={{ pathname: "/Panta", productInfo: product }} className="to-info">
                    <button>Panta</button>
                </Link>
            </div>
        </div>
    );
}

export default Info;
