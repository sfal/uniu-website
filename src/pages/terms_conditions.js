import "../assets/scss/header.scss";

import { Link } from "react-router-dom";
import React from "react";

export const TermsConditions = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>UniU</h1>
          <ul>
            <li>
              <Link to="/">Scopri</Link>
            </li>
            <li>
              <a href="\">Contatti</a>
            </li>
            <li className="active">
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
    </div>
  );
};
