// css
import "../assets/scss/header.scss";

import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Header extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <header className="header">
        <div className="header-content">
          <a href="/">
            <h1>UniU</h1>
          </a>
          <ul>
            <li className="active">
              <Link to="/">Scopri</Link>
            </li>
            <li>
              <a href="\">Contatti</a>
            </li>
            <li>
              <Link to="/terms_conditions">Termini & Condizioni</Link>
            </li>
            <li>
              <Link to="/privacy_policy">Privacy Policy</Link>
            </li>
            <a href="\" target="_blank" className="appstore-badge">
              <img
                alt="Download button that leads to the App Store"
                src={require("../assets/img/appstore-badge.svg")}
              />
            </a>
          </ul>
        </div>
      </header>
    );
  }
}
