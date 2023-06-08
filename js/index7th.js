function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here. 
        var sisa4 = year%4;
        var sisa100 = year%100;
        var sisa400 = year%400;
        if (sisa4 === 0 ) {
            if (sisa100 === 0) {
                if (sisa400 === 0) {
                    console.log("Leap year.")
                } else {
                    console.log("Not leap year.")
                }
            } else {
                console.log("Leap year.")    
            }
        } else {
            console.log("Not leap year.")
        }   
    
    
        
    
    /**************Don't change the code below****************/    
    
    }

    isLeap(1989);