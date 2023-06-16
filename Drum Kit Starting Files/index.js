
// for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         alert("wwwwwwwwwwwwww");
//     });    
// }


for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            
            var clicked = this.innerHTML;
            // alert(clicked);
            makeSounds(clicked);
            animateCLick(clicked);
            
        });    
    }

    document.addEventListener("keypress", function(event) {
        
        var key = event.key;
        // console.log(key);
        
            makeSounds(key);
            animateCLick(key);
            // animateCLickUp(key);
            
    })

    function makeSounds(key) {
        switch (key) {
            case "w":
                var tom1 = new Audio ("./sounds/tom-1.mp3");
                tom1.play();
            break;
            
            case "a":
                var tom2 = new Audio ("./sounds/tom-2.mp3");
                tom2.play();
            break;
                
            case "s":
                var tom3 = new Audio ("./sounds/tom-3.mp3");
                tom3.play();
            break;

            case "d":
                var tom4 = new Audio ("./sounds/tom-4.mp3");
                tom4.play();
            break;
        
            case "j":
                var snare = new Audio ("./sounds/snare.mp3");
                snare.play();
            break;

            case "k":
                var kick = new Audio ("./sounds/kick-bass.mp3");
                kick.play();
            break;

            case "l":
                var crash = new Audio ("./sounds/crash.mp3");
                crash.play();
            break;


            default: console.log(key);
        }
    }

    function animateCLick(trigger) {
        var active = document.querySelector("."+trigger);
        switch (trigger) {
            case "w":
                active.classList.add("pressed");
                setTimeout( function() {                    //penulisan function
                    active.classList.remove("pressed");     //callback function supaya tida perlu mendefinisika nfunction
                }, 100);
            break;
            
            case "a":
                active.classList.add("pressed");
                setTimeout(() => {                          //cara lain menulis function
                    active.classList.remove("pressed");
                }, 100);
            break;
                
            case "s":
                active.classList.add("pressed");
                setTimeout(() => {
                    active.classList.remove("pressed");
                }, 100);
            break;

            case "d":
                active.classList.add("pressed");
                setTimeout(() => {
                    active.classList.remove("pressed");
                }, 100);
            break;
        
            case "j":
                active.classList.add("pressed");
                setTimeout(() => {
                    active.classList.remove("pressed");
                }, 100);
            break;

            case "k":
                active.classList.add("pressed");
                setTimeout(() => {
                    active.classList.remove("pressed");
                }, 100);
            break;

            case "l":
                active.classList.add("pressed");
                setTimeout(() => {
                    active.classList.remove("pressed");
                }, 100);
            break;


            default: console.log(trigger);
        }
        

    }

    // function animateCLickUp(trigger) {
    //     var active = document.querySelector("."+trigger);
    //     active.classList.remove("pressed");
    // }


    


    // var audio = new Audio('./sounds/tom-1.mp3');
    //         audio.play();
    // this.style.color="red";