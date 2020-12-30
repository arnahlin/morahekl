import React from "react";
import "./styles/Info.css";
import emailjs from "emailjs-com";


function Info(props) {

    // Sendir upplýsingar til tölvupóstþjónustunnar sem sér um að smíða og senda tölvupóstinn 
    function sendEmail(e) {
        console.log("enters function")
        e.preventDefault();

        emailjs.sendForm('mora-hekl', 'mora_panta', e.target, 'user_0rPwkyClFM3hzSDs4EhpG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }


    // Athugar hvort gögn séu til staðar, birtir skilaboð til notanda ef svo er ekki 
    // Gert til að koma í veg fyrir hrun ef notandi slær beint inn "morahekl.is/Upplysingar" 
    // eða fer fram og til baka í back/forward tökkum vafrans
    if (props.location.productInfo) {
        var product = props.location.productInfo;
    } else {
        var product = { id: null, name: "Vinsamlegast opnið forsíðu", price: null, img: null, inventory: null };
    }

    return (
        <div className="info-container">
            <div className="info-image">
                <div className="pic-container">
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
                    {/*TODO: undirtexti með uppl. um afhendingartíma */}
                    <p className="price">Verð: {product.price}</p>
                </div>
            </div>
            <div className="info-form">
                <h1 className="form-heading">Panta</h1>
                <form onSubmit={sendEmail}>
                    <p>Nafn:</p>
                    <input type="text" className="order-form" placeholder="Nafn" name="name" required />
                    <p>Netfang:</p>
                    <input type="email" className="order-form" placeholder="Netfang" name="email" required />
                    <p>Sími:</p>
                    <input type="text" className="order-form" placeholder="Sími" name="subject" required />
                    <p>Skilaboð:</p>
                    <input type="text" className="order-form-msg" placeholder="Skilaboð" name="message" required />
                    <input type="hidden" name="product" value={product.id} />
                    <input type='submit' className="form-button" value="Staðfesta" />
                </form>
            </div>
        </div>
    );
}

export default Info;
