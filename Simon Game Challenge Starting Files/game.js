// alert("js ok!");
var buttonColours = [
    "red",
    "blue",
    "green",
    "yellow"
]

var gamePattern = []

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChoosenColour);
}