import React from "react"; //Login page updates
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from 'semantic-ui-react';
import Dashboard from "./Dashboard";
import SideMenu from "../components/SideMenu"
import SideMenuMobile from "../components/SideMenuMobile"
import Navbar from "../components/Navbar";
import Search from "./Search";
import { StoreProvider } from "../utils/GlobalState";
import AddJob from "../components/AddJob";
import ProfileInfo from "../components/ProfileInfo";
import CareerServicesItem from "../components/CareerServicesItem";
import { Logout } from "../components/Auth";
import { createMedia } from "@artsy/fresnel";
import NavBarMobile from '../components/NavBarMobile';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    mm: 600,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

function Home() {
  return (
    <Router>
      <StoreProvider>
        <MediaContextProvider>
        <Media lessThan="md">
          <NavBarMobile />
        </Media>
        <Media greaterThanOrEqual="md">
          <Navbar />
        </Media>
          <Grid >
            <Grid.Row style={{marginTop: 49}}>
              <Grid.Column computer={3} tablet={16}>
              <Media lessThan="mm">
                <SideMenuMobile stackable={true}/>
              </Media>
              <Media at="mm">
                <SideMenuMobile />
              </Media>
              <Media at="md">
                <SideMenuMobile />
              </Media>
              <Media greaterThanOrEqual="lg">
                <SideMenu />
              </Media>
              </Grid.Column>
              <Grid.Column computer={13} tablet={16}>
                <Switch>              
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/search" component={Search} />
                  <Route exact path="/add" component={AddJob} />
                  <Route exact path="/profile" component={ProfileInfo} />
                  <Route exact path="/career" component={CareerServicesItem} />
                  <Route exact path="/logout" component={Logout} />
                  <Route path="/" component={Dashboard} />
                </Switch>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </MediaContextProvider>
      </StoreProvider>
    </Router> 
  );
}

export default Home;
