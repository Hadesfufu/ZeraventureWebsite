/**
 * Created by Yohan on 21/06/2016.
 */
$(document).ready(function(){
    $( window ).scroll(function() {
        /*var next = $(".active").next();
        next.addClass("active");
        $(".active").removeClass("active");
        */
    });

    $("#menu").click(function(){
        var nav= $(".MenuNav");
        var icon =  $("#menu > i");
        var menu = $("#menu");
        if(nav.hasClass("navActive")){
            menu.removeClass("active");
            nav.removeClass("navActive");
            icon.removeClass("fa-angle-double-left");
            icon.addClass("fa-angle-double-right");
        }
        else {
            nav.addClass("navActive");
            menu.addClass("active");
            icon.removeClass("fa-angle-double-right");
            icon.addClass("fa-angle-double-left");
        }
    });

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});