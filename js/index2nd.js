// slice
var text = prompt("Your Text: ");
var maxText = 140;
var cutText = text.slice(0,140);
var currentText = cutText.length;
alert(cutText);
alert("Panjang text anda: " + currentText);
alert("Sisa karakter: " + (maxText-currentText));

// slice2
var name = prompt("Your name: ");
var upName = name.slice(0,1).toUpperCase();
var restName = name.slice(1,name.length).toLowerCase();
alert(upName+restName);

// dog-human age calculator
var dogAge = prompt("Umur anjing anda: ");
var humanAge = (((dogAge-2)*4)+21);
alert(humanAge);