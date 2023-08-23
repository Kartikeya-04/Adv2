// alert("hello");

$(window).on("load",function(){
    setTimeout(function(){
    $(".foot1").fadeOut("slow").fadeIn("slow");
    $(".foot1").fadeOut("slow").fadeIn("slow");

    
    },2000)
})
// Color change
$(".tag1").on("mouseover",function(){
    $(".tag1").css("background-color","burlywood")
})
$(".tag1").on("mouseout",function(){
    $(".tag1").css("background-color","white")
})

$(".tag3").on("mouseover",function(){
    $(".tag3").css("background-color","gold")
})
$(".tag3").on("mouseout",function(){
    $(".tag3").css("background-color","	khaki")
})

$(".tag2").on("mouseover",function(){
    $(".tag2").css("background-color","lavender")
})
$(".tag2").on("mouseout",function(){
    $(".tag2").css("background-color","	mistyrose")
})

// Slide effect

$(window).on("load",function(){
    setTimeout(function(){ 
    $(".tag1").slideUp("slow","linear").slideDown("slow","linear");
},3000);

})

$(window).on("load",function(){
    setTimeout(function(){ 
    $(".tag2").slideUp("slow","swing").slideDown("slow","swing");
},5000);

})
$(window).on("load",function(){
    setTimeout(function(){ 
    $(".tag3").slideUp("fast","swing").slideDown("slow","swing");
},7000);

})


$(window).on("load",function(){
    $(".Fadee").hide("slow").show("slow");
})

