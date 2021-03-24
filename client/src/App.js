import React, { useState } from "react"; //Login page updates
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Grid } from 'semantic-ui-react';
import Dashboard from "./pages/Dashboard";
import SideMenu from "./components/SideMenu"
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import { StoreProvider } from "./utils/GlobalState";
import AddJob from "./components/AddJob";
import Unauthorized from './components/Unauthorized';

import ProfileInfo from "./components/ProfileInfo";
import { Login, Register, Home, Logout } from "./components/Auth"; //Login page updates
import ProtectedRouter from "./ProtectedRouter"; //Login page updates
import Landing from "./pages/Landing";
import CareerServicesItem from "./components/CareerServicesItem";

function App() {
  const [user, setUser] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    setUser(true);
    console.log('login status: ', user);
  }

  const handleLogout = e => {
    e.preventDefault();
    setUser(false);
  }

  return (
    <Router>
      <StoreProvider>      
              <Switch>              
              <Route exact path='/' handleLogin={handleLogin} render={props => <Landing {...props} user={user.toString()} handleLogin={handleLogin} />} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route exact path="/logout" component={Logout} />
                <ProtectedRouter exact path="/home" user={user} handleLogout={handleLogout} component={Home} />
                {/* <ProtectedRouter exact path="/search" component={Search} />
                <ProtectedRouter exact path="/add" component={AddJob} />
                {/* <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/search" component={Search} /> 
                <Route exact path="/profile" component={ProfileInfo} />
                <Route exact path="/career" component={CareerServicesItem} /> */}
                <Route exact path='/unauthorized' component={Unauthorized} />
                <Route path="*" component={Home} />
              </Switch>
      </StoreProvider>
    </Router> 
  );
}

export default App;
