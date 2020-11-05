import React from "react";
import Title from "./Title";

const Register = () => {
  return (
    <div className="todolist">
      <Title value="Register today!" />
      <p>Send 1 bitcoin to us and get lifetime access to your todos.</p>
      <p>Don't let this opportunity pass!</p>
      <br />
      <button className="submit">Send Bitcoin</button>
    </div>
  )
}
 
export default Register;