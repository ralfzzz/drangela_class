import React, {useState} from "react";

export function Form(props) {

  const [todoListValue, collectTodoListValue] = useState("");

  function getTodoListValue(event){
    var inputTodoList = event.target.value;
    collectTodoListValue(inputTodoList);
  }

    return(
        <div className="form">
        <input type="text" value={todoListValue} onChange={getTodoListValue}/>
        <button>
          <span onClick={()=>{
            props.submitTodoListValue(todoListValue); 
            collectTodoListValue("");          
          }}>Add</span>
        </button>
      </div>
    )
}

export default Form;


