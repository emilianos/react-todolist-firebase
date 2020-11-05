import React from "react";
import Nav from "./components/Nav";
import Login from "./components/Login";
// import Logout from "./components/Logout";
import Main from "./components/Main";
import Settings from "./components/Settings";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/settings">Settings</Link>
          {/* <Link to="/logout">Logout</Link> */}
        </Nav>

        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
