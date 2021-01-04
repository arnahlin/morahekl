import React, { Component } from "react";
import "./styles/Info.css";
import emailjs from "emailjs-com";


// Grænn borði efst á síðu til staðfestingar að pöntun hafi verið send.
function ConfirmBanner(props) {
    if (!props.conf) {
        return null;
    }
    return (
        <p className="confirm-banner">
            Pöntun móttekin, vinsamlegast athugið tölvupóst fyrir staðfestingu. Gæti hafa lent í junk.
        </p>
    )
}

class Info extends Component {

    constructor(props) {
        super(props);
        this.product = this.props.location.productInfo;
        this.state = {
            showConfirm: false,
            product: this.props.location.productInfo,
            backup: { id: null, name: "Vinsamlegast opnið forsíðu", price: null, img: null, inventory: null }
        }
    }


    // Sendir upplýsingar til tölvupóstþjónustunnar sem sér um að smíða og senda tölvupóstinn 
    sendEmail = (e) => {
        console.log("enters function")
        e.preventDefault();

        emailjs.sendForm('mora-hekl', 'mora_panta', e.target, 'user_0rPwkyClFM3hzSDs4EhpG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        this.setState(state => ({ showConfirm: !state.showConfirm }));
    }


    render() {
        console.log("render() method");

        // Athugar hvort gögn séu til staðar, birtir skilaboð til notanda ef svo er ekki 
        // Gert til að koma í veg fyrir hrun ef notandi slær beint inn "morahekl.is/Upplysingar" 
        // eða fer fram og til baka í back/forward tökkum vafrans
        if (this.state.product) {
            console.log("if success");
            this.product = this.state.product;
        } else {
            console.log("if fail: product not there");
            this.product = this.state.backup;
        }

        return (
            <div className="outer-container">
                <div className="order-confirm"><ConfirmBanner conf={this.state.showConfirm}></ConfirmBanner></div>
                <div className="info-container">
                    <div className="info-image">
                        <div className="pic-container">
                            <img className="info-pic" alt="" src={this.product.img}></img>
                        </div>
                    </div>
                    <div className="info-content">
                        <div className="info-text">
                            <h1 className="product-name">{this.product.name}</h1>
                            <p>Efni: 100% bómull</p>
                            <p>Stærð: {this.product.size}</p>
                            <p>Lagerstaða: {this.product.inventory}</p>
                            <p>Afhending: Frí heimsending innan höfuðborgarsvæðisins.</p>
                            <p>Afhendingartími: 2-3 virkir dagar ef varan er til á lager, en vika fyrir sérpantanir.</p>
                            <p className="price">Verð: {this.product.price}</p>
                        </div>
                    </div>
                    <div className="info-form">
                        <h1 className="form-heading">Panta</h1>
                        <form onSubmit={this.sendEmail} name="orderform">
                            <p>Nafn:</p>
                            <input type="text" className="order-form" placeholder="Nafn" name="name" required />
                            <p>Netfang:</p>
                            <input type="email" className="order-form" placeholder="Netfang" name="email" required />
                            <p>Sími:</p>
                            <input type="text" className="order-form" placeholder="Sími" name="subject" required />
                            <p>Skilaboð:</p>
                            <input type="text" className="order-form-msg" placeholder="Skilaboð" name="message" required />
                            <input type="hidden" name="product" value={this.product.id} />
                            <input type='submit' className="form-button" value="Staðfesta" disabled={this.state.showConfirm} />
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default Info;