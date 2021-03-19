import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <div>
      <StoreProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/search" component={Search} />
        </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
