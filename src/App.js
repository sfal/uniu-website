import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Discover from "./components/Discover";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Discover></Discover>
      {/* <Landing></Landing> */}
    </div>
  );
}

export default App;
