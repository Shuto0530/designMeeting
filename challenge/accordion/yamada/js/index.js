$(function() {
    $("dd").css("display","none");
    $("dt").click(function() {;
        $(this).next().slideToggle("fast");
    });
});