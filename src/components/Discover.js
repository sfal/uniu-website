import "../assets/scss/discover.scss";

import React, { Component } from "react";

var stopScroll = true;

export default class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.scrollingContainer = this.scrollingContainer.bind(this);
    this.state = {
      opacity: null,
      tappedOpacity: null,
      isTransitionOver: null,
      screen1Opacity: 1,
      screen2Opacity: 0,
      screen3Opacity: 0,
      screen4Opacity: 0
    };
  }
  componentDidMount() {
    document.body.className = "first-component-body";
  }

  componentDidUpdate() {
    if (this.state.canScrollDown) {
      document.body.className = "first-component-body-canScroll";
    }
  }
  scrollingContainer() {
    var firstText = document.querySelector("#firstText");
    var secondText = document.querySelector("#secondText");
    var thirdText = document.querySelector("#thirdText");
    var fourthText = document.querySelector("#fourthText");
    var firstTop = firstText.getBoundingClientRect().top;
    var secondTop = secondText.getBoundingClientRect().top;
    var thirdTop = thirdText.getBoundingClientRect().top;
    var fourthTop = fourthText.getBoundingClientRect().top;

    if (firstTop < 0) {
      this.setState({
        screen1Opacity: 0,
        screen2Opacity: 1
      });
    } else if (firstTop > 0) {
      this.setState({
        screen1Opacity: 1,
        screen2Opacity: 0
      });
    }

    if (secondTop < 0) {
      this.setState({
        screen2Opacity: 0,
        screen3Opacity: 1
      });
    } else if (secondTop > 0 && secondTop < 500) {
      this.setState({
        screen2Opacity: 1,
        screen3Opacity: 0
      });
    }

    if (thirdTop < 0) {
      this.setState({
        screen3Opacity: 0,
        screen4Opacity: 1
      });
    } else if (thirdTop > 0 && thirdTop < 500) {
      this.setState({
        screen3Opacity: 1,
        screen4Opacity: 0
      });
    }

    if (fourthTop > 317) {
      this.setState({
        canScrollDown: true
      });
    }
  }

  render() {
    return (
      <section className="section" id="discover">
        <div
          className="scrollable"
          id="#scrollable"
          onScroll={this.scrollingContainer}
        >
          <div className="left">
            <div className="content">
              <div className="text" id="firstText">
                {/* <h1>Ecco UniU</h1> */}
                <br />
                <p>
                  Un'app per gestire al meglio
                  <br /> il tuo percorso universitario
                  <br />
                  tenendo traccia di tutto ciò
                  <br />
                  che può esserti utile quotidianamente.
                </p>
              </div>
              <div className="content-inner"></div>
            </div>
            <div className="content">
              <div className="text" id="secondText">
                <p>
                  Puoi monitorare facilmente <br />
                  la tua carriera universitaria. <br />
                  Segna gli esami svolti
                  <br />e quelli da fare,
                  <br />
                  tenendo traccia dei CFU e dei voti.
                </p>
              </div>
              <div className="content-inner"></div>
            </div>
            <div className="content">
              <div className="text" id="thirdText">
                <h1></h1>
                <p>
                  Puoi registrare l'orario delle lezioni
                  <br /> e visualizzare il piano della
                  <br />
                  giornata o dell'intera settimana.
                  <br />
                  L'app ti invierà una notifica
                  <br />
                  quando è arrivato il momento
                  <br />
                  di cambiare aula.
                </p>
              </div>
            </div>
            <div className="content">
              <div className="text" id="fourthText">
                <h1></h1>
                <p>
                  Puoi prevedere la tua media
                  <br />
                  in base al risultato dei prossimi esami.
                  <br />
                  Tieni sempre d'occhio la tua media e i CFU mancanti.
                </p>
              </div>
            </div>
          </div>
          {/* ////////////////
          
          
          
          
          
          ////////////// */}
          <div className="phone">
            {/* first screen */}
            <img
              style={{ opacity: this.state.screen1Opacity }}
              alt="App screen"
              className="screen1"
              src={require("../assets/img/screen1.png")}
            />

            {/* elements that will change on scroll */}
            {/* second screen */}
            <img
              style={{ opacity: this.state.screen2Opacity }}
              alt="App screen"
              className="screen2"
              src={require("../assets/img/screen2.png")}
            />

            {/* second set of elements */}
            {/* third screen */}
            <img
              style={{ opacity: this.state.screen3Opacity }}
              alt="App screen"
              className="screen3"
              src={require("../assets/img/screen3.png")}
            />
            {/* fourth screen */}
            <img
              style={{ opacity: this.state.screen4Opacity }}
              alt="App screen"
              className="screen4"
              src={require("../assets/img/screen4.png")}
            />
          </div>
        </div>
      </section>
    );
  }
}
