import React, { Component } from "react"; //Login page updates
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Grid } from 'semantic-ui-react';
import Dashboard from "./pages/Dashboard";
import SideMenu from "./components/SideMenu"
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import { StoreProvider } from "./utils/GlobalState";
import AddJob from "./components/AddJob";
import { Login, Register, Home } from "./components/Auth"; //Login page updates

function App() {
  return (
    <Router>
      <StoreProvider>      
        <Grid >
            <Navbar />
          <Grid.Row style={{marginTop: 49}}>
            <SideMenu />
            <Grid.Column computer={13} tablet={16}>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/add" component={AddJob} />
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </StoreProvider>
    </Router> 
  );
}

export default App;
