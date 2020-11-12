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
      <TodoProvider>
        <Router>
          <div className="app">
            <Nav />
            <PrivateRoute path="/" exact component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/settings" component={Settings} />
          </div>
        </Router>
      </TodoProvider>
    </AuthProvider>
  );
};

export default App;
