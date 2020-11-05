import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../Auth";
import Title from "./Title";
import config from "../firebase";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements
      try {
        await config
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
        history.push("/");
      } catch (error) {
        console.error(error);
      }
    }, [history]
  );

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to="/" />
  }

  return (
    <div className="todolist">
      <Title value="Welcome!" />
      <form className="login-form" onSubmit={handleLogin}>
        <input className="input" name="email" type="email" placeholder="Enter your Email" />
        <input className="input" name="password" type="password" placeholder="Enter your Password" />
        <button className="submit" type="submit">Login</button>
      </form>
    </div>
  )
}
 
export default withRouter(Login);