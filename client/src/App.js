import React, { Component } from "react";
import logo from "./logo.svg";
import JOBTrackLogo from "./assets/images/jobTrack-logo.png"
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div><img src={JOBTrackLogo} style={{width: 150}}/></div>
        <h2> is coming soon...</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}


export default App;
