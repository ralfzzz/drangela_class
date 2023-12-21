import React, { useState } from "react";

function CreateArea(props) {

    const [inputContent,getInputContent] = useState({
        title:"",
        content:""
    });

    function handleInput(event){
        var {value,name} = event.target;
        getInputContent((previousValue) => {
            return({
                ...previousValue,
                [name]: value
            });
        });
    }

    function submitContent(event){
        props.submitContent(inputContent);
        getInputContent({
            title:"",
            content:""
        });
        event.preventDefault();
    }

  return (
    <div>
      <form onSubmit={submitContent}>
        <input name="title" placeholder="Title" value={inputContent.title} onChange={handleInput} required/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={inputContent.content} onChange={handleInput} required/>
        <button onClick={submitContent}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
