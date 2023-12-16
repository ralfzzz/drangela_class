import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
const {notes} = require('../notes')

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteValue)=>{
        return(
            <Note key={noteValue.key} title={noteValue.title} content={noteValue.content}/>
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
