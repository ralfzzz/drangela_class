import React, { useState } from "react";

function App() {

  const [button, setButton] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [submitValue, setSubmitValue] = useState("");

  function changeButtonBlack(){
    setButton("black");
  }

  function changeButtonNormal(){
    setButton("");
  }
  
  function getInputValue(event){
    setInputValue(event.target.value);
  }

  function submitInputValue(event){
    setSubmitValue(inputValue);

    event.preventDefault();
  }


  return (
    <div className="container">
      <h1>Hello {submitValue}</h1>
    <form onSubmit={submitInputValue}>
      <input onChange={getInputValue} type="text" placeholder="What's your name?" value={inputValue}/>
      <button onClick={submitInputValue} onMouseEnter={changeButtonBlack} onMouseLeave={changeButtonNormal} className={button}type="submit" >Submit</button>
    </form>
    </div>
  );
}

export default App;
