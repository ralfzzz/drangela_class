const React = require("react");
const ReactDOM = require("react-dom");

const fName = "Rifqi";
const lName = "A";

ReactDOM.render(
  <div>
    <h1>
      Hello Worl!d, I am {fName} {lName}.
    </h1>
  </div>,
  document.getElementById("root")
);
