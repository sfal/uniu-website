// css
import "../assets/scss/contact.scss";

import React, { Component } from "react";

export default class Contact extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div className="contact">
        <h1>Contattaci</h1>
        <p>
          Hai domande? Curiosità? Vuoi lamentarti di un fastidioso bug? Vuoi
          darci un saluto?
          <br />
          Inviaci una email a mail@uniu.it - ti risponderemo appena possibile!
        </p>
        <div className="footer">
          <div className="footer-content">
            <h1>uniu</h1>
          </div>
        </div>
      </div>
    );
  }
}
