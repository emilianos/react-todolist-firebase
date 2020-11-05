import React from "react";
import { AuthProvider } from "./Auth"
import { TodoProvider } from "./context/TodoContext";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
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
          <TodoProvider>
            <PrivateRoute path="/" exact component={Main} />
          </TodoProvider>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/settings" component={Settings} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
