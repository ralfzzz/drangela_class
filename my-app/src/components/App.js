import React from "react";
const { Card } = require('./Card');
const { contacts } = require('../contact');
const {Avatar} = require('./Avatar');

function generateCard(contact){
  return(<Card key={contact.id} id={contact.id} name={contact.name} image={contact.imgURL} phone={contact.phone} email={contact.email} />)
}

function App() {
  return (
    <div>
    <h1 className="heading">My Contacts</h1>
    <Avatar imgUrl="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" />
    {contacts.map(generateCard)}
    </div>
  );
}

export default App;
