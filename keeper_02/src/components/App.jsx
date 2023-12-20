import React, { useState } from "react";

function App() {

  const [todoListValue, collectTodoListValue] = useState("");
  const [lists, addTodoListValue] = useState([]);
  
  function getTodoListValue(event){
    var inputTodoList = event.target.value;
    collectTodoListValue(inputTodoList);
  }

  function submitTodoListValue(){
    addTodoListValue((previousValue) => {
      return([
        ...previousValue,
        todoListValue
      ])
    });
    collectTodoListValue("");
  }
  
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
      {/* <form onSubmit={submitTodoListValue}> */}
        <input type="text" value={todoListValue} onChange={getTodoListValue}/>
        <button>
          <span onClick={submitTodoListValue}>Add</span>
        </button>
    {/* </form> */}
      </div>
      <div>
        <ul>
            {lists.map((list,index) => {
                return(<li key={index}>{list}</li>)
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
