// $("h1").css("color", "red");
// $("*").css("background-color", "white");

// $("h1").text("ai");
// $("button").text("aihhu");
// $($("button")[1]).html("<strong>hah</strong>"); //selecting one

// $("button").click(()=> {
//     $("h1").css("color","red");
// });

// $("input").keypress((event)=> {
//     console.log(event.key);
// });

// $(document).keypress((event)=> {
//     $("h1").text(event.key);
// });

$("button").click(()=> {
    $("h1").slideUp().slideDown().animate({opacity: '0.3'});
});

