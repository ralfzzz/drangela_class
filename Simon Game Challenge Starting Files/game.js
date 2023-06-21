// alert("js ok!");
var buttonColours = [
    "red",
    "blue",
    "green",
    "yellow"
]
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChoosenColour);
    animateFlash(randomChoosenColour);
    palySounds(randomChoosenColour);
    levelCounter();
    userClickedPattern = [];
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

function animateGameOver() {
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 100);
}

function levelCounter() {
    level += 1;
}

function startOver() {
    started = false;
    level = 0;
    userClickedPattern = [];
    gamePattern = [];
}

function checkAnswer(currentLevel) {

        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
            console.log("true");
            if (gamePattern.length === userClickedPattern.length) {
                setTimeout(() => {
                    nextSequence();
                    $("h1").text("Level " + level);
                }, 1000);
            }
        } else {
            console.log("false");
            $("h1").text("Game Over!!! Press any key to restart!");
            animateGameOver();
            palySounds("wrong");
            startOver();
        }
}

// function arrayEquals(a, b) {
//     return Array.isArray(a) &&
//         Array.isArray(b) &&
//         a.length === b.length &&
//         a.every((val, index) => val === b[index]);
// }

//click pattern
$(".btn").click((event) => {
    var userChoosenColor = event.target.id;
    userClickedPattern.push(userChoosenColor);
    palySounds(userChoosenColor);
    animatePress(userChoosenColor);
    var currentLevel = userClickedPattern.length-1;
    checkAnswer(currentLevel);
    
});

//start the game
$(document).keypress(() => {
    if (!started) { //track start only one time
        nextSequence();
        // console.log(level);
        $("h1").text("Level " + level);
        started = true;
    }
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