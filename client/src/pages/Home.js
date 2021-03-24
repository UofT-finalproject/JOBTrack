import React from "react"; //Login page updates
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Grid } from 'semantic-ui-react';
import Dashboard from "./Dashboard";
import SideMenu from "../components/SideMenu"
import Navbar from "../components/Navbar";
import Search from "./Search";
import { StoreProvider } from "./utils/GlobalState";
import AddJob from "../components/AddJob";

import ProfileInfo from "../components/ProfileInfo";
import { Login, Register, Home, Logout } from "./components/Auth"; //Login page updates
import ProtectedRouter from "./ProtectedRouter"; //Login page updates
import Landing from "./Landing";
import CareerServicesItem from "../components/CareerServicesItem";

function Home() {
  return (
    <Router>
      <StoreProvider>      
        <Grid >
            <Navbar />
          <Grid.Row style={{marginTop: 49}}>
            <SideMenu />
            <Grid.Column computer={13} tablet={16}>
              <Switch>              
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/add" component={AddJob} />
                <Route exact path="/profile" component={ProfileInfo} />
                <Route exact path="/career" component={CareerServicesItem} />
                <Route path="*" component={Landing} />
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </StoreProvider>
    </Router> 
  );
}

export default Home;
