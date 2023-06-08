//1st
// var name1 = "rifqi aziz";
// var name2 = "risa";
// var n = Math.random();
// var loveLevel = n*100 + 1;
// console.log("Kecocokan Anda sebesar " + Math.floor(loveLevel) + "%");

//2nd
// if (loveLevel > 80) {
//     console.log("Kecocokan Anda sebesar " + Math.floor(loveLevel) + "%. " + "Best Couple!!");
// } else {
//     console.log("Kecocokan Anda sebesar " + Math.floor(loveLevel) + "% " + "Not bad yeah!!");
// }

//3rd
// if (loveLevel > 70) {
//     console.log("Kecocokan Anda sebesar " + Math.floor(loveLevel) + "%. " + "Best Couple!!");
// } 
// if (loveLevel > 30 && loveLevel <=70) {
//     console.log("Kecocokan Anda sebesar " + Math.floor(loveLevel) + "% " + "Not bad yeah!!");
// }

// if (loveLevel<30){
//     console.log("Dasar air dan api!!!");
// }

//4th
function bmiCalculator (weight, height) {
    var interpretation = "";
    var bmi = weight/(Math.pow(height,2));
    if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is "+bmi+", so you have a normal weight.";
    }
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    return interpretation;
}

console.log(bmiCalculator(60, 2));