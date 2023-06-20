// alert("js ok!");
var buttonColours = [
    "red",
    "blue",
    "green",
    "yellow"
]

var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChoosenColour);
    animateFlash(randomChoosenColour);
    palySounds(randomChoosenColour);
}

function animateFlash(randomChoosenColour) {
    $("#"+randomChoosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function palySounds(randomChoosenColour) {

    var audio = new Audio("./sounds/"+randomChoosenColour+".mp3");
    audio.play();

}

function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");
    setTimeout(() => {
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}

// function clickedColor() {
    // $(document).keypress((event) => {
    $(".btn").click((event) => {
        // console.log(event.target.id);
        var userChoosenColor = event.target.id;
        userClickedPattern.push(userChoosenColor);
        palySounds(userChoosenColor);
        animatePress(userChoosenColor);
    });
// }

$(document).keypress((event) => {

});






// var key = randomChoosenColour;
    // switch (key) {
    //     case "red":
    //         var audioRed = new Audio('./sounds/red.mp3');
    //         audioRed.play();
    //         break;
    
    //     case "blue":
    //         var audioRed = new Audio('./sounds/blue.mp3');
    //         audioRed.play();
    //         break;

    //     case "green":
    //         var audioRed = new Audio('./sounds/green.mp3');
    //         audioRed.play();
    //         break;

    //     case "yellow":
    //         var audioRed = new Audio('./sounds/yellow.mp3');
    //         audioRed.play();
    //         break;
        
    //     default:console.log(key);
    //         break;
    // }