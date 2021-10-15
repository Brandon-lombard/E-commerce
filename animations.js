// js animations 


$("document").ready(function () {

        moveElements();
    }


);

// Page animations

// Chaining Elements to move them around

$("#h1").css("position", "relative").css("right", "100%");

$(".indexBanner").css("position", "relative").css("right", "100%");

$(".featureFade").css("opacity", "0");


function moveElements() {

    $(".indexBanner").animate({
        left: "0"
    }, 900);

};


$(window).scroll(function () {

    $(".featureFade").animate({
        opacity: "1"
    }, 2000);



});

$(".quickAdd").hover(function () {

    $(".quickAddDes").show();

});

$(".quickAdd").mouseleave(function () {

    $(".quickAddDes").hide();

});