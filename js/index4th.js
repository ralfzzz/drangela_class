function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        var yearLeft = 90 - age;
        var monthLeft = yearLeft*12;
        var weeksLeft = yearLeft*52;
        var daysLeft = yearLeft*365;       
        console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthLeft + " months left.");
    /*************Don't change the code below**********/
    }

lifeInWeeks(51);