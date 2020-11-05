import React from "react";
import { AuthProvider } from "./Auth"
import Nav from "./components/Nav";
import Login from "./components/Login";
import Main from "./components/Main";
import Settings from "./components/Settings";
import PrivateRoute from "./PrivateRoute";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Nav />
          <PrivateRoute path="/" exact component={Main} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/settings" component={Settings} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
