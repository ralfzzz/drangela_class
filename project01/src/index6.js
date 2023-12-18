import React from "react";
import ReactDOM from "react-dom";

const {cars} = require('./components/practice');

// cars.map((car)=>{
    // console.log(car.model);
// });
const [honda, tesla] = cars;
const {speedStats:{ topSpeed:hondaTopSpeed }, coloursByPopularity:[hondaTopColour,hondaTopColour2]} = honda;
// const {topSpeed= "200" , zeroToSixty} = honda.speedStats;
// const hondaTopColour = honda.coloursByPopularity[0];

const teslaTopSpeed = tesla.speedStats.topSpeed;
const teslaTopColour = tesla.coloursByPopularity[0];

console.log(hondaTopColour2);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);