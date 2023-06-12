function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var output = [];
        if (n===1) {
            output = [0];
        } else if(n===2){
             output = [0,1];
        } else if (n===0){
             output = "hahahahahah!";
        } else{
            var startNum = [0,1];
            for (let i = 1; i <= (n-2); i++) {
                var lastNum = startNum.length - 1;
                var secondLastNum = startNum.length - 2;
                var sum = startNum[lastNum] + startNum[secondLastNum];
                startNum.push(sum);
                output = startNum;  
            }
        }
        return output;
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }