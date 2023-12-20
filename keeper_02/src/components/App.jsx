import React, { useState } from "react";

const {Lists} = require('./Lists');
const {Header} = require('./Header');
const {Form} = require('./Form');

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

  function deleteList(id){
    // console.log(id);
    addTodoListValue(previousValue => {
      return(
        previousValue.filter((value,index) => {
          return index !== id;
        })
      )
    })
  }
  
  
  return (
    <div className="container">
      <Header />
      <Form todoListValue={todoListValue} getTodoListValue={getTodoListValue} submitTodoListValue={submitTodoListValue}/>      
      <div>
        <ul>
        {lists.map((list,index) => {
          return(
            <Lists list={list} key={index} id={index} handleClick={deleteList}/>
          )
      })}

      </ul>
      </div>
    </div>
  );
}

export default App;
