function add(num1,num2) {
    return num1+num2;
}
function substract(num1,num2) {
    return num1-num2;
}
function multiply(num1,num2) {
    return num1*num2;
}
function divide(num1,num2) {
    return num1/num2;
}
function calculator(num1,num2,operator) {
    return operator(num1,num2);
}

//evenlistener
$0.innerHTML="haha";
'haha'
$0.addEventListener("click", function () {
    alert("hahah");
});


//object
var houseKeeper1 = {
    nama : "hahi",
    age : 22,
    languages : [
        "indo",
        "eng"
    ]
}

//constractor function
function HouseKeeper(nama,age,languages) {
    this.nama = nama;
    this.age = age;
    this.languages = languages;
}