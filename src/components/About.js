import React from "react";
import "./styles/About.css"

function About() {
  return (
    <div className="foo">
      <div className="about-container">
        <div className="heading">
          <h1>Um Móru hekl</h1>
        </div>
        <div className="content">
          <div className="about-text">
            <p>Handgerðir bangsar og kanínur, heklaðir úr 100% bómull og fylltir með pólýester trefjafyllingu.
            Hver og einn bangsi er einstakur.</p>
            <p>Hægt er að þvo bangsana en ég mæli með að það sé gert í höndunum og lagt til þerris.</p>

            <p>Frí heimsending á höfuðborgarsvæðinu en einnig hægt að sækja.
              Kostnaður við sendingar út á land greiðist af viðtakanda. </p>
          </div>
          <div className="about-text">
            <p>Móra hekl er á facebook: www.facebook.com/morahekl
            og á Instagram: @morahekl eða instagram.com/morahekl
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
