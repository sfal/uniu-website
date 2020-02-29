import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Contact from "./components/Contact";
import { Home } from "./pages/home";
import Landing from "./components/Landing";
import { PrivacyPolicy } from "./pages/privacy_policy";
import React from "react";
import { TermsConditions } from "./pages/terms_conditions";
import logo from "./logo.svg";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/privacy_policy" component={PrivacyPolicy} />
        <Route path="/terms_conditions" component={TermsConditions} />
      </Switch>
    </main>
  );
}

export default App;
