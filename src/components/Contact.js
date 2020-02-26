// css
import "../assets/scss/contact.scss";

import React, { Component } from "react";

export default class Contact extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div className="contact">
        <h1>Contatti</h1>
        <p>
          <a href="mailto:uniu.app@gmail.com">uniu.app@gmail.com</a>
        </p>
      </div>
    );
  }
}
