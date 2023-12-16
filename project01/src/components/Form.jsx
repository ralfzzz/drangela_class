import React from "react";

const {Input} = require("./Input");

export function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {(props.userIsRegistered) ? null : <Input type="password" placeholder="Confirm Password" />}
      <button type="submit">{(props.userIsRegistered) ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
