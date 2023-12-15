import React from "react";
const { Card } = require('./Card');
const { contacts } = require('../contact');

// console.log(contacts[0].name);


function App() {
  return (
    <div>
    <h1 className="heading">My Contacts</h1>
    <Card name={contacts[0].name} image={contacts[0].imgURL} phone={contacts[0].phone} email={contacts[0].email} />
    <Card name={contacts[1].name} image={contacts[1].imgURL} phone={contacts[1].phone} email={contacts[1].email} />
    </div>
  );
}

export default App;
