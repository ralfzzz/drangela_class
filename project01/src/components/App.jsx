import React,{useState} from "react";

export function App() {
  const initialState=0;

  const [count,setCount] = useState(initialState);

  function increase(){
    setCount(count + 1);
  }

  function decrease(){
    setCount(count - 1);
  }

  return (
    <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </div>
  );
}

export default App;
