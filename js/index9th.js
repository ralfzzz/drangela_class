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