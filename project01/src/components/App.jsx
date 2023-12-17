import React, { useState } from "react";

function App() {
  var currentTime = new Date().toLocaleTimeString('it-IT');

  const [currentTimeValue, getCurrentTime] = useState(currentTime);

  function getTime(){
    getCurrentTime(new Date().toLocaleTimeString('it-IT'));
  }

  setInterval(getTime,1000);

  return (
    <div className="container">
      <h1>{currentTimeValue}</h1>
      {/* <button onClick={getTime}>Get Time</button> */}
      <button>Get Time</button>
    </div>
  );
}

export default App;
