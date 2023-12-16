import React from "react";

const {Login} = require('./Login');

var isLoggin = false;

function renderConditionally(){
    if (isLoggin===true) {
        return(<Login />);
    } else {
        return(<h1>Hello</h1>);
    }
}

function App() {
  return (
    <div className="container">
    {(isLoggin) ? <Login /> : <h1>Hello</h1>}
    </div>
  );
}

export default App;
