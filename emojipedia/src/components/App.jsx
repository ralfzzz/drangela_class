import React from "react";
const {Card} = require('./Card');
const {emojipedia} = require('../emojipedia');

function generateCard(emojiData){
    return(
        <Card key={emojiData.id} emoji={emojiData.emoji} name={emojiData.name} meaning={emojiData.meaning}/>
    )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
       {emojipedia.map(generateCard)}
      </dl>
    </div>
  );
}

export default App;
