function otherEventListener(type,callback){
    var object = {
        type: "hah",
        other: "tes"
    }

    if (object.type = type){
        callback(object);
    }
}

otherEventListener("hah",function (event) {
    console.log(event);    
})
//function (event) {   console.log(event);    } fungsi yang berperan sebagai input fungsi higher order; isstilahnya callback function; 