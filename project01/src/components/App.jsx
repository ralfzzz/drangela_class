import React, { useState } from "react";

function App() {

  const [button, setButton] = useState("");

  function changeButtonBlack(){
    setButton("black");
  }

  function changeButtonNormal(){
    setButton("");
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button onMouseEnter={changeButtonBlack} onMouseLeave={changeButtonNormal} className={button}>Submit</button>
    </div>
  );
}

export default App;
