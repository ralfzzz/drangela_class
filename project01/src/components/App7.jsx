import React, { useState } from "react";

function App() {

  const [button, setButton] = useState("");
  const [fullNameValue, setFullNameValue] = useState({
    firstName:"",
    lastName:""
  });

  // const [inputValue, setInputValue] = useState("");
  // const [submitValue, setSubmitValue] = useState("");
  // const [fNameValue, setFNameValue] = useState("");
  // const [lNameValue, setLNameValue] = useState("");

  function changeButtonBlack(){
    setButton("black");
  }

  function changeButtonNormal(){
    setButton("");
  }

  function getFullNameValue(event){
    // const inputName = event.target.name;
    // const inputValue = event.target.value;

    const {name,value} = event.target;

    setFullNameValue((prev)=>{
      if (name === "firstName") {
        return({
          firstName:value,
          lastName:prev.lastName
        })
      } else if (name === "lastName") {
        return({
          firstName:prev.firstName,
          lastName:value
        })
      }
    });
    // console.log(inputName);
    // console.log(inputValue);
  }
  
  // function getInputValue(event){
  //   setInputValue(event.target.value);
  // }
  
  // function getFNameValue(event){
  //   setFNameValue(event.target.value);
  // }

  // function getLNameValue(event){
  //   setLNameValue(event.target.value);
  // }

  // function submitInputValue(event){
  //   setSubmitValue(inputValue);

  //   event.preventDefault();
  // }


  return (
    <div className="container">
      <h1>Hello {fullNameValue.firstName} {fullNameValue.lastName}</h1>
    <form onSubmit="/">
      <input onChange={getFullNameValue} name="firstName" type="text" placeholder="What's your fName?" value={fullNameValue.firstName}/>
      <input onChange={getFullNameValue} name="lastName" type="text" placeholder="What's your lName?" value={fullNameValue.lastName}/>
      {/* <input onChange={getFNameValue} type="text" placeholder="What's your fName?" value={fNameValue}/> */}
      {/* <input onChange={getLNameValue} type="text" placeholder="What's your lName?" value={lNameValue}/> */}
      {/* <input onChange={getInputValue} type="text" placeholder="What's your lName?" value={inputValue}/> */}
      {/* <button onClick={submitInputValue} onMouseEnter={changeButtonBlack} onMouseLeave={changeButtonNormal} className={button}type="submit" >Submit</button> */}
      <button onMouseEnter={changeButtonBlack} onMouseLeave={changeButtonNormal} className={button}type="submit" >Submit</button>
    </form>
    </div>
  );
}

export default App;
