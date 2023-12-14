//Create a react app from scratch.
const React = require("react");
const ReactDOM = require("react-dom");

//It should display 2 paragraph HTML elements.
const name = "Rifqi Aziz";
const currentYear = new Date().getFullYear();
const randomImage = "https://picsum.photos/seed/picsum/200/300";
const styleRed = {
  color: "red",
  fontSize: "24px",
};

styleRed.color = "blue";

ReactDOM.render(
  <div>
    <p className="name">Created by {name}</p>
    <p className="year">Copyright {currentYear}</p>
    <p className="yeah" style={styleRed}>
      Copyright yeah
    </p>
    <ul>
      <li>tes</li>
      <li>tes2</li>
    </ul>
    <img src={randomImage} alt="random image" />
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
