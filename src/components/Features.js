// css
import "../assets/scss/features.scss";

import React, { Component } from "react";

export default class Features extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div className="features">
        <div className="box-desktop">
          <div className="description">
            <div className="img-container">
              <img
                alt="feature"
                className="featureImg"
                src={require("../assets/img/features1.png")}
              />
            </div>
            <p className="text">
              <b>Semplice</b>.
              <br />
              Vai dritto al punto e aggiungi velocemente ciò che ti serve.
            </p>
          </div>
          <div className="description">
            <div className="img-container">
              <img
                alt="feature"
                className="featureImg"
                src={require("../assets/img/features2.png")}
              />
            </div>
            <p className="text">
              <b>Utile</b>. <br />
              Conserva tutte le informazioni importanti che potrebbero tornarti
              utili.
            </p>
          </div>
          <div className="description">
            <div className="img-container">
              <img
                alt="feature"
                className="featureImg"
                src={require("../assets/img/features3.png")}
              />
            </div>
            <p className="text">
              <b>Per te</b>. <br />
              Utilizza l’app come meglio credi e personalizzala* a tuo
              piacimento.
              <br />
              <p id="premium">* Richiede UniU Premium</p>
            </p>
          </div>
          <div className="description">
            <div className="img-container">
              <img
                alt="feature"
                className="featureImg"
                src={require("../assets/img/features4.png")}
              />
            </div>
            <p className="text">
              <b>Frequenti la Federico II di Napoli?</b> <br />
              Scarica i dati della tua carriera direttamente dal tuo account
              universitario.
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
