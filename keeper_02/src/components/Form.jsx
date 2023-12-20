import React from "react";

export function Form(props) {
    return(
        <div className="form">
        <input type="text" value={props.todoListValue} onChange={props.getTodoListValue}/>
        <button>
          <span onClick={props.submitTodoListValue}>Add</span>
        </button>
      </div>
    )
}

export default Form;


