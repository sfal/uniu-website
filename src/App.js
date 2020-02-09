import "./App.css";

// import Discover from "./components/Discover";
import Discover from "./components/Discover";
import Header from "./components/Header";
import Landing from "./components/Landing";
import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      {/* <Section /> */}
      {/* <Header></Header> */}
      <Header />
      <Discover></Discover>
      {/* <Landing></Landing> */}
    </div>
  );
}

export default App;
