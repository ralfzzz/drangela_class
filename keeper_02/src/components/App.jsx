import React, { useState } from "react";

const {Lists} = require('./Lists');
const {Header} = require('./Header');
const {Form} = require('./Form');

function App() {

  const [lists, addTodoListValue] = useState([]);
  
    function submitTodoListValue(todoListValue){
    addTodoListValue((previousValue) => {
      return([
        ...previousValue,
        todoListValue
      ])
    });
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
      <Form submitTodoListValue={submitTodoListValue}/>      
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
