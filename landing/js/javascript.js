//var arrow = document.getElementById("arrow");


var $arrow = $("#arrow a");

var $off = $("main").offset().top;

$("arrow, html").on("click", function () {
    $("body").animate({
        scrollTop: $("main").offset().top
    }, 1000)
})
