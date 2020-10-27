import React from "react";
import emailjs from "emailjs-com";
import "./Order.css";
//import { Link } from "react-router-dom";

function Order() {

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

    return (
        // TODO tengja þetta form við "panta" takka sem skilar inn uppl.
        //      um hverskonar vöru var verið að panta.
        <div className="order-container">
            <div className="order-pic">
                <img className="bear-pic" src="bangsi.JPG"></img>
            </div>
            <div className="order-form">
                <form onSubmit={sendEmail}>
                    <h1>Panta</h1>
                    <p>Nafn:</p>
                    <input type="text" className="contact-form" placeholder="Nafn" name="name" />
                    <p>Netfang:</p>
                    <input type="email" className="contact-form" placeholder="Netfang" name="email" />
                    <p>Sími:</p>
                    <input type="text" className="contact-form" placeholder="Sími" name="subject" />
                    <p>Skilaboð:</p>
                    <input type="text" className="contact-form" placeholder="Skilaboð" name="message" />
                    <input type='submit' className="form-button" value="Senda" />
                </form>
            </div>
        </div>
    );
}

export default Order;
