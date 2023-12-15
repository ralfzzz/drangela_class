import React from "react";
const { Card } = require('./Card');
const { contacts } = require('../contact');
const {Avatar} = require('./Avatar');

function App() {
  return (
    <div>
    <h1 className="heading">My Contacts</h1>
    <Avatar imgUrl="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" />
    <Card name={contacts[0].name} image={contacts[0].imgURL} phone={contacts[0].phone} email={contacts[0].email} />
    <Card name={contacts[1].name} image={contacts[1].imgURL} phone={contacts[1].phone} email={contacts[1].email} />
    </div>
  );
}

export default App;
