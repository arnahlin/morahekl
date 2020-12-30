import React from "react";
import emailjs from "emailjs-com";
import "./styles/Contact.css";

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
    <div className="foo">
      <div className="contact-container">
        <h1 className="form-heading">Hafa samband</h1>
        <form onSubmit={sendEmail}>
          <p>Nafn:</p>
          <input type="text" className="contact-form" placeholder="Nafn" name="name" required />
          <p>Netfang:</p>
          <input type="email" className="contact-form" placeholder="Netfang" name="email" required />
          <p>Fyrirsögn:</p>
          <input type="text" className="contact-form" placeholder="Fyrirsögn" name="subject" />
          <p>Skilaboð:</p>
          <input type="text" className="contact-text" placeholder="Skilaboð" name="message" required />
          <input type='submit' className="form-button" value="Senda" />
        </form>
      </div>
    </div >
  );
}

export default Contact;