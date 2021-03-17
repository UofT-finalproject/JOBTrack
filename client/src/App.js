import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JOBTrackLogo from "./assets/images/jobTrack-logo.png"
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/search" component={Search} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
