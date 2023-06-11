var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    var randomNumList = Math.floor(Math.random() * names.length);
    var nameSelected = names[randomNumList];
    var output = nameSelected + " is going to buy lunch today!";
    return output;
/******Don't change the code below*******/    
}

var nBottles = 99;
function fizzBuzz() {

    while (nBottles>0){
    if (nBottles > 1) {
          console.log(nBottles + " bottles of beer on the wall. Take one down, pass it around,"); 
          nBottles--;
          console.log(nBottles + " bottles of beer on the wall");  
    } else if (nBottles = 1){
          console.log(nBottles + " bottle of beer on the wall. Take one down, pass it around,");
          nBottles--;
          console.log("No bottles of beer on the wall");  
    }
    }
    nBottles = 99;
    console.log("No bottles of beer on the wall, Get " + nBottles + " again!");
}