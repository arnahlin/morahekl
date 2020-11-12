import React from "react";
import "./Info.css";
import emailjs from "emailjs-com";

// import { Link } from "react-router-dom";


function Info(props) {

    function sendEmail(e) {
        console.log("enters function")
        e.preventDefault();

        // TODO: setja rétt email template hér inn
        emailjs.sendForm('mora-hekl', 'mora_hafasamband', e.target, 'user_0rPwkyClFM3hzSDs4EhpG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    // console.log(props.location.productInfo);
    // console.log(props.location.productInfo.name);
    // var product = props.location.productInfo;
    // console.log(product);


    // TODO: skoða þetta betur 

    if (props.location.productInfo) {
        console.log("yay");
        var product = props.location.productInfo;
    } else {
        console.log("nayy");
        var product = { id: null, name: "Vinsamlegast opnið forsíðu", price: null, img: null, inventory: null };
    }

    return (
        <div className="info-container">
            <div className="info-image">
                <div className="pic-container"> {/* TODO: samræma nöfn á div utan um myndir? */}
                    <img className="info-pic" alt="" src={product.img}></img>
                </div>
            </div>
            <div className="info-content">
                <div className="info-text">
                    <h1 className="product-name">{product.name}</h1>
                    {/*TODO: almennar upplýsingar */}
                    <p>Efni: 100% bómull</p>
                    <p>Stærð: {product.size}</p>
                    <p>Lagerstaða: {product.inventory}</p>
                    <p className="price">Verð: {product.price}</p>
                </div>
                {/* <Link to={{ pathname: "/Panta", productInfo: product }} className="to-info">
                    <button>Panta</button>
                </Link> */}
            </div>
            <div className="info-form">
                <h1 className="form-heading">Panta</h1>
                <form > {/* onSubmit={sendEmail} */}
                    <p>Nafn:</p>
                    <input type="text" className="order-form" placeholder="Nafn" name="name" required />
                    <p>Netfang:</p>
                    <input type="email" className="order-form" placeholder="Netfang" name="email" required />
                    <p>Sími:</p>
                    <input type="text" className="order-form" placeholder="Sími" name="subject" required />
                    <p>Skilaboð:</p>
                    <input type="text" className="order-form" placeholder="Skilaboð" name="message" required />
                    <input type='submit' className="form-button" value="Staðfesta" />
                </form>
            </div>
        </div>
    );
}

export default Info;
