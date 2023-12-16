import React from "react";
const {Input} = require('./Input');


export function Login() {
  return (
      <form className="form">
        <Input type="text" placeholder="Username"/>
        <Input type="text" placeholder="Password"/>
        <button type="submit">Login</button>
      </form>
  );
}

export default Login;
