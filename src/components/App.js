import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppHeader from "./AppHeader";
import HomePage from "../pages/HomePage";
import MagwdPage from "../pages/MagwdPage";

import "./App.css";

export default () => (
  <div className="app">
    <AppHeader name="Online Learning" />
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/magwd" component={MagwdPage} />
      </Switch>
    </Router>
    <footer className="page-footer">
      <p>Minneapolis College of Art and Design</p>
      <p>
        <a href="https://mcad.edu/magwd">mcad.edu/magwd</a>
      </p>
    </footer>
  </div>
);
