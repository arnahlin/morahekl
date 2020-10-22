import React from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

function Contact() {

  function sendEmail(e) {
    console.log("enters function")
    e.preventDefault();

    emailjs.sendForm('mora-hekl', 'mora_hafasamband', e.target, 'user_0rPwkyClFM3hzSDs4EhpG')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <h1>Hafa samband</h1>
          <p>Nafn:</p>
          <input type="text" className="contact-form" placeholder="Nafn" name="name" />
          <p>Netfang:</p>
          <input type="email" className="contact-form" placeholder="Netfang" name="email" />
          <p>Fyrirsögn:</p>
          <input type="text" className="contact-form" placeholder="Fyrirsögn" name="subject" />
          <p>Skilaboð:</p>
          <input type="text" className="contact-form" placeholder="Skilaboð" name="message" />
          <input type='submit' className="form-button" value="Senda" />
        </form>
      </div>
    </div >
  );
}

export default Contact;

