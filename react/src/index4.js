//Create a React app from scratch.
const React = require("react");
const ReactDOM = require("react-dom");
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
const currentHour = new Date(2023, 12, 12, 20).getHours();
var greeting;
const styleGreeting = {
  color: "",
};

if (currentHour <= 12) {
  greeting = "Good Morning";
  styleGreeting.color = "red";
} else if (currentHour <= 18) {
  greeting = "Good Afternoon";
  styleGreeting.color = "green";
} else {
  greeting = "Good Evening";
  styleGreeting.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={styleGreeting}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
