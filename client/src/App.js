import React, { useState } from "react"; //Login page updates
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { StoreProvider } from "./utils/GlobalState";
import Home from './pages/Home';
import { Login, Register, Logout } from "./components/Auth"; //Login page updates
import Landing from "./pages/Landing";
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
                <Route path="*" component={Landing} />
              </Switch>
      </StoreProvider>
    </Router> 
  );
}

export default App;
