import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Container, Grid } from 'semantic-ui-react';
import Dashboard from "./pages/Dashboard";
import SideMenu from "./components/SideMenu"
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <div>
      <StoreProvider>
        <Navbar />
        <Container fluid>
          <Grid columns='equal' stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <SideMenu />
              </Grid.Column>
              <Grid.Column width={13} >
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/search" component={Search} />
                </Switch>
              </Grid.Column>
            </Grid.Row>
          </Grid>
         </Container>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
