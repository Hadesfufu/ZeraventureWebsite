/**
 * Created by Yohan on 21/06/2016.
 */

function initProgress(elem){
    var elem = new ProgressBar.Circle(elem, {
        color: '#23b93c',
        strokeWidth: 50,
        svgStyle: {
            display: 'block',
            width: '100%'
        },
        easing: 'easeOut',
    });
    return elem;
}

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



    var moteur, scenario, graphiques, musique;
    var moteurValue = $('.moteur > .progressCircle').attr("percent");
    var scenarioValue = $('.scenario > .progressCircle').attr("percent");
    var graphiquesValue = $('.graphique > .progressCircle').attr("percent");
    var musiqueValue = $('.musique > .progressCircle').attr("percent");

    moteur = initProgress(".moteur > .progressCircle");
    scenario = initProgress(".scenario > .progressCircle");
    graphiques = initProgress(".graphique > .progressCircle");
    musique = initProgress(".musique > .progressCircle");

    moteur.animate(moteurValue);
    moteur.setText(moteurValue * 100 + "%");

    scenario.animate(scenarioValue);
    scenario.setText(scenarioValue * 100 + "%");

    graphiques.animate(graphiquesValue);
    graphiques.setText(graphiquesValue * 100 + "%");

    musique.animate(musiqueValue);
    musique.setText(musiqueValue * 100 + "%");

    $(".progressbar-text").css("color", "white");
    $(".progressbar-text").css("font-size", "2.3em");

    $('.progressBarContainer').show('slow', function(){
    });
});