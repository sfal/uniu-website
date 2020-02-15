// css
import "../assets/scss/features.scss";

import React, { Component } from "react";

export default class Features extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div className="features">
        <div className="box">
          <div className="description">
            <p>
              <b>Semplice</b>.
              <br />
              Vai dritto al punto e aggiungi velocemente ciò che ti serve.
            </p>
          </div>
          <div className="description">
            <p>
              <b>Utile</b>. <br />
              Conserva tutte le informazioni importanti sui tuoi corsi e i tuoi
              esami.
            </p>
          </div>
          <div className="description">
            <p>
              <b>Per te</b>. <br />
              Utilizza l’app come meglio credi e personalizzala* a tuo
              piacimento.
              <br />
              <p id="premium">* Richiede UniU Premium</p>
            </p>
          </div>
          <div className="description">
            <p>
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
