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
import Home from './pages/Home';
import ProfileInfo from "./components/ProfileInfo";
import { Login, Register, Logout } from "./components/Auth"; //Login page updates
import ProtectedRouter from "./ProtectedRouter"; //Login page updates
import Landing from "./pages/Landing";
import CareerServicesItem from "./components/CareerServicesItem";
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

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
              <PublicRoute restricted={false} exact path='/' component={Landing} />
              <PublicRoute restricted={true} path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/logout" component={Logout} />
              <PrivateRoute exact path="/home" component={Home} />
                {/* <ProtectedRouter exact path="/dashboard" component={Dashboard} />
                <ProtectedRouter exact path="/search" component={Search} /> */}
                {/* <ProtectedRouter exact path="/search" component={Search} />
                <ProtectedRouter exact path="/add" component={AddJob} />
                {/* <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/search" component={Search} /> 
                <Route exact path="/profile" component={ProfileInfo} />
                <Route exact path="/career" component={CareerServicesItem} /> */}
                {/* <Route exact path='/unauthorized' component={Unauthorized} /> */}
                <Route path="*" component={Landing} />
              </Switch>
      </StoreProvider>
    </Router> 
  );
}

export default App;