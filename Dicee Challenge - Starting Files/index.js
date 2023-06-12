// document.querySelector(".img1").setAttribute("src","./images/dice6.png");

// document.querySelector(".img2").setAttribute("src","./images/dice6.png");

//dice1
var randomNum1 = Math.floor(Math.random() * 6) + 1; //1-6
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNum1+".png");

//dice2
var randomNum2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNum2+".png");

//logic conditions
if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
} else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw draw draw!!!";
}