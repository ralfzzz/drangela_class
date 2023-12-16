import React from "react";

const {Form} = require("./Form");

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form userIsRegistered={userIsRegistered}/>
    </div>
  );
}

export default App;
