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

//constractor function: function to easily create object
function HouseKeeper(nama,age,languages) {
    this.nama = nama;
    this.age = age;
    this.languages = languages;
}

//to create object using constractor function
var houseKeeper2 = new HouseKeeper (["Rifqi","Aziz"],"Magelang",23);
houseKeeper2.name;//to call object properties
houseKeeper2.bebersih();//to call method

//methods: function inside object
function HouseKeeper (nama, asal, umur){
    this.nama = nama;
    this.asal = asal;
    this.umur = umur;
    this.bebersih = function (){ //this is method
        alert("proses bebersih!");
    }
}