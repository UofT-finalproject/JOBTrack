import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JOBTrackLogo from "./assets/images/jobTrack-logo.png"
import "./App.css";
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
