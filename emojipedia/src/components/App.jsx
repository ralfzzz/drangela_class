import React from "react";
const {Card} = require('./Card');
const {emojipedia} = require('../emojipedia');

// function generateCard(emojiData){
//     return(
//         <Card key={emojiData.id} emoji={emojiData.emoji} name={emojiData.name} meaning={emojiData.meaning.substring(0,100)}/>
//     )
// }

var test = emojipedia.find(({id})=> id===4);
// console.log(test);

var test2 = emojipedia.map((value)=>{
    return value.meaning.substring(0,100);
})

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
       {emojipedia.map((emojiData)=>{
        return(
        <Card key={emojiData.id} emoji={emojiData.emoji} name={emojiData.name} meaning={emojiData.meaning.substring(0,100)}/>
    )
       })}
      </dl>
    </div>
  );
}

export default App;
