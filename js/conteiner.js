"use strict";
$(document).ready(function() {
var cont_left = $ ("#blok2") .position().left;
$("a img").hover (function() ( 
    // приближение
    
    $(this).parent().parent().css ("z-index", 1);
    $(this).animate((
    height: "250",
    widht: "250",
    left: "-=50",
    top: "-=50",
    ), "fast");
    ),function () (
    //отделение
    
    $(this).parent().parent().css ("z-index", 0);
    $(this).animate((
    height: "250",
    widht: "250",
    left: "-=50",
    top: "-=50",
    ), "fast");
));
    
    $(" .img").each(function(index) (
        var left = (index * 160) + cont_left;
        $(this).css("left", left + "px");
    ));
    ));
    
    
    
    
    
    
    