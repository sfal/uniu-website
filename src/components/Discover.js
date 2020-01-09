import React, { Component } from "react";
import "../assets/scss/discover.scss";

export default class Discover extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <section className="discover">
        <h1>discover</h1>
        <div className="screens-section">
          <div className="iphone-frame">
            <img
              alt="Phone frame"
              className="frame"
              src={require("../assets/img/iphone-frame.png")}
            />
          </div>
          <div className="screen-test">
            {/* <img
            className="screen"
            src={require("../assets/img/screen-test.jpeg")}
          /> */}
          </div>
        </div>
      </section>
    );
  }
}
