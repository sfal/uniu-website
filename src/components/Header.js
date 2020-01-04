import React, { Component } from "react";
// css
import "../assets/scss/header.scss";

export default class Header extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <header className="header">
        <div className="header-content">
          <h1>UniU</h1>
          <ul>
            <li className="active">
              <a href="\">Scopri</a>
            </li>
            <li>
              {" "}
              <a href="\">Contatti</a>
            </li>
            <li>
              <a href="\">Termini & Condizioni</a>
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
