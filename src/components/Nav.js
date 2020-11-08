import React, { useContext } from "react";
import config from "../firebase"
import { Link, useLocation } from "react-router-dom"
import { AuthContext } from "../Auth";

const Nav = () => {
  const { currentUser } = useContext(AuthContext)
  const location = useLocation();

  return (
    <>
      {currentUser ? (
        <ul className="navigation">
          {location.pathname === "/" ? (
            <li><Link to="/settings">Settings</Link></li>
          ) : (
            <li><Link to="/">Todos</Link></li>
          )}
          <li onClick={() => config.auth().signOut()}>Logout</li>
        </ul>
      ) : (
        <ul className="navigation">
          {location.pathname === "/login" ? (
            <li><Link to="/register">Register</Link></li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      )}
    </>
  )
}
 
export default Nav;